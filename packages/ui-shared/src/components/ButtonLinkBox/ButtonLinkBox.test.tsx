import * as React from 'react';
import { shallow } from 'enzyme';
import ButtonLinkBox, { IButtonLinkBoxProps } from './ButtonLinkBox';

const props: IButtonLinkBoxProps = {
    className: 'custom-class',
    buttonTitle: 'button title',
    buttonUrl: 'button-url',
    buttonColor: 'purple',
    linkTitle: 'link title',
    linkUrl: 'link-url',
    hAlign: 'center',
};

describe('<ButtonLinkBox />', () => {
    it('renders ButtonLinkBox', () => {
        const wrapper = shallow(<ButtonLinkBox {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders ButtonLinkBox without button', () => {
        const wrapper = shallow(<ButtonLinkBox {...props} buttonTitle={undefined} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders ButtonLinkBox without link', () => {
        const wrapper = shallow(<ButtonLinkBox {...props} linkTitle={undefined} />);
        expect(wrapper).toMatchSnapshot();
    });
});
