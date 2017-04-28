
var chico = [
  {description:"Madison Bear",

   picture:"https://pbs.twimg.com/profile_images/197076615/bear.jpg" ,

   from: "twitter.com"

  },

  {description:"Burgers and Brew",

   picture:"https://s-media-cache-ak0.pinimg.com/originals/08/7c/0b/087c0bff7b4ba4efb6883edc113c5ad4.png" ,

   from: "pintrest.com"

  },

  {
    description: "WREC" ,

    picture:"http://www.csuchico.edu/recsports/_assets/images/WREC%20Logo-no%20words.jpg",

    from:"csuchico.edu"
  },
  {
    description: "Bidwell park",
    picture:"http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
    from:"http://bidwellpark.org/"
  }
];

var current

function shuffleGallery()
{
do{
  var random = Math.floor(Math.random() * chico.length);
  console.log(random);


} while(chico[random]==current);
chico[random] = current
}
