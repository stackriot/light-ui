import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../Input';
import Tipso from '../../Tipso/Tipso';
import styles from './input_group.css';

class InputGroup extends React.Component {
  render() {
    const {
      children,
      tipsoStyle,
      tipsoTheme,
      wrapperStyle,
      tipsoClassName,
      inputClassName,
      wrapperClassName,
    } = this.props;

    return (
      <Tipso
        trigger="focus"
        wrapperStyle={{
          ...wrapperStyle,
          margin: '0 5px'
        }}
        tipsoStyle={{...tipsoStyle}}
        theme={tipsoTheme}
        wrapperClass={wrapperClassName}
        className={tipsoClassName}
        tipsoContent={children}>
        <Input
          {...this.props}
          className={cx(styles.input, inputClassName)}
        />
      </Tipso>
    );
  }
}

InputGroup.propTypes = {
  tipsoTheme: PropTypes.string,
  inputClassName: PropTypes.string,
  tipsoClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperStyle: PropTypes.object,
  tipsoStyle: PropTypes.object,
  children: PropTypes.element
};

InputGroup.defaultProps = {
  tipsoTheme: 'light',
  inputClassName: '',
  tipsoClassName: '',
  wrapperClassName: '',
  wrapperStyle: {},
  tipsoStyle: {},
  children: (<div></div>),
};

export default InputGroup;
