var DBconfigs = {
    localdb: {
        urldb : 'mongodb://localhost:27017/ATNShop',
        dbname : "ATNShop",
        dbusername : "",
        dbpassword : "",
    },

    clouddb: {
        urldb : "mongodb+srv://1234:trinh123@cluster0.76l4h.mongodb.net/ATNShop?retryWrites=true&w=majority",
        dbname : "ATNShop",
        dbusername : "",
        dbpassword : "",
    }

};

module.exports = DBconfigs.localdb;