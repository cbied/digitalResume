import angularIcon from './angular.png';
import cssIcon from './css.png';
import htmlIcon from './html.png';
import nodeIcon from './node.png';
import reactIcon from './react.png';
import reduxIcon from './redux.png';
import typescriptIcon from './typescript.png';

export const media = [ reactIcon, reduxIcon, typescriptIcon, htmlIcon,
                        cssIcon, nodeIcon, angularIcon ]
const mediaByIndex = (index: number) => media[index % media.length];

export default mediaByIndex
