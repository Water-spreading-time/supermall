module.exports = {
    devServer:{
        open:true,
        port:8899,
        //设置代理
        proxy:{
            '/api':{
                target:'http://152.136.185.210:8000/api/n3',
                // ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                "components":'@/components',
                "views":'@/views',
                "network":'@/network',
                "constant":'@/constant',
                "bus":"@/bus"
            }
        }
    }
}