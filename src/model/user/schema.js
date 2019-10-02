'use strict';

//What data/ functionality does our user model have?
const mongoose = require
const User = mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true },
    role: { type: String, default: 'user', enum: ['admin', 'editor', 'user'] },
    // email: {},
})

const capabilities = {
    admin: ['create', 'read', 'update', 'delete'],
    editor: ['create', 'read', 'update'],
    user: ['read'],
};

//pre-hooks, is there any considerations we need when making changes
user.pre('save', async function () {
    if 
})