// SHOWTIME GULP
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var wiredep = require('wiredep').stream;
var bower = require('gulp-bower');
var less = require('gulp-less');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var series = require('stream-series');
var _ = require('underscore');

console.log("BUILDING Dashboard");

var paths = {
    scripts: 'app/js/**/*.js',
    style: 'app/less/',
    less: 'app/less/**/*.less',
    images: 'app/img/**/*',
    templates: 'app/js/modules/**/*.hbs'
};


gulp.task('bower', function(){
    return bower();
});

gulp.task('wiredep', ['bower'], function(){
    gulp.src('app/index.html')
        .pipe(wiredep({
            exclude: ['underscore'],
            ignorePath: '../'
        }))
        .pipe(wiredep({
            exclude: [/^((?!(modernizr)).)*$/],
            fileTypes: {
                html: {
                    block: /(([ \t]*)<!--\s*head-bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi
                }
            },
            ignorePath: '../'
        }))
        .pipe(gulp.dest('app/'));
});

gulp.task('lint', function(){
    return gulp.src(paths.scripts)
        .pipe(jshint());
});

gulp.task('less', function(){
    var css = gulp.src('app/less/app.less').pipe(less({
        paths: paths.style
    }));

    css.pipe(gulp.dest('app/css/'));
});

gulp.task('templates', function(){
    gulp.src(paths.templates)
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace:'App.templates',
            processName: function(filePath) {
                // Replace absolute paths with web-hungry paths.
                var processed = declare.processNameByPath(filePath.replace('app/js/modules/', '').replace('templates', ''));
                processed = processed.split('.').join('/');
                return processed;
            }
        }))
        .pipe(concat('compiled-templates.js'))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('inject', ['templates'], function(){
    var jsFolder = 'app/js/';

    var paths = [
        'App.js',
        'AppRouter.js',
        'Bootstrap.js',
        'compiled-templates.js',
        'handlebars-helpers.js',
        'entities/**/*Model.js',
        'entities/**/*Collection.js',
        'modules/**/*.js',
    ];

    injectablePaths = _.map(paths, function(fileName){
        return jsFolder + fileName;
    });

    var stream = gulp.src(injectablePaths, {read: false});

    gulp.src('./app/index.html').pipe(
        inject(
            series(stream),
            {
                relative: true,
                transform: function(filepath){
                    return inject.transform.apply(inject.transform, arguments);
                }
            }
        )
    ).pipe(
        gulp.dest('./app/')
    )
});

gulp.task('watch', function(){
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.scripts, ['lint', 'inject']);
    gulp.watch(paths.templates, ['templates']);
    gulp.watch('./bower.json', ['bower', 'wiredep']);
});

gulp.task('build', ['bower', 'wiredep', 'less', 'templates', 'inject', 'lint'], function(cb){
    var err = null;
    cb(err);
});

gulp.task('default', ['build', 'watch']);