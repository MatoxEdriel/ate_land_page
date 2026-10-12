export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badgeColor: 'primary' | 'secondary' | 'alert';
  category?: string;
}

export const featuresData: Feature[] = [
  {
    id: 'almuerzos',
    icon: 'lucide:utensils',
    title: 'Almuerzos Sin Fricción',
    description: 'Pide desde la app y come sin pagar en caja ni usar tarjetas.',
    badgeColor: 'primary',
    category: 'Empresas',
  },
  {
    id: 'demanda',
    icon: 'lucide:store',
    title: 'Previsión para Restaurantes',
    description: 'Anticipa la demanda diaria de comensales y reduce mermas en cocina.',
    badgeColor: 'secondary',
    category: 'Restaurantes',
  },
  {
    id: 'sin-filas',
    icon: 'lucide:users-round',
    title: 'Sin Filas',
    description: 'Llega con tu orden lista al local, sin colas ni esperas.',
    badgeColor: 'alert',
    category: 'Comensales',
  },
];
