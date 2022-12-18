const router = require("express").Router();
const multer = require('multer');
const Data = require("../models/model");
// multet storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    
    cb(null, Date.now() +'_'+file.originalname)
  }
})
 const upload = multer({ storage: storage })


router.get("/", async (req, res) => {
   
    const data =  await Data.find({})
    res.json(data);
});

router.post("/",upload.single('postImage'), async (req, res) => { // postImage is the name from frontend
  const { name, location, description } = req.body;
  try {
    let post = await Data.create({
        name: name,
        location: location,
        description: description,
        PostImage: req.file.path,

    })
    res.json({post})
    console.log(post);
}
catch (err) {
    res.status(400).json({
        status: "Fail",
        message: err.message
    })

}});


module.exports = router;
