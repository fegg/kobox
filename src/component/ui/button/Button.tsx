const Style = require('./button.sass');

import * as React from 'react';
import * as classNames from 'classnames';
import { ButtonType } from './ButtonState';
import ButtonState, { ButtonStateImpl } from './ButtonState';

interface ButtonProps extends ButtonState {
    href?: string;
    onClick?: React.MouseEventHandler<any>;
}

export default class Button extends React.Component<ButtonProps, {}> {
    static defaultProps: ButtonState = new ButtonStateImpl();

    constructor(props: ButtonProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.MouseEvent<any>) {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(event);
        }
    }

    getClassNames() {
        const { selected, highlighted, disabled, type } = this.props;
        const typeKey = Style[ButtonType[type as ButtonType]];
        
        let clazz = {
            [Style.selected]: selected,
            [Style.highlighted]: highlighted,
            [Style.disabled]: disabled,
            [typeKey]: true,
        };

        return classNames(clazz);
    }

    render() {
        const clazz = this.getClassNames();
        // 目前支持 2 种类型的 button
        const WrapComponent = this.props.href ? 'a' : 'button';

        return (
            <WrapComponent className={clazz} onClick={this.handleClick}>{this.props.children}</WrapComponent>
        );
    }
}