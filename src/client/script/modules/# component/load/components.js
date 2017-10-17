let components = require.context('../vue', true, /.*\.vue$/);
export default function (query) {
    let results = {};
    let reg = new RegExp(`^..*/${query}(.vue)?$`);
    components.keys().forEach((key) => {
        if (reg.test(key)) {
            let name = 'ai-' + key.replace(/^\.\/.*\/([^/]*).vue$/, '$1');
            results[name] = components(key).default;
        }
    });
    return results;
}