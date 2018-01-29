export enum ButtonType {
    default = 'default',
    primary = 'primary',
    ghost = 'ghost',
    dashed = 'dashed',
    danger = 'danger',
}

export default interface ButtonState {
    // 是否禁用
    disabled?: boolean;
    // 是否高亮
    highlighted?: boolean;
    // 是否选中
    selected?: boolean;
    // 按钮类型
    type?: ButtonType;
}

export class ButtonStateImpl implements ButtonState {
    // 是否禁用
    public disabled?: boolean;
    // 是否高亮
    public highlighted?: boolean;
    // 是否选中
    public selected?: boolean;
    // 按钮类型
    public type?: ButtonType;

    constructor() {
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.type = ButtonType.default;        
    }
}