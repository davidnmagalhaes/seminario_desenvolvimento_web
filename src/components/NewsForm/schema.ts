import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  author: Yup.string().required('O autor é obrigatório'),
  category: Yup.string().required('A categoria é obrigatória'),
});
