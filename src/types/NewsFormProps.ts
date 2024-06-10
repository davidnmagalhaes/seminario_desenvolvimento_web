import NewsProps from './NewsPropsType';

interface NewsFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: NewsProps) => void;
}

export default NewsFormProps;
