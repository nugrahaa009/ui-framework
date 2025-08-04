import { Form as AntForm } from 'antd';

const { Item, List, useForm, useWatch, useFormInstance, ErrorList, Provider } = AntForm;

const Form: typeof AntForm & {
  Item: typeof AntForm.Item;
  List: typeof AntForm.List;
  useForm: typeof AntForm.useForm;
  useWatch: typeof AntForm.useWatch;
  useFormInstance: typeof AntForm.useFormInstance;
  ErrorList: typeof AntForm.ErrorList;
  Provider: typeof AntForm.Provider;
} = Object.assign(AntForm, {
  Item,
  List,
  useForm,
  useWatch,
  useFormInstance,
  ErrorList,
  Provider,
});

export { Form };
