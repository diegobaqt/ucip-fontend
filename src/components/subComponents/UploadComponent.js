// Libraries
import React from 'react';
import {Upload} from 'antd';
import PropTypes from 'prop-types';
import {InboxOutlined} from '@ant-design/icons';

// Functions and Constants
import {uploadProps} from '../../utils/componentUtils';
const { Dragger } = Upload;

const UploadComponent = (
  {
    acceptFormat, supportedFilesText, className, onUpload
  }) => {
  return (
    <Dragger {...uploadProps(acceptFormat, onUpload)} className={className}>
      <p className={'text-grey-dkt-500 text-6xl'}>
        <InboxOutlined />
      </p>
      Selecciona un archivo o arrastra el archivo en esta área para cargarlo.
      <p className={'text-grey-dkt-600'}>
        {supportedFilesText}
      </p>
    </Dragger>
  );
}

UploadComponent.propTypes = {
  acceptFormat: PropTypes.string.isRequired,
  supportedFilesText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onUpload: PropTypes.func.isRequired,
};
UploadComponent.defaultProps = {
  acceptFormat: '',
  supportedFilesText: '',
  className: '',
  onUpload: () => {
    return;
  },
};

export default UploadComponent;