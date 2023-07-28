const { createWorker } = require('tesseract.js');
const path = require('path');
const fs = require('fs');

const recognition = async (file,type='') => {
    const filePath = type == "url" ? file: path.resolve(file);
    const worker = await createWorker();
       return (async () => {
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(filePath);
            await worker.terminate();
            if(type != "url")fs.unlinkSync(filePath);
            return text;
        })();
}

module.exports = recognition;