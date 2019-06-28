import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


const tabSections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
];

describe('Accordion component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);

    });

    it('renders li empty given no section props', () => {
            const wrapper = shallow(<Accordion />);
            expect(toJson(wrapper)).toMatchSnapshot();
    });

    it( 'renders no sections by default', () => {
        const wrapper = shallow(<Accordion default={tabSections.length === 0} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it( 'renders a clicked section', () => {
        const wrapper = shallow(<Accordion sections={tabSections} />);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('p').exists()).toBe(true);
    });

    it.only('renders only the last clicked when multiple sections are clicked', () => {
        const wrapper = shallow(<Accordion sections={tabSections} />);
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('p').text()).toBe(tabSections[1].content); 
      });
    });

// The component renders no sections as active by default
// The component opens a clicked section
// The component only opens the last section when multiple sections have been clicked.
