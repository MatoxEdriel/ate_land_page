export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badgeColor: 'primary' | 'secondary' | 'alert';
}

export const featuresData: Feature[] = [
  {
    id: 'almuerzos',
    icon: 'lucide:utensils',
    title: 'Almuerzos Sin Fricción',
    description:
      'Tus colaboradores piden desde la app, van a su restaurante favorito, comen y se van. El pago se liquida automáticamente a fin de mes.',
    badgeColor: 'primary',
  },
  {
    id: 'demanda',
    icon: 'lucide:store',
    title: 'Previsión para Restaurantes',
    description:
      'Los restaurantes aliados conocen con anticipación el número de comensales y platos solicitados, eliminando mermas.',
    badgeColor: 'secondary',
  },
  {
    id: 'sin-filas',
    icon: 'lucide:users-round',
    title: 'Sin Filas',
    description:
      'Los colaboradores llegan al local con su orden lista. Sin esperar mesa, sin pagar en caja ni tramitar reembolsos.',
    badgeColor: 'alert',
  },
];
