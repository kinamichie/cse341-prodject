const fs = require('fs');
const path = require('path');
const p = path.join(
    __dirname, '..', 'data', 'products.json'
);

module.exports = class Prod {
    static fetchAll(cb){
        fs.readFile(p, (err, fileContent) => {
            let products;
            if(err) {
                products= [];
            } else {
                products = JSON.parse(fileContent);
            }
            cb(products);
        });
    }
    static search(query, cb){
        fs.readFile(p, (err, fileContent) => {
            let products;
            if (err) 
                products= [];
             else 
                products = JSON.parse(fileContent); 
                const filteredProducts = products.filter((product) => {
                    let tagFound = false;
                    product.tags.forEach((tag) => { 
                        if (tag.toLowerCase().includes(query)) tagFound = true;
                    });
                    return (tagFound || product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
                });  
                cb(filteredProducts);

        });
        
    }
};

             
                
                    
                    
                       