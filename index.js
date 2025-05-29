let disableErrors = false;

function setDisableErrors() {
  disableErrors = !disableErrors;
}

if (disableErrors) {
  global.Error = class SilentError extends Error {
    constructor(message) {
      super();
    }
  };
}

function use() {
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};
console.debug = () => {};
console.trace = () => {};
console = () => {};

process.emitWarning = () => {};
process.on('warning', () => {});
process.on('unhandledRejection', () => {});
process.on('rejectionHandled', () => {});
process.on('uncaughtException', () => {});
process.on('uncaughtExceptionMonitor', () => {});
process.on('multipleResolves', () => {});

process.on('uncaughtException', () => {});
process.on('unhandledRejection', () => {});
}

module.exports = {use, setDisableErrors}
