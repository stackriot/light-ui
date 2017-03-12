import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './switcher.css';


class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { checked } = nextProps;
    if (checked !== this.state.checked) {
      this.setState({ checked });
    }
  }

  onChange() {
    const { onChange } = this.props;
    const { checked } = this.state;
    this.setState({ checked: !checked });
    onChange && onChange();
  }

  render() {
    const { checked } = this.state;
    const { color, disabled, size } = this.props;

    const containerClass = cx(
      styles["switcher-container"],
      size && styles[`container-${size}`],
      checked && styles["container-checked"],
      color && styles[color],
      disabled && styles["container-disabled"]
    );

    return (
      <div
        onClick={this.onChange}
        className={containerClass}>
        <div className={styles["switcher-item"]}></div>
      </div>
    )
  }
}

Switcher.propTypes = {
  color: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string
};

Switcher.defaultProps = {
  color: 'green',
  checked: false,
  disabled: false,
  onChange: () => {},
  size: 'normal'
};

export default Switcher;