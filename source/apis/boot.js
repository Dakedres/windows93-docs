/**
 * Various boot-related elements, and the current Windows 93 version
 * @property {HTMLDivElement} BIOS         - Encompasses the BIOS elements
 * @property {HTMLDivElement} BOOTLOG      - Boot log (which apps are ready, etc)
 * @property {HTMLDivElement} BIOSERROR    - Displays "BIOS ROM checksum error" if an error occurs
 * @property {HTMLDivElement} TOOLONG      - Appears if boot takes too long
 * @property {HTMLAnchorElement} REINSTALL - Link to reinstall Windows 93
 * @property {String}  VERSION             - W93 Version
 * @property {boolean} hasError            - true if Windows 93 has an error while booting (modified by onerror)
 */
var $boot = {}

// Not really sure how to document this
// @event or @callback
// Keep it undocumented for now :)
///**
// * TODO
// * @param {Error} e The error that occured
// */
//$boot.onerror = (e) => {}


/**
 * Ran at boot, used to initialise the BIOS screen
 */
function biosSetup() {}
