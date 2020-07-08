// We define it's global here, the @typedef shows that it's 
/**
 * @namespace $file
 * @typedef {Filesystem}
 */

/**
 * API for interacting with Windows93's filesystem.
 */
class Filesystem {
  /**
   * Retrieve the contents of a file.
   * @param {String} path Path to the file to open
   * @param {String} format The class to return the file's data in, this can be 'ArrayBuffer' and anything that can be converted from it by $io.ArrayBuffer
   * @param {StandardCallback} callback 
   */
  open(path, format, callback) {}
}