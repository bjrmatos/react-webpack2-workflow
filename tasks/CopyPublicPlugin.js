
const ncp = require('ncp').ncp;

function CopyPublicPlugin(options) {
  this.options = options;
}

CopyPublicPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('after-emit', (compilation, done) => {
    console.log(`copying public folder ${this.options.public} into ${this.options.dist}`);

    ncp(this.options.public, this.options.dist, (err) => {
      if (err) {
        return done(err);
      }

      console.log('copying public resource done!');

      done();
    });
  });
};

module.exports = CopyPublicPlugin;
