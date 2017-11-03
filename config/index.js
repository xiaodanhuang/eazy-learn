// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 9604,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/loginBystuName': {
            target: 'http://127.0.0.1:8080/api/queryBystuName',
            changeOrigin:true,
            pathRewrite: {
                '^/loginBystuName': '/'
            }
        },
        '/loginByteaName': {
            target: 'http://127.0.0.1:8080/api/queryByteaName',
            changeOrigin:true,
            pathRewrite: {
                '^/loginByteaName': '/'
            }
        },
        '/loginBymanagerName': {
            target: 'http://127.0.0.1:8080/api/queryBymanagerName',
            changeOrigin:true,
            pathRewrite: {
                '^/loginBymanagerName': '/'
            }
        },
        '/manageByTeacher': {
            target: 'http://127.0.0.1:8080/api/manageByTeacher',
            changeOrigin:true,
            pathRewrite: {
                '^/manageByTeacher': '/'
            }
        },
        '/manageByCourse': {
            target: 'http://127.0.0.1:8080/api/manageByCourse',
            changeOrigin:true,
            pathRewrite: {
                '^/manageByCourse': '/'
            }
        },
        '/manageByStudent': {
            target: 'http://127.0.0.1:8080/api/manageByStudent',
            changeOrigin:true,
            pathRewrite: {
                '^/manageByStudent': '/'
            }
        },
        '/stuByCourse': {
            target: 'http://127.0.0.1:8080/api/stuByCourse',
            changeOrigin:true,
            pathRewrite: {
                '^/stuByCourse': '/'
            }
        },
        '/stuCourseByTime': {
            target: 'http://127.0.0.1:8080/api/stuCourseByTime',
            changeOrigin:true,
            pathRewrite: {
                '^/stuCourseByTime': '/'
            }
        },
        '/stuCourseByStu': {
            target: 'http://127.0.0.1:8080/api/stuCourseByStu',
            changeOrigin:true,
            pathRewrite: {
                '^/stuCourseByStu': '/'
            }
        },
        '/manageTeacherDelete': {
            target: 'http://127.0.0.1:8080/api/manageTeacherDelete',
            changeOrigin:true,
            pathRewrite: {
                '^/manageTeacherDelete': '/'
            }
        },
        '/manageCourseDelete': {
            target: 'http://127.0.0.1:8080/api/manageCourseDelete',
            changeOrigin:true,
            pathRewrite: {
                '^/manageCourseDelete': '/'
            }
        },
        '/manageStudentDelete': {
            target: 'http://127.0.0.1:8080/api/manageStudentDelete',
            changeOrigin:true,
            pathRewrite: {
                '^/manageStudentDelete': '/'
            }
        },
        '/manageCourseUpdate': {
            target: 'http://127.0.0.1:8080/api/manageCourseUpdate',
            changeOrigin:true,
            pathRewrite: {
                '^/manageCourseUpdate': '/'
            }
        },
        '/manageTeacherUpdate': {
            target: 'http://127.0.0.1:8080/api/manageTeacherUpdate',
            changeOrigin:true,
            pathRewrite: {
                '^/manageTeacherUpdate': '/'
            }
        },
        '/manageStudentUpdate': {
            target: 'http://127.0.0.1:8080/api/manageStudentUpdate',
            changeOrigin:true,
            pathRewrite: {
                '^/manageStudentUpdate': '/'
            }
        },
        '/manageCourseAdd': {
            target: 'http://127.0.0.1:8080/api/manageCourseAdd',
            changeOrigin: true,
            pathRewrite: {
                '^/manageCourseAdd': '/'
            }
        },
        '/manageTeacherAdd': {
            target: 'http://127.0.0.1:8080/api/manageTeacherAdd',
            changeOrigin: true,
            pathRewrite: {
                '^/manageTeacherAdd': '/'
            }
        },
        '/manageStudentAdd': {
            target: 'http://127.0.0.1:8080/api/manageStudentAdd',
            changeOrigin: true,
            pathRewrite: {
                '^/manageStudentAdd': '/'
            }
        },
        '/teacherByCourse': {
            target: 'http://127.0.0.1:8080/api/teacherByCourse',
            changeOrigin: true,
            pathRewrite: {
                '^/teacherByCourse': '/'
            }
        },'/teacherByChapter': {
            target: 'http://127.0.0.1:8080/api/teacherByChapter',
            changeOrigin: true,
            pathRewrite: {
                '^/teacherByChapter': '/'
            }
        }

    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
