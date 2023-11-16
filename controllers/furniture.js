const furniture = require('../models/furniture');

exports.furniture_list = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture list');
};

exports.furniture_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture detail: ' + req.params.id);
};

exports.furniture_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture create POST');
};

exports.furniture_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture delete DELETE ' + req.params.id);
};

exports.furniture_update_put = async function(req, res) {
    try {
        let toUpdate = await furniture.findById(req.params.id);

        if (req.body.item_type) toUpdate.item_type = req.body.item_type;
        if (req.body.material) toUpdate.material = req.body.material;
        if (req.body.price) toUpdate.price = req.body.price;

        let result = await toUpdate.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};








exports.furniture_list = async function (req, res) {
    try {
        const furnitur = await furniture.find();
        res.send(furnitur);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.furniture_view_all_Page = async function (req, res) {
    try {
        const thefurniture = await furniture.find();
        res.render('furniture', { title: 'furniture Search Results', results: thefurniture });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
exports.furniture_create_post = async function (req, res) {
    console.log(req.body);
    let document = new furniture(); 
    
    document.item_type = req.body.item_type;
    document.material = req.body.material; 
    document.price = req.body.price;
   

    try {
        let result = await document.save(); 
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.furniture_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await furniture.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    exports.furniture_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await furniture.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        };
        exports.furniture_view_one_Page = async function(req, res) {
            console.log("single view for id " + req.query.id)
            try{
            result = await furniture.findById( req.query.id)
            res.render('furnituredetail',
            { title: 'furniture Detail', toShow: result });
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
        exports.furniture_create_Page = function(req, res) {
                console.log("create view")
                try{
                res.render('furniturecreate', { title: 'furniture Create'});
                }
                catch(err){
                res.status(500)
                res.send(`{'error': '${err}'}`);
                }
                };   
        exports.furniture_update_page = async function (req, res) {
                    console.log("update view for item " + req.query.id)
                    try {
                        let result = await furniture.findById(req.query.id)
                        res.render('furnitureupdate', { title: 'furniture Update', toShow: result });
                    }
                    catch (err) {
                        res.status(500)
                        res.send(`{'error': '${err}'}`);
                    }
                };
        exports.furniture_delete_Page = async function(req, res) {
                    console.log("Delete view for id " + req.query.id)
                    try{
                    result = await furniture.findById(req.query.id)
                    res.render('furnituredelete', { title: 'furniture Delete', toShow:
                    result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                    };
                   
                    
       
        
    





