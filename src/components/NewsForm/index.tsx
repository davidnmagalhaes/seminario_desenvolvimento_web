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

export const NewsForm = ({ isOpen, onClose, onSubmit }: NewsFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Notícia</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              title: '',
              description: '',
              date: '',
              author: '',
              category: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              onSubmit(values);
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
                  isInvalid={Boolean(errors.description && touched.description)}
                >
                  <FormLabel htmlFor="description">Descrição</FormLabel>
                  <Field name="description" as={Input} />
                  <FormErrorMessage>{errors.description}</FormErrorMessage>
                </FormControl>

                {/* Data */}
                <FormControl
                  mb={4}
                  isInvalid={Boolean(errors.date && touched.date)}
                >
                  <FormLabel htmlFor="date">Data</FormLabel>
                  <Field name="date" as={Input} type="date" />
                  <FormErrorMessage>{errors.date}</FormErrorMessage>
                </FormControl>

                {/* Autor */}
                <FormControl
                  mb={4}
                  isInvalid={Boolean(errors.author && touched.author)}
                >
                  <FormLabel htmlFor="author">Autor</FormLabel>
                  <Field name="author" as={Input} />
                  <FormErrorMessage>{errors.author}</FormErrorMessage>
                </FormControl>

                {/* Categoria */}
                <FormControl
                  mb={4}
                  isInvalid={Boolean(errors.category && touched.category)}
                >
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Field name="category" as={Select}>
                    <option value="" label="Selecione a categoria" />
                    <option value="política">Política</option>
                    <option value="tecnologia">Tecnologia</option>
                  </Field>

                  <FormErrorMessage>{errors.category}</FormErrorMessage>
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
