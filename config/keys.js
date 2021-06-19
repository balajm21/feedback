// keys.js - figure out what set of credentials to return
if ( process.env.NODE_ENV === 'production'){
    //we are in prod - return prod set of keys
    module.exports = requrie('./prod');

} else {
    // return dev keys
    module.exports = requrie('./dev');
}