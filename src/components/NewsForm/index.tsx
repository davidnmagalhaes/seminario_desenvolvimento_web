import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { validationSchema } from './schema';
import NewsFormProps from '../../types/NewsFormProps';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export const NewsForm = ({ isOpen, onClose, onSubmit }: NewsFormProps) => {
  const [categories, setCategories]= useState<{ id: number; name: string; }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get('/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Notícia</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              title: '',
              content: '',
              category_id: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              const updatedValues = {
                ...values,
                created_at: new Date().toISOString(),
              };
              onSubmit(updatedValues);
              actions.setSubmitting(false);
              onClose();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Título */}
                <FormControl
                  mb={4}
                  isInvalid={Boolean(errors.title && touched.title)}
                >
                  <FormLabel htmlFor="title">Título</FormLabel>
                  <Field name="title" as={Input} />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                {/* Descrição */}
                <FormControl
                  mb={4}
                  isInvalid={Boolean(errors.content && touched.content)}
                >
                  <FormLabel htmlFor="content">Descrição</FormLabel>
                  <Field name="content" as={Input} />
                  <FormErrorMessage>{errors.content}</FormErrorMessage>
                </FormControl>

                {/* Categoria */}
                <FormControl
                  mb={4}
                  isInvalid={Boolean(errors.category_id && touched.category_id)}
                >
                  <FormLabel htmlFor="category_id">Categoria</FormLabel>
                  <Field name="category_id" as={Select}>
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Field>

                  <FormErrorMessage>{errors.category_id}</FormErrorMessage>
                </FormControl>

                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
