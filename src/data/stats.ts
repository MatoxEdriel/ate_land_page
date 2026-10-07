export interface StatItem {
  value: string;
  label: string;
  colorClass: string;
}

export const statsData: StatItem[] = [
  {
    value: '-35%',
    label: 'Reducción de Mermas en Cocina',
    colorClass: 'text-ate-primary',
  },
  {
    value: '100%',
    label: 'Almuerzos Sin Pago en Caja',
    colorClass: 'text-ate-secondary',
  },
  {
    value: '< 1 min',
    label: 'Tiempo máximo para pedir comida',
    colorClass: 'text-ate-text',
  },
];
