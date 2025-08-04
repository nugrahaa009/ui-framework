import { Form as AntForm } from 'antd';
declare const Form: typeof AntForm & {
    Item: typeof AntForm.Item;
    List: typeof AntForm.List;
    useForm: typeof AntForm.useForm;
    useWatch: typeof AntForm.useWatch;
    useFormInstance: typeof AntForm.useFormInstance;
    ErrorList: typeof AntForm.ErrorList;
    Provider: typeof AntForm.Provider;
};
export { Form };
