export interface StatItem {
  value: string;
  label: string;
  colorClass: string;
}

export const statsData: StatItem[] = [
  {
    value: '99.9%',
    label: 'Disponibilidad del Sistema',
    colorClass: 'text-ate-primary',
  },
  {
    value: '+50K',
    label: 'Beneficiarios Activos',
    colorClass: 'text-ate-secondary',
  },
  {
    value: '100%',
    label: 'Trazabilidad en tiempo real',
    colorClass: 'text-ate-text',
  },
];
