// Dummy MongoDB connection for deployment without database
module.exports = {
    connect: async () => console.log("MongoDB not connected (dummy mode)")
};
