const JOI = require('joi')

class shoeModelJoi{

  constructor(object){
    
    this.prod_id = object.prod_id;
    this.category = object.category;
    this.brand = object.brand;
    this.title = object.title;
    this.size = object.size;
    this.color = object.color;
    this.orthpedix = object.orthpedix;
    this.image = object.image;

  }
  validatePost() {
    const postSchema = JOI.object({
      prod_id: JOI.number().required(),
      category: JOI.string().required().min(3).max(50),
      brand: JOI.string().required().min(3).max(50),
      title: JOI.string().required().min(3).max(50),
      size: JOI.number().required().min(1).max(2),
      color: JOI.string().required(),
      orthpedix: JOI.string().required(),
      image: JOI.string()
    
    });
    const result = postSchema.validate(this, {abortEarly:false});
   
    return result.error ? result.error : null
  }
}

module.exports = shoeModelJoi;




 