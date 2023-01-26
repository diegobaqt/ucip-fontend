// Libraries
import React from 'react';
import {Input, InputNumber} from 'antd';
import PropTypes from 'prop-types';

const InputComponent = (
  {
    readOnly, disabled, placeHolder, type, prefix, className, value, title, onChange,
  }) => {
  const builder = () => {
    let input;

    switch (type){
      case 'textarea':
        input = <Input.TextArea placeholder={placeHolder} autoSize={{ minRows: 2, maxRows: 3 }} value={value}
                                className={'appearance-none block w-full px-3 py-2 border border-grey-dkt-300 rounded-md shadow-sm ' +
                                  'placeholder-grey-dkt-400 focus:outline-none focus:ring-orange-dkt-400 focus:border-orange-dkt-400 sm:text-sm ' +
                                  className
                                }
                                onChange={(e) => onChange ? onChange(e) : null} />
        break;
      case 'currency':
        input = <InputNumber placeholder={placeHolder} value={value}
                             className={'appearance-none w-full px-3 py-0.5 border border-grey-dkt-300 rounded-md shadow-sm ' +
                               'placeholder-grey-dkt-400 focus:outline-none focus:ring-orange-dkt-400 focus:border-orange-dkt-400 sm:text-sm ' +
                               className
                             } />
        break;
      default:
        input = <Input readOnly={readOnly} disabled={disabled} placeholder={placeHolder} prefix={prefix}
                       type={type} value={value} title={title}
                       className={'appearance-none block w-full px-3 py-2 border border-grey-dkt-300 rounded-md shadow-sm ' +
                         'placeholder-grey-dkt-400 focus:outline-none focus:ring-orange-dkt-400 focus:border-orange-dkt-400 sm:text-sm ' +
                         className
                       }
                       onChange={(e) => onChange ? onChange(e) : null} />
        break;
    }

    return input;
  }

  return (
    builder()
  );
}

InputComponent.propTypes = {
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  onChange: PropTypes.func,
};
InputComponent.defaultProps = {
  readOnly: false,
  disabled: false,
  placeHolder: '',
  type: 'text',
  prefix: '',
  value: '',
  title: '',
  className: '',
  onChange: () => {
    return null;
  }
};

export default InputComponent;