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
  fs.readFile("emails.json", function(err, data){
    if(err){
      console.log(err);

      if(err.code == "ENOENT"){
        console.log("err is ENOENT");

        let newEmail = [req.body.email];
        
        fs.writeFile("emails.json", JSON.stringify(newEmail), function(err){
          if(err){
            console.log(err)
          } 
          });
      }

      res.send({message: "Ny fil skapad"})
      return
    }

    const emails = JSON.parse(data);

    let newEmail = req.body.email;

    emails.push(newEmail);

    fs.writeFile("emails.json", JSON.stringify(emails), function(err){
      if(err){
        console.log(err)
      } 
  } )

      fs.writeFile("mails.txt", JSON.stringify(emails), function(err){
      if(err){
        console.log(err);

        let newEmail = req.body.email;
        
        fs.writeFile("mails.txt", JSON.stringify(newEmail), function(err){
          if(err){
            console.log(err)
          } 
          });
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
