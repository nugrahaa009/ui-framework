import { Form as AntForm } from 'antd';
const { Item, List, useForm, useWatch, useFormInstance, ErrorList, Provider } = AntForm;
const Form = Object.assign(AntForm, {
    Item,
    List,
    useForm,
    useWatch,
    useFormInstance,
    ErrorList,
    Provider,
});
export { Form };
