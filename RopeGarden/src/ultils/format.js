import { format as formatDateFns } from "date-fns";

export function formatDate(value, mask) {
    return formatDateFns(value, mask);
};

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});