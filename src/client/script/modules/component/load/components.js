const components = require.context('../../../vue', true, /.*\.vue$/);
export default function(query) {
    const results = {};
    const reg = new RegExp(`^\.(\/[\\w-]+)?(\/${query})(\/[\\w-]+)?\.vue$`);
    components.keys().forEach((key) => {
        if (reg.test(key)) {
            const name = 'ai-' + key.replace(/^\.\/.*\/([^/]*).vue$/, '$1');
            results[name] = components(key).default;
        }
    });
    return results;
}