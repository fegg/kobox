const Style = require('./button.sass');

import * as React from 'react';
import * as classNames from 'classnames';
import { ButtonType } from './ButtonState';
import ButtonState, { ButtonStateImpl } from './ButtonState';

interface Props extends ButtonState {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class Button extends React.Component<Props, {}> {
    static defaultProps: ButtonState = new ButtonStateImpl();

    constructor(props: Props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    getClassNames() {
        const { selected, highlighted, disabled } = this.props;
        const typeKey = Style[ButtonType[this.props.type]];
        
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

        return (
            <button className={clazz} onClick={this.handleClick}>{this.props.children}</button>
        );
    }
}