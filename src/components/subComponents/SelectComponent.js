// Libraries
import React from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';


const SelectComponent = (
  {
    allowClear, placeHolder, className, value, list, onChange,
  }) => {
  return (
    <Select allowClear={allowClear} placeholder={placeHolder} value={value}
            className={'appearance-none block w-full [&>div]:h-9 [&>div]:px-3 [&>div]:py-2 [&>div]:border [&>div]:shadow-none ' +
              '[&>div]:border-grey-dkt-300 [&>div]:rounded-md [&>div>span]:last:leading-4 [&>*]:sm:text-sm ' +
              className
            }
            onChange={(e) => onChange ? onChange(e) : null}>
      {list.map(item =>
        <Select.Option key={item.id} value={item.id} title={item.value}>
          {item.value}
        </Select.Option>
      )}
    </Select>
  );
}

SelectComponent.propTypes = {
  allowClear: PropTypes.bool,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
SelectComponent.defaultProps = {
  allowClear: false,
  placeHolder: 'Selecciona una opción',
  className: '',
  value: undefined,
  list: [],
  onChange: () => {
    return null;
  }
};

export default SelectComponent;