const store = require('./store');

const AddUser = (name) => {

    if(!name){
        return Promise.reject('Invalid Name');
    }

    const user = {
        name
    };

    return store.add(user);
}
const GetListUsers = (filter) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filter))
    })
}

module.exports = {
    AddUser,
    GetListUsers,
    
}