module.exports = {
    basePath: "",
    useFileSystemPublicRoutes : false,
    poweredByHeader : false,
    publicRuntimeConfig : {
        appInfo : {
            applicationName : 'Covacancy',
            version : require('./package.json').version
        },
        HOMEPAGE : '/home'
    }
}