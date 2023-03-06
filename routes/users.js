var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile("emails.json", function(err, data){
    if(err){
      console.log(err)
    }

    const emails = JSON.parse(data);

    res.send(emails);
    return
  })
});

router.post('/add', function(req, res, next) {
  fs.readFile("mails.txt", function(err, data){
    if(err){
      console.log(err)
    }

    const emails = JSON.parse(data);

    let newEmail = req.body.email;

    emails.push(newEmail);

    fs.writeFile("mails.txt", JSON.stringify(emails), function(err){
      if(err){
        console.log(err)
      } 
  } )

    res.send(emails);
    return
  })
});


// router.post('/add', function(req, res, next) {
//   fs.readFile("emails.json", function(err, data){
//     if(err){
//       console.log(err)
//     }

//     const emails = JSON.parse(data);

//     let newEmail = req.body.email;

//     emails.push(newEmail);

//     fs.writeFile("emails.json", JSON.stringify(emails, null, 2), function(err){
//         if(err){
//           console.log(err)
//         } 
//     } )

//     fs.writeFile("mails.txt", JSON.stringify(emails), function(err){
//       if(err){
//         console.log(err)
//       } 
//   } )

//     res.send(emails);
//     return
//   })
// });

module.exports = router;
