import components from './component/load/components';
import style from './component/style/style';
import average from './image/average';
import complier from './component/complier/complier';
import run from './component/run/run';
import find from './component/find/find';

module.exports = {
    components,
    style,
    complier,
    run,
    find,
    image: {
        average
    }
};