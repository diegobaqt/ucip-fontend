// Libraries
import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';

// Functions
import {isEmpty} from '../../utils/componentUtils';


const ButtonComponent = (
  {
    htmlType, className, text, loading, icon, onClick,
  }) => {
  const textIsEmpty = isEmpty(text);

  return (
    <Button htmlType={htmlType} loading={loading} icon={icon}
            className={`${textIsEmpty ? 'h-7 ' : 'h-fit '}` +
              'text-white rounded-md ext-sm font-medium shadow-md ' + className
            }
            onClick={onClick}>
      {text}
    </Button>
  );
}

ButtonComponent.propTypes = {
  htmlType: PropTypes.oneOf(['submit', 'reset', 'button', undefined]),
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
ButtonComponent.defaultProps = {
  htmlType: 'button',
  className: '',
  text: '',
  loading: false,
  icon: null,
  onClick: () => {
    return null;
  }
};

export default ButtonComponent;