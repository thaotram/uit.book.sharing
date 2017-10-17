import setRule from './setRule';
import calcVariable from './calcVariable';

module.exports = function eachStyle(style, vars) {
    for (let RAW_Selector in style.rules) {
        let selector = calcVariable(RAW_Selector, vars).replace(/\s+/g, ' '),
            rule = calcVariable(style.rules[RAW_Selector], vars).replace(/\s+/g, ' ');
        setRule(selector, rule, style.group, style.overwrite);
    }
};