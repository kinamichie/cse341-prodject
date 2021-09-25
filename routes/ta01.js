const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
// Remember Team Activity 01? 
// This is the same solution, but implemented in our app using 
// proper routing for the view engine

const activities = ['soccer', "basketball", "football", "swimming"];
router.get('/', (req, res, next) => {
    // Request handling
    // CORE CHALLENGE 1 -
    // HTML page is written
    res.write('<html>');
    res.write('<head><title>Hello Browser!</Title></head>');
    res.write('<style>');
    res.write('body { background-color: #8e9aaf} h1 {padding: 1em; text-align: center;} a {list-style-type: none; color: black; text-decoration: none; margin-left: 2em;} a:hover {color: white;}');
    res.write('</style>');
    res.write('<body>');
    res.write('<h1>Welcome to my world!</h1>');
    // navigation to your activities endpoint.
    res.write('<a href="/">Home</a></br>')
    res.write('<a href="ta01/activities">Activities List</a></br>');
    // These are navigation links for the stretch challenges
    res.write('<a href="ta01/stretch-1">Stretch 1 (CSS)</a></br>');
    res.write('<a href="ta01/stretch-2">Stretch 2 (Write Form input to text input)</a></br>');
    res.write('<a href="ta01/activities">My Stretch 2 (Write Form input to text input)</a></br>');
    res.write('<a href="ta01/stretch-3">Stretch 3 (Add two number inputs together)</a></br>');
    res.write('<a href="ta01/add-activity">My Stretch 3 (Write Form input to text input)</a></br>');
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
});

// CORE CHALLENGE 2 -
router.get('/activities', (req, res, next) => {
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    // Loop through activities using for...of loop to display the list
    for (const activity of activities) {
        res.write(`<li>${activity}</li>`);
    }
    res.write('</ul>');
    // Form for "./add-activity".
    res.write('<form action="./activities" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
});
router.post("/activities", (req, res, next) => {
    //console.log();
    const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
            console.log(req.body);        
});
return req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const message = parsedBody.split('=')[1]; 
    console.log(message);
    fs.writeFile('activities.txt', message, err => {
        res.statusCode = 302;
         res.setHeader('Location', '/');
        return res.end();   
    });

}); 
}); 



// CORE CHALLENGE 3 -
router.get('/add-activity', (req, res, next) => {
    res.write('<html');
    res.write('<body>');
    res.write('<form action="/add-activity" method="POST">');
    res.write('First Number: <input name="firstNumber" type="number"> + ');
    res.write('Second Number: <input name="secondNumber" type="number">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});
router.post("/activities", (req, res, next) => {
    //console.log();
    const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);        
});
console.log(body);

return req.on('end', () => {
    let parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const message = parsedBody.split('=')[1]; 
    console.log(message);
    fs.writeFile('activities.txt', message, err => {
        res.statusCode = 302;
         res.setHeader('Location', '/');
        return res.end();   
    });

}); 
});

/***************************************************************************
* STRETCH CHALLENGE SOLUTIONS
* These are the solutions for the stretch challenges.
***************************************************************************/
// STRETCH CHALLENGE 1 - Add CSS.
router.get("/stretch-1", (req, res, next) => {
    // This will be fairly similar to any HTML page, but have internal CSS
    // This is not the only way to do it. In fact, you can link external CSS
    // with some more work. (hint: look up serving static pages, or Express,
    // which we'll be using in the future.)
    res.write('<html>');
    res.write('<head><title>Hello Browser!</Title>');
    // Really basic styling with some pizzazz....
    res.write('<style>');
    res.write('body { background-image: linear-gradient('
            +'to left, violet, indigo, blue, green, yellow, orange, red); color: White}');
    res.write('</style>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Welcome to my world, now in color!</h1>');
    res.write('</body>');
    res.write('</html>');

    return res.end();
});


// STRETCH CHALLENGE 2 - Write to file.
router.get("/stretch-2", (req, res, next) => {
    // You will either need to name your post request differently, or
    // determine whether it is a POST request or not with another bool operator.
    // No post request, just write the form page...
    res.write('<html>');
    res.write('<body>');
    // Form for "./stretch-2 POST request".
    res.write('<form action="./stretch-2" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Remember to end the response!
});
// The url can be identical.
router.post("/stretch-2", (req, res, next) => {
    console.log('Post request!');
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(message);
        fs.writeFile('stretch2.txt', message, err => {
            res.writeHead(302, {'Location': '/'}); // Redirect
            return res.end();
        });
    });
});

// STRETCH CHALLENGE 3 - Add two numbers...
router.get("/stretch-3", (req, res, next) => {
    // Same routine from stretch-2 on the POST requests...
    res.write('<html>');
    res.write('<body>');
    // Form for "./stretch-2 POST request".
    res.write('<form action="./stretch-3" method="POST">');
    res.write('<input type="number" name="op1">+');
    res.write('<input type="number" name="op2">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Remember to end the response!
});
router.post("/stretch-3", (req, res, next) => {
    console.log('Post request!');
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    console.log(body);

    return req.on('end', () => {
        // A let is appropriate here because we'll be modifying it.
        let parsedBody = Buffer.concat(body).toString();
        parsedBody = parsedBody.split('&'); // Seperate key-val pairs
        const values = []; // Array to store retrieved values.
        for (let key_val_pair of parsedBody) {
        console.log('KeyVal pair: ' + key_val_pair);
        values.push(key_val_pair.split('=')[1]); // Push value into array.
        }

        // You will need to use JS' parseInt to convert the variable from type
        // string to number, otherwise they will concat like a string.
        // e.g. 11+15 will log a string of '1115'.
        console.log(parseInt(values[0]) + parseInt(values[1])); // Console log the sum
        res.writeHead(302, {'Location': '/'}); // Redirect to home
        return res.end();
    });
});
module.exports = router;