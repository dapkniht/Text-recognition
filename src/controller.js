const recognition = require('./recognition');

const recognitionController = {
    recognize: async (req,res) => {
        const file  = req.file.path;
        const text = await recognition(file);
        res.status(200).json({
            status: "Success",
            data: text
        });
    },

    pathRecognition: async (req,res) => {
        const {url} = req.body;
        const text = await recognition(url,"url");
        res.status(200).json({
            status: "Success",
            data: text
        });
    }
};

module.exports = recognitionController;