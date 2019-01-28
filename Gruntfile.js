module.exports = function(grunt) {
  var version = 2.0;
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // 需要压缩的js文件
        src: ['static/js/money.js','static/js/order.js','static/js/sale_echarts.js','static/js/num.js','static/js/request.js',
        'static/js/script.js','static/js/setNerOldUser.js','static/js/setRadius.js','static/js/jquery-3.3.1.min.js'],
        // 输出到哪个目录下
        dest: 'dest/libs.js'
      },
    },
    // 压缩js
    uglify: {
      build: {
        src: 'dest/libs.js',
        dest: 'dest/js/libs.min.js' // 将打包好的js文件进行重命名
      }
    },
    //压缩css
    cssmin: {
      //文件头部输出信息
      main:{
        options: {
          banner: '/*!webAddr:<%= pkg.webAddr %>, author:<%= pkg.author %>, email:<%= pkg.email %>, version:v-<%= grunt.template.today("yyyy-mm-dd") %>:'+version+' */\n',
          paths:["css"],
          //美化代码
          beautify: {
            //中文ascii化，非常有用！防止中文乱码的神配置
            ascii_only: true
          }
        },
        files: [
          {
            expand: true,
            //相对路径
            cwd: 'static/css/', // css文件路径
            src: ['*.css','!*.min.css'],
            dest: 'dest/css/', // 输出到哪个目录下
            ext:".min.css" // 输出后重命名css文件
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 默认任务
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};