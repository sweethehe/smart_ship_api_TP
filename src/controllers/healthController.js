const checkHealth = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Smart Ship API is running smoothly',
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    checkHealth
};
