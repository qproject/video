require('./video.styl');
module.exports = {
    template: require('./video.jade'),
    imports(data) {
        return data;
    },
    exports(scope) {
        return scope;
    }
};