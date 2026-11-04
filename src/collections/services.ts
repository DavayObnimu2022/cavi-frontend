export interface Service {
  id: string
  title: string
  description: string
  category: string
  price: number
  date: string
  age?: number
  pressure?: number
  likes: number
  imageUrl?: string
  videoUrl?: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Кардиологический мониторинг',
    description:
      'Комплексное наблюдение за работой сердца: ЭКГ, контроль давления и рекомендации врача по итогам обследования.',
    category: 'Кардиология',
    price: 2500,
    date: '2026-10-12',
    age: 54,
    pressure: 140,
    likes: 8,
    imageUrl: '',
    videoUrl: '',
  },
  {
    id: '2',
    title: 'Суточный монитор давления',
    description:
      'Измерение артериального давления в течение 24 часов. Помогает подобрать терапию и оценить её эффективность.',
    category: 'Кардиология',
    price: 1800,
    date: '2026-10-15',
    age: 47,
    pressure: 130,
    likes: 6,
    imageUrl: '',
    videoUrl: '',
  },
  {
    id: '3',
    title: 'ЭКГ с расшифровкой',
    description:
      'Запись электрокардиограммы и подробная расшифровка показателей врачом-кардиологом в день обращения.',
    category: 'Диагностика',
    price: 1200,
    date: '2026-10-18',
    age: 61,
    pressure: 150,
    likes: 14,
    imageUrl: '',
    videoUrl: '',
  },
  {
    id: '4',
    title: 'УЗИ сердца',
    description:
      'Эхокардиография для оценки структуры и функции сердца, клапанов и крупных сосудов без лучевой нагрузки.',
    category: 'Диагностика',
    price: 3200,
    date: '2026-10-21',
    age: 38,
    pressure: 120,
    likes: 11,
    imageUrl: '',
    videoUrl: '',
  },
  {
    id: '5',
    title: 'Холтеровское мониторирование',
    description:
      'Непрерывная запись ЭКГ на портативном аппарате в течение суток для выявления нарушений ритма.',
    category: 'Кардиология',
    price: 4100,
    date: '2026-10-24',
    age: 66,
    pressure: 5,
    likes: 53,
    imageUrl: '',
    videoUrl: '',
  },
  {
    id: '6',
    title: 'Консультация кардиолога',
    description:
      'Первичный приём врача: сбор анамнеза, осмотр, разбор результатов анализов и индивидуальный план лечения.',
    category: 'Терапия',
    price: 1500,
    date: '2026-10-27',
    age: 29,
    pressure: 115,
    likes: 10,
    imageUrl: '',
    videoUrl: '',
  },
]
