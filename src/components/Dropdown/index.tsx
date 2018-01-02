import * as React from 'react';
import './styles.scss';

interface DropdownProps {
  options?: Array<{ [key: string]: string }>;
  selectedOption?: { [key: string]: string };
  labelKey: string;
}

interface DropdownState {
  selectedOption?: { [key: string]: string };
  showOptions: boolean;
}

export default class Dropdown extends React.PureComponent<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      showOptions: false,
      selectedOption: props.selectedOption,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  render() {
    const options = this.props.options;
    const labelKey = this.props.labelKey;

    return (
      <div className="dropdown" onClick={this.clickHandler}>
        {this.state.selectedOption ? this.state.selectedOption[this.props.labelKey] : 'Select an option'}

        <div className={`options ${this.state.showOptions ? 'visible' : ''}`}>
          {options && options.length && options.map(option =>
            (<div className="option">{option[labelKey]}</div>))}
        </div>
      </div>
    );
  }
}
