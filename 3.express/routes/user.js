let express = require('express');
let router = express.Router();
//存放着所有的用户信息
let users = [];
router.get('/signup',function(req,res){
  //1参数是模板的相对路径，相对于模板根目录的路径
  //模板的路径一定是一个相对路径
  res.render('user/signup',{title:'用户注册'});
});
router.post('/signup',function(req,res){
   let user = req.body;// {username,password}
   users.push(user);//把新添加的用户添到数组中去
   // redirect 重新指向
  //放的是一个URL绝对路径，一定一定要以/开头
   res.redirect('/user/signin');
});
router.get('/signin',function(req,res){
  res.render('user/signin',{title:'用户登录'});
});
router.post('/signin',function(req,res){
  let user = req.body;
  //res.render redirect 都会包含一个 res.end操作
  let oldUser = users.find(item=>item.username== user.username&&item.password == user.password);
  if(oldUser){
    res.redirect('/');
  }else{
    res.redirect('back');
  }
});
module.exports = router;