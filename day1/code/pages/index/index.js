// vue   script  data(){ return {  msg:"文本内容"  }  } 
// 注册页面
Page({
  // 页面初始数据
  data:{
      msg:"文本内容",
      id:1000,
      arr:[10,20,30,40]
  },
  num:100,
  // 自定义函数，直接在对象中进行定义
  click:function(e){   
      let {age,name} = e.target.dataset;
      // console.log( {age,name})

      // 获取data中的数据
      // console.log(this.data.msg)
      // 设置data属性
      this.setData({
        msg:name
      })
  }
})