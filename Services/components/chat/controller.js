const store = require('./store');

const AddChat = (users) => {
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid Users list')
    }
    const chat = {
        users: users,
    }
    return store.add(chat);
}

const ListChats = userId => {
    return store.list(userId);
}

module.exports = {
    AddChat,
    ListChats,
}