
const Order = require('../models/order.model');
const dish = require('../models/dish.model');
const RestaurantOrder = require('../models/restaurantorder.model');
const parameterService = require('./parameter.service');
const Cart = require('../models/cart.model');
const { default: mongoose } = require('mongoose');

module.exports = {
    checkout
};

async function checkout(data,userId){
    let price = await parameterService.getDeliveryPrice();
    let cart = new Cart();
    cart.restaurantItems = data;
    let cartPopulated = await cart.save().then(async (carts)=>{
        return await Cart.populate(carts,{path:'restaurantItems.items.dish',select: 'name price' }).then((docs)=>{
            return docs;
        });
    });
    let newOrder = new Order();
    newOrder.client = userId;
    newOrder.deliveryFee = price;
    newOrder.restaurantItems = [];
    let restaurantOrders = [];
    let total = price;
    for(let restaurantItem of cartPopulated.restaurantItems){
        let newRestaurantItem = Object.assign({},JSON.parse(JSON.stringify(restaurantItem)));
        let subtotal = 0;
        for(let item of restaurantItem.items){
            subtotal += item.dish.price*item.quantity;
        }
        newRestaurantItem.restaurantTotal = subtotal;
        newOrder.restaurantItems.push(Object.assign({},newRestaurantItem));
        let newRestaurantOrder = new RestaurantOrder(newRestaurantItem);
        newRestaurantOrder.client = userId;
        newRestaurantOrder.orderId = newOrder._id;
        restaurantOrders.push(newRestaurantOrder);
        total += subtotal;
    }
    newOrder.total = total;
    await newOrder.save();
    RestaurantOrder.insertMany(restaurantOrders);
    return newOrder.save();
}