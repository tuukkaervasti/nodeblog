const mongoose = require('mongoose');
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser : true});


//Add a few posts to the database
/* BlogPost.create({
    title: "The budding photographer's plight",
    body: "… all that a poem can do is make the heart feel Lifeless illusions of things not quite real...This is just a bad poem and I have no remorse. This is just a bad poem and for it I’ve no recourse. And if you say this poem’s bad, I’ll say: no, it’s worse. Yeah, I just rhymed remorse with worse. Case in point."   
}, (error, blogpost) => {
    console.log(error, blogpost);
});

BlogPost.create({
    title: "If the artistry doesn't cut it, there's always driving a cab?",
    body: "… all that a poem can do is make the heart feel Lifeless illusions of things not quite real...This is just a bad poem and I have no remorse. This is just a bad poem and for it I’ve no recourse. And if you say this poem’s bad, I’ll say: no, it’s worse. Yeah, I just rhymed remorse with worse. Case in point."   
}, (error, blogpost) => {
    console.log(error, blogpost);
}); */

// Find blog posts from MongoDB (empty curl brackets signify selecting _all_ documents)
BlogPost.find({}, (error, blogspot) => {
    console.log(error, blogspot);
});


