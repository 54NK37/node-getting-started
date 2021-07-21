// *** Wrapping function by node with return as well

// function(exports,module,require,__filename,__dirname)
// {
console.log(arguments);
module.exports.b=22
// exports is an alias of modeule.exports
exports.a=33;
// return module.exports
// }