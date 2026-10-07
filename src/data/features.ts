export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badgeColor: 'primary' | 'secondary' | 'alert';
}

export const featuresData: Feature[] = [
  {
    id: 'alimentacion',
    icon: '🥗',
    title: 'Vales de Alimentación',
    description:
      'Asignación directa y automatizada de recursos alimenticios con restricciones configurables por comercio.',
    badgeColor: 'primary',
  },
  {
    id: 'salud',
    icon: '🏥',
    title: 'Créditos de Salud',
    description:
      'Gestión transparente de subsidios de salud, consultas y farmacias integradas en una sola billetera digital.',
    badgeColor: 'secondary',
  },
  {
    id: 'analitica',
    icon: '📊',
    title: 'Reportes & Analítica',
    description:
      'Dashboards estadísticos claros para tomar decisiones informadas sobre la distribución de recursos corporativos.',
    badgeColor: 'alert',
  },
];
