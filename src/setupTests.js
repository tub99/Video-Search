import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.shallow = shallow;
global.mount = mount;
configure({ adapter: new Adapter() });
