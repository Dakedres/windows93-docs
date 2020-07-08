// We do this so there's any easy way to refer to the usual (error, ...data) format of Windows93's api callbacks
// I'm bad at doing these types of things, and can fix it up later.just for now use this instead of defining a
// function with the right parameters each time.

/**
 * @param {Error|null} error The error that occured, will be null if there were none.
 * @param {...*} data The returned data from the method.
 */
class StandardCallback extends Function {}