import { format } from 'date-fns';

// Função para formatar data no formato brasileiro (dd/mm/yyyy)
export const formatarDataBrasileira = (data: Date): string | null => {
  try {
    const dataFormatada = format(data, 'dd/MM/yyyy');
    return dataFormatada;
  } catch (error) {
    console.error('Erro ao formatar a data:', error);
    return null;
  }
};
