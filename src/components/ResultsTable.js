import { Col, Form, Row, Space, Table, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DownloadOutlined,
  SendOutlined,
  DeleteOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

// Store
import { useAppDispatch } from "../store/store";
import {
  getParams,
  getPrediction,
} from "../store/redux/actions/predictActions";
import * as predictSelectors from "../store/redux/selectors/predictSelectors";

// Components and Subcomponents
import { PowerGauge } from "./PowerGauge";
import UploadComponent from "./subComponents/UploadComponent";
import InputComponent from "./subComponents/InputComponent";
import ButtonComponent from "./subComponents/ButtonComponent";
import FormItemComponent from "./subComponents/FormItemComponent";
import SelectComponent from "./subComponents/SelectComponent";

// Functions and Constants
import { getClassifierName, isEmpty } from "../utils/componentUtils";
import BaseURL from "../api/baseURL";

function ResultsTable() {
  const [file, setFile] = useState({ name: "" });
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const params = useSelector(predictSelectors.paramsSelector);
  const predictions = useSelector(predictSelectors.predictionsSelector);
  const classifiers = useSelector(predictSelectors.classifiersSelector);
  const acceptFormat =
    "text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
  const columns = [
    {
      title: "Clasificador",
      dataIndex: "id",
      key: "id",
      width: "200px",
      render: (value) => {
        return getClassifierName(value);
      },
    },
    {
      title: "Ahora",
      dataIndex: "minuteMinus0",
      key: "minuteMinus0",
      width: "200px",
      render: (value) => {
        return value === 0 ? "Crítico" : value === 1 ? "Inestable" : "Estable";
      },
    },
    {
      title: "-1 min.",
      dataIndex: "minuteMinus1",
      key: "minuteMinus1",
      width: "200px",
      render: (value) => {
        return value === 0 ? "Crítico" : value === 1 ? "Inestable" : "Estable";
      },
    },
    {
      title: "-2 min.",
      dataIndex: "minuteMinus2",
      key: "minuteMinus2",
      width: "200px",
      render: (value) => {
        return value === 0 ? "Crítico" : value === 1 ? "Inestable" : "Estable";
      },
    },
    {
      title: "-3 min.",
      dataIndex: "minuteMinus3",
      key: "minuteMinus3",
      width: "200px",
      render: (value) => {
        return value === 0 ? "Crítico" : value === 1 ? "Inestable" : "Estable";
      },
    },
    {
      title: "-4 min.",
      dataIndex: "minuteMinus4",
      key: "minuteMinus4",
      width: "200px",
      render: (value) => {
        return value === 0 ? "Crítico" : value === 1 ? "Inestable" : "Estable";
      },
    },
  ];
  const withResults = !isEmpty(predictions) && !isEmpty(classifiers);
  const items = withResults
    ? [
        {
          key: "1",
          label: `LSTM`,
          children: (
            <Row>
              {Object.keys(predictions.lstm).map((key) => (
                <Col md={8} sm={12} xs={24} key={key} className={"py-4"}>
                  <PowerGauge value={predictions.lstm[key]} />
                  <p className={"text-center mt-4 font-bold"}>
                    {key.replace("minute", "Minuto: ")}
                  </p>
                  <p
                    className={`text-center ${
                      predictions.lstm[key] === 0
                        ? "text-red-500"
                        : predictions.lstm[key] === 1
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {predictions.lstm[key] === 0
                      ? "Crítico"
                      : predictions.lstm[key] === 1
                      ? "Inestable"
                      : "Estable"}
                  </p>
                </Col>
              ))}
            </Row>
          ),
        },
        {
          key: "2",
          label: `GRU`,
          children: (
            <Row>
              {Object.keys(predictions.gru).map((key) => (
                <Col md={8} sm={12} xs={24} key={key} className={"py-4"}>
                  <PowerGauge value={predictions.gru[key]} />
                  <p className={"text-center mt-4 font-bold"}>
                    {key.replace("minute", "Minuto: ")}
                  </p>
                  <p
                    className={`text-center ${
                      predictions.gru[key] === 0
                        ? "text-red-500"
                        : predictions.gru[key] === 1
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {predictions.gru[key] === 0
                      ? "Crítico"
                      : predictions.gru[key] === 1
                      ? "Inestable"
                      : "Estable"}
                  </p>
                </Col>
              ))}
            </Row>
          ),
        },
      ]
    : [];

  useEffect(() => {
    dispatch(getParams());
  }, []);

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    dispatch(getPrediction(values.group, formData));
  };

  return (
    <Row gutter={[8, 60]}>
      {!withResults ? (
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={onSubmit}
          className={"w-full"}
        >
          <Col md={24} xs={24}>
            <ButtonComponent
              text={"Descargar archivo de prueba"}
              icon={<DownloadOutlined />}
              className={
                "bg-blue-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 " +
                "focus:ring-offset-2 focus:ring-blue-300"
              }
              onClick={() => window.open(BaseURL + "/Templates/UcipTest.xlsx")}
            />
          </Col>

          <Col md={24} xs={24} className={"my-5"}>
            <UploadComponent
              acceptFormat={acceptFormat}
              onUpload={(file) => setFile(file)}
              supportedFilesText={"Archivos soportados: .csv y .xlsx"}
            />

            {!isEmpty(file.name) && (
              <Space
                size={"small"}
                className={"w-full flex [&>div]:contents mt-2"}
              >
                <InputComponent
                  readOnly={true}
                  disabled={true}
                  value={file.name}
                  title={file.name}
                />
                <ButtonComponent
                  text={"Borrar"}
                  icon={<DeleteOutlined />}
                  className={
                    "bg-red-400 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 " +
                    "focus:ring-offset-2 focus:ring-red-300 "
                  }
                  onClick={() => setFile({ name: "" })}
                />
              </Space>
            )}
          </Col>

          <Col md={24} xs={24}>
            <Col md={12} xs={24}>
              <FormItemComponent
                name={"group"}
                label={"Edades"}
                required={true}
                child={
                  <SelectComponent
                    placeHolder={"Selecciona una opción"}
                    list={params}
                  />
                }
              />
            </Col>
          </Col>

          <Col md={24} xs={24} className={"text-center mt-12"}>
            <ButtonComponent
              text={"Enviar"}
              icon={<SendOutlined />}
              htmlType={"submit"}
              className={
                "w-40 bg-blue-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 " +
                "focus:ring-offset-2 focus:ring-blue-300"
              }
            />
          </Col>
        </Form>
      ) : (
        <>
          <Tabs
            centered
            defaultActiveKey={"1"}
            size={"large"}
            items={items}
            className={"w-full"}
          />

          <Col className={"text-center"} md={24} xs={24}>
            <Table
              bordered
              size={"small"}
              pagination={{ hideOnSinglePage: true }}
              rowKey={"id"}
              columns={columns}
              dataSource={classifiers}
            />
          </Col>

          <Col md={24} xs={24} className={"text-center"}>
            <ButtonComponent
              text={"Restablecer valores"}
              icon={<ReloadOutlined />}
              className={
                "w-fit bg-blue-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 " +
                "focus:ring-offset-2 focus:ring-blue-300"
              }
              onClick={() => window.location.reload()}
            />
          </Col>
        </>
      )}
    </Row>
  );
}

export default ResultsTable;
