module.exports = {
    publicPath: '/nl/print/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].unique = Math.round(Math.random() * 99999999);
                return args;
            })
    },
    transpileDependencies: [
        'dcc-pdf-tools',
        'jspdf',
        'vue-i18n',
        'oidc-client'
    ]
    // , devServer: {
    //     open: process.platform === 'darwin',
    //     host: '0.0.0.0',
    //     port: 8080, // CHANGE YOUR PORT HERE!
    //     https: true,
    //     hotOnly: false,
    // }
}
