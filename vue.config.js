module.exports = {

  devServer: {

    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api':{//axios访问 /api ==  target + /api  
        target:'http://localhost:3000',
        changeOrigin:true,//创建虚拟服务器 
      }
    }
  }
  
}