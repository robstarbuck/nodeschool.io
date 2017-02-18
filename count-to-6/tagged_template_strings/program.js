console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function sub(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

function html(strarr, name, comment) {
    // what goes here?
    // don't forget to return the escaped string!
    return `<b>${sub(name)} says</b>: "${sub(comment)}"`;
}

