var gulp=require('gulp'),  //gulp基础库
    concat=require('gulp-concat'),   //合并文件
    uglify=require('gulp-uglify'),   //js压缩
    rename=require('gulp-rename'),   //文件重命名
    notify=require('gulp-notify');   //提示
// 压缩 js 文件
// 在命令行使用 gulp jscompress 启动此任务
gulp.task('jscompress',function(){
    return gulp.src(['/static/js/echarts.common.min.js','/static/js/jquery-3.3.1.min.js','/static/js/money.js','/static/js/num.js','/static/js/order.js','/static/js/request.js','/static/js/sale_echarts.js','/static/js/setNewOldUser.js','/static/js/setRadius.js','/static/js/script.js','/static/js/userChart.js'])  //选择合并的JS
        .pipe(concat('order_query.js'))   //合并js
        .pipe(gulp.dest('static/js'))         //输出
        .pipe(rename({suffix:'.min'}))     //重命名
        .pipe(uglify())                    //压缩
        .pipe(gulp.dest('static/js'))            //输出 
        .pipe(notify({message:"js task ok"}));    //提示
 });
