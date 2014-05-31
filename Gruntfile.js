module.exports = function (grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем

        uglify: {
            options: {
                  sourceMap: true
            },
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': [
                        ""
                    ]

                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                     sourceMap: true,
                     sourceMapFilename: 'build/css.min.css.map',
                     sourceMapRootpath: '../'
                },
                files: {
                  //  "module/dtp/dtp.css": "module/dtp/dtp.less",
                    "build/css.css": [
                        "lib/leaflet/leaflet.css",
                       "css/main.less"
                    ]
                }
            }
        },

        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: [
                    "css/main.less"
                ],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-uglify');//
    grunt.loadNpmTasks('grunt-contrib-less');//
    grunt.loadNpmTasks('grunt-contrib-watch');//

    // Задача по умолчанию
    grunt.registerTask('default', ['less','watch' ]);

};