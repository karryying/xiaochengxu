// app.js
//   main。js   new  Vue（{}）
App({
  // 生命周期函数
  // 小程序初始化
  // onLaunch(e) {
  //   // console.log(123)
  //   // if (e.scene == 1001) {
  //   //   // 业务逻辑
  //   //   console.log('点餐系统')
  //   // } else if (e.scene == 1011) {
  //   //   console.log("扫码")
  //   // } else {
  //   //   console.log("其他分支")
  //   // }
  // },
  // // 小程序显示
  // onShow(e){
  //   // console.log(123)
  //   // console.log(e)
  //    if (e.scene == 1001) {
  //     // 业务逻辑
  //     console.log('点餐系统')
  //   } else if (e.scene == 1011) {
  //     console.log("扫码")
  //   } else {
  //     console.log("其他分支")
  //   }
  // }
  onShow(){
    // wx 内置对象   getLaunchOptionsSync对象中封装的方法
      let res =  wx.getLaunchOptionsSync();
      console.log(res)
      if(res.scene ==  1011){
        console.log('扫码')
      }else{
        console.log('其他')
      }
  }
})

