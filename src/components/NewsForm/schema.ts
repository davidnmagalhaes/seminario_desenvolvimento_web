import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  content: Yup.string().required('A descrição é obrigatória'),
  category_id: Yup.string().required('A categoria é obrigatória'),
});
