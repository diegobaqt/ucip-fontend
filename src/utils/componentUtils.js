import {message} from 'antd';

export const isEmpty = (element) => {
  return element === undefined || element === 'undefined' || element === null || element === 'null' || element === ''
    || (Array.isArray(element) && element.length === 0) || (Object.keys(element).length === 0);
};

export const uploadProps = (acceptFormat, callback) => {
  return {
    multiple: false,
    showUploadList: false,
    accept: acceptFormat,
    customRequest({ file, onSuccess, onError }) {
      let error = false;

      if(file.type === '' || !acceptFormat.includes(file.type)){
        message.error({ content: `El archivo "${file.name}" no está permitido.` });
        error = true;
      } else if(file.size/1024/1024 > 5) {
        message.error({ content: `El archivo "${file.name}" sobrepasa el tamaño permitido (5MB).` });
        error = true;
      }

      if (error) {
        setTimeout(() => { onError('error'); }, 0);
        return;
      }

      setTimeout(() => { onSuccess('ok'); }, 0);
      callback(file);
    },
  };
}


/* ----------------------- Currency ------------------------ */
export function currencyFormat(value){
  const text = `${value}`
    .replace('.', ',')
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');

  return `${text}`;
}
export function currencyToNumber(value){
  const splitValue = value.split(',');
  let newValue;
  if(splitValue.length === 1){
    newValue = parseFloat(value);
  } else {
    newValue = parseFloat(splitValue[0].replaceAll('.', '') + '.' + splitValue[1]);
  }

  return newValue;
}

/* ---------------------- Classifiers ---------------------- */
export const getClassifierName = (classifier) => {
  const classifiers = {
    "dtc": "Decision Tree",
    "rfc": "Random Forest",
    "lrc": "Logistic Regression"
  };

  return classifiers[classifier];
};