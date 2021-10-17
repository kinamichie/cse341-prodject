exports.postCreateCookie = (req, res, next) => {
    console.log('Cookie creation!');
  };
 exports.getIndex = (req, res, next) => {
    // if (req.session.counter === undefined) {
    //   req.session.counter = 0;
    // }
    // if (!req.session.style === undefined) {
    //   req.session.counter = 0;
    // } 
    // console.log(counter);
    res.render('pages/ta05', {
     
      title: 'Team Activity 05',
      path: '/ta05',
      style: req.session.style,
      counter: req.session.counter,
    });
  };  
  exports.postStyle = (req, res, next) => {
    req.session.style = req.body.theme;
    res.redirect('/ta05'); 
  };
  
  // exports.postCounter = (req, res, next) => {
  //   req.session.counter += Number(req.body.constant); 
  //   res.redirect('/ta05');
  // };
  
  // exports.resetSession = (req, res, next) => {
  //   if (req.body.reset === 'true') {
  //     req.session.destroy(() => {
  //       res.redirect('/ta05'); 
  //     });
  //   } else {
  //     res.redirect('/ta05');
  //   }
  // };
  
 