// when we import we dont' need the extension name
import str from './modules/Search'

// import many functions at the same time
import { add as a, multiply as m, ID } from './views/SearchView';

console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);