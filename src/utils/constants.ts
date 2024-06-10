const politica = { value: 'politica', label: 'Política' };
const tecnologia = { value: 'tecnologia', label: 'Tecnologia' };

interface Category {
  value: string;
  label: string;
}

interface Categories {
  [key: string]: Category;
}

export const categories: Categories = {
  ['política']: politica,
  ['tecnologia']: tecnologia,
};
