const express = require('express')

const menu = {
    'Number 9': 1.99,
    'Number 9 Large': 2.99,
    'Number 6 with Extra Dip': 3.25,
    'Number 7': 3.99,
    'Number 45': 3.45
}

module.exports = {
    getMenu: (req, res) => {
        return res.status(200).json({ menu: menu })
    },

    createMenuItem: (req, res) => {
        menu[req.param('item')] = req.param('value') 
        return res.status(200).json({ menu: menu })
    }
}