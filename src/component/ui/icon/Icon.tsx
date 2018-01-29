import * as React from 'react';
import * as classNames from 'classnames';

interface IconProps {
    type: string;
    className?: string;
    title?: string;
    onClick?: React.MouseEventHandler<any>;
    style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
    const {
        className = '', 
        title,
        onClick,
        style,
    } = props;

    const clazz = classNames({ fa: true }, className);

    return <i title={title} style={style} className={clazz} onClick={onClick} />;
};

export default Icon;