'use strict';
var javascript = require('./javascript.js');
module.exports = typescript;
typescript.displayName = 'typescript';
typescript.aliases = ['ts'];
function typescript(Prism) {
  Prism.register(javascript);
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
  });
  Prism.languages.ts = Prism.languages.typescript;
}
