import * as React from 'react';
import Button from './component/ui/button/Button';
import { ButtonType } from './component/ui/button/ButtonState';

interface AppState {
    btnState: {
        selected: boolean,
        hightlighted: boolean,
        disabled: boolean,
    };
}

const initBtnState = {
    selected: false,
    hightlighted: false,
    disabled: false,
};

export default class App extends React.Component<{}, AppState> {
    state = {
        btnState: initBtnState,
    };

    handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        console.log(ev);
    }

    handleClickSelected = (ev: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(prevState => {
            return {
                btnState: {
                    ...initBtnState,
                    selected: !prevState.btnState.selected,
                },
            };
        });
    }
    
    handleClickHighlighted = (ev: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(prevState => {
            return {
                btnState: {
                    ...initBtnState,
                    hightlighted: !prevState.btnState.hightlighted,
                },
            };
        });
    }
    
    handleClickDisabled = (ev: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(prevState => {
            return {
                btnState: {
                    ...initBtnState,
                    disabled: !prevState.btnState.disabled,
                },
            };
        });
    }

    render() {
        const { btnState } = this.state;
        return (
            <div>
                <Button type={ButtonType.default} disabled={btnState.disabled} highlighted={btnState.hightlighted} selected={btnState.selected} onClick={this.handleClick}>我是测试</Button>

                <Button type={ButtonType.primary} onClick={this.handleClickSelected}>Selected</Button>
                <Button type={ButtonType.primary} onClick={this.handleClickHighlighted}>Hightlighted</Button>
                <Button type={ButtonType.primary} onClick={this.handleClickDisabled}>Disabled</Button>
            </div>
        );
    }
}