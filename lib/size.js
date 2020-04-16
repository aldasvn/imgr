var sizeOf = require("image-size");

/**
 * Get the dimensions of an image.
 *
 * @param {String} path
 * @param {Function} callback - receives (err, dimensions)
 */

module.exports = function(path, callback) {
  sizeOf(path, function(err, dimensions) {
    callback(err, dimensions);
  });
};
