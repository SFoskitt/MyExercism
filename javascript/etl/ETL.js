class ETL {
    transform(oldData){
        let newData = {};
        let scores = Object.keys(oldData);
        scores.forEach(ele => {
            let tmp = oldData[ele];
            tmp.forEach(ele2 => {
                let tmp2 = ele2.toLowerCase();
                newData[tmp2] = parseInt(ele);
            })
        })
        return newData;
    }
}

module.exports = ETL;