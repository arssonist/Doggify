
var Writable = require('stream').Writable;
function StreamingConsoleLogger(options) {
    Writable.call(this, options);    
}
require('util').inherits(StreamingConsoleLogger, Writable);
StreamingConsoleLogger.prototype._write = function (chunk) {
    console.log(this.level + ' : ' + chunk);
};
var infoLogger = new StreamingConsoleLogger({level: 'info'});
var errorLogger = new StreamingConsoleLogger({level: 'error'});

infoLogger.write('writing to the streaming console logger');
infoLogger.end();

errorLogger.write('error executing streaming console logger');
errorLogger.end();
