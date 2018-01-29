import * as React from 'react';
import ToggleState from '../common/ToggleState';
import * as classNames from 'classnames';

export interface CheckboxProps extends ToggleState {
    label?: string;
    onMouseEnter?: (ev: React.MouseEvent<any>) => void;
    onMouseLeave?: (ev: React.MouseEvent<any>) => void;
}

const prefix = 'kobox';
export default class Checkbox extends React.Component<CheckboxProps, {}> {
    public color: string = 'red';

    getClassNames() {
        const clazz = {
            [`${prefix}-checkbox`]: true,
            [`${prefix}-checkbox--actived`]: this.props.actived,
        };

        return classNames(clazz);
    }

    render() {
        const {
            children,
            label,
            onMouseEnter,
            onMouseLeave,
        } = this.props;

        const clazz = this.getClassNames();
        const iconClazz = classNames({
            [`${prefix}-checkbox-icon`]: true,
        });

        return (
            <p className={clazz} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <i className={iconClazz} />
                <span>{label}</span>
                {children}
            </p>
        );
    }
}