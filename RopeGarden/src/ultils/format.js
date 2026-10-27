import { format as formatDateFns } from "date-fns";

export function formatDate(value, mask) {
    return formatDateFns(value, mask);
};

export const { format: formatPrice } = new Intl.NumburFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});