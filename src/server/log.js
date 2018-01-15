import chalk from 'chalk';

export default function(
    before = '',
    text,
    after = '',
    color = chalk.white,
    length = 60) {

    text = text.length ? ` ${text} ` : '';
    const afterRepeat = length - (before.length + text.length);
    console.log(color(before + text + after.repeat(afterRepeat)));
}