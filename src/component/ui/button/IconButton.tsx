import * as React from 'react';
import Icon from '../icon/Icon';
import Button from './Button';
import ButtonState, { ButtonStateImpl, ButtonType } from './ButtonState';

export interface IconButtonProps extends ButtonState {
    href?: string;
    type: ButtonType;
}

export default class IconButton extends React.Component<IconButtonProps, {}> {
    static defaultProps = new ButtonStateImpl();

    render() {
        const { children, ...others } = this.props;

        return (
            <Button type={others.type}>
                <Icon type={'loading'} />
                {children}
            </Button>
        );
    }
}
