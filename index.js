const page2pdf = require('./src/index.js');

if (!module.parent) {
  const [_, ] = process.argv;
  page2pdf()  
}
