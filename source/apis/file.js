/**
 * The global for interacting with Windows93's filesystem
 * @namespace
 */
var $file = {}

/**
 * Retrieve the contents of a file.
 * @param {String} path Path to the file to open
 * @param {String} format The class to return the file's data in, this can be 'ArrayBuffer' and anything that can be converted from it by $io.ArrayBuffer
 * @param {$file~callback} format
 */
$file.open = () => {}

/**
 * The callback used in $file functions, similar to the standard callback used by most vanilla JS APIs.
 * @callback $file~callback
 * @param {Error} error The error that occured, will be null if there were none.
 * @param {...*} data The returned data from the method.
 */
