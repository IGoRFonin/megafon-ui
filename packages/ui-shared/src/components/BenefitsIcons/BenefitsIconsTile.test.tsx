import * as React from 'react';
import { shallow } from 'enzyme';
import { IconPositionEnum } from './types';
import BenefitsIconsTile, { IBenefitsIconsTile } from './BenefitsIconsTile';
import Checked from 'icons/System/24/Checked_24.svg';

const props: IBenefitsIconsTile = {
    title: 'title',
    text: 'text',
    iconPosition: IconPositionEnum.LEFT_SIDE,
    icon: <Checked />,
};

describe('<BenefitsIconsTile />', () => {
    it('renders BenefitsIconsTile', () => {
        const wrapper = shallow(<BenefitsIconsTile {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders BenefitsIconsTile without title', () => {
        const wrapper = shallow(<BenefitsIconsTile {...props} title={undefined} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders BenefitsIconsTile without text', () => {
        const wrapper = shallow(<BenefitsIconsTile {...props} text={undefined} />);
        expect(wrapper).toMatchSnapshot();
    });
});
