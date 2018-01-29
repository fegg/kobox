import * as React from 'react';
import Icon from '../icon/Icon';
import Button from './Button';
import ButtonState from './ButtonState';

export interface AsyncButtonProps extends ButtonState {
    done: (ev: React.MouseEvent<any>) => Promise<any>;
}

export interface AsyncButtonState {
    isPending: boolean;
}

/**
 * 异常场景下的按钮
 * @export
 * @class AsyncButton
 * @extends {React.Component<AsyncButtonProps, AsyncButtonState>}
 */
export default class AsyncButton extends React.Component<AsyncButtonProps, AsyncButtonState> {
    constructor(props: AsyncButtonProps) {
        super(props);

        this.state = {
            isPending: false,
        };
    }

    handleClick = (ev: React.MouseEvent<any>) => {
        this.updatePendingState(true);

        // finally
        this.props.done(ev).then(result => {
            this.updatePendingState(false);
        }, result => {
            this.updatePendingState(false);
        });
    }

    updatePendingState(newState: boolean) {
        this.setState(preState => {
            return {
                isPending: newState,
            };
        });
    }

    render() {
        const { children, type } = this.props;

        return (
            <Button type={type} onClick={this.handleClick}>
                <Icon type={'loading'} />
                {children}
            </Button>
        );
    }
}
