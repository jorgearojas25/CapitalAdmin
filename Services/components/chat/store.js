const Model =  require("./model");

const AddChat =  chat => {
    let myChat = new Model(chat);
    return myChat.save();
}

const ListChats = userId =>{
    return new Promise((resolve, reject) => {
        let filter;
        if(userId){
            filter = {
                users: userId
            }
        }
        Model.find(filter).populate('users').exec((err, populated) => {
            if (err){
                reject(err);
                return false;
            }
            resolve(populated);
        })
    })
}

module.exports = {
    add: AddChat,
    list: ListChats,
}