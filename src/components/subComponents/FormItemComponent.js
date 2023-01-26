// Libraries
import React from 'react';
import {Form} from 'antd';
import PropTypes from 'prop-types';

// Constants and Functions
import {currencyFormat, currencyToNumber} from '../../utils/componentUtils';
const { Item } = Form;


const FormItemComponent = (
  {
    label, name, valuePropName, required, withValueValidator, className, child,
  }) => {
  return (
    withValueValidator
      ?
      <Item label={label} name={name} valuePropName={valuePropName}
            className={'mb-3 [&>div>div]:pb-1 [&>div>div>label]:text-sm [&>div>div>label]:font-medium ' +
              '[&>div>div>label]:text-grey-dkt-400 ' + className
            }
            rules={[{ required: required, message: 'Campo requerido' }]}
            getValueFromEvent={(e) => {
              const value = currencyToNumber(e.target.value);

              return isNaN(value) ? 0 : currencyFormat(value.toFixed(2).toString());
            }}>
        {child}
      </Item>
      :
      <Item label={label} name={name} valuePropName={valuePropName}
            className={'mb-3 [&>div>div]:pb-1 [&>div>div>label]:text-sm [&>div>div>label]:font-medium ' +
              '[&>div>div>label]:text-grey-dkt-400 ' + className
            }
            rules={[{ required: required, message: 'Campo requerido' }]}>
        {child}
      </Item>
  );
}

FormItemComponent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  valuePropName: PropTypes.string,
  required: PropTypes.bool.isRequired,
  withValueValidator: PropTypes.bool,
  className: PropTypes.string,
  child: PropTypes.element.isRequired,
};
FormItemComponent.defaultProps = {
  label: undefined,
  name: undefined,
  valuePropName: 'value',
  required: true,
  withValueValidator: false,
  className: '',
  child: <></>,
};

export default FormItemComponent;