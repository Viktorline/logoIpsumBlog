import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Comment {
  id: number
  author: string
  date: string
  time: string
  photo: string
  text: string
}

export interface Article {
  id: number
  name: string
  description: string
  author: string
  images: string[]
  tags: string[]
  dateCreated: string
  text: string
  timeToRead: string
  comments: Comment[]
}

const mockArticles: Article[] = [
  {
    id: 1,
    name: 'Вдохновение в каждом шаге',
    description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
    author: 'Иван Петров',
    images: [''],
    tags: ['Природа', 'Люди'],
    dateCreated: '9 Апр',
    text: 'Полный текст статьи 1...',
    timeToRead: '2 мин',
    comments: [
      {
        id: 1,
        author: 'Анна',
        date: '9 Апр',
        time: '10:00',
        photo: '',
        text: 'Очень вдохновляет!',
      },
    ],
  },
  {
    id: 2,
    name: 'Моменты тишины и покоя',
    description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    author: 'Мария Сидорова',
    images: ['/img/2.jpg'],
    tags: ['Природа', 'Животные'],
    dateCreated: '6 Апр',
    text: 'Полный текст статьи 2...',
    timeToRead: '3 мин',
    comments: [
      { id: 2, author: 'Павел', date: '6 Апр', time: '12:00', photo: '', text: 'Какая прелесть!' },
      { id: 3, author: 'Ольга', date: '6 Апр', time: '13:00', photo: '', text: 'Очень красиво!' },
      { id: 4, author: 'Иван', date: '6 Апр', time: '14:00', photo: '', text: 'Хочу туда!' },
      { id: 5, author: 'Светлана', date: '6 Апр', time: '15:00', photo: '', text: 'Мечта!' },
      { id: 6, author: 'Денис', date: '6 Апр', time: '16:00', photo: '', text: 'Супер!' },
    ],
  },
  {
    id: 3,
    name: 'Цвета природы в наших руках',
    description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
    author: 'Артём Кузнецов',
    images: ['/img/3.jpg'],
    tags: ['Природа', 'Искусство'],
    dateCreated: '5 Апр',
    text: 'Полный текст статьи 3...',
    timeToRead: '3 мин',
    comments: [
      { id: 7, author: 'Марина', date: '5 Апр', time: '11:00', photo: '', text: 'Вдохновляюще!' },
      { id: 8, author: 'Виктор', date: '5 Апр', time: '12:00', photo: '', text: 'Очень красиво!' },
      { id: 9, author: 'Елена', date: '5 Апр', time: '13:00', photo: '', text: 'Прекрасно!' },
      { id: 10, author: 'Сергей', date: '5 Апр', time: '14:00', photo: '', text: 'Завораживает!' },
      { id: 11, author: 'Татьяна', date: '5 Апр', time: '15:00', photo: '', text: 'Шедевр!' },
      { id: 12, author: 'Алексей', date: '5 Апр', time: '16:00', photo: '', text: 'Браво!' },
      {
        id: 13,
        author: 'Оксана',
        date: '5 Апр',
        time: '17:00',
        photo: '',
        text: 'Очень нравится!',
      },
      { id: 14, author: 'Дмитрий', date: '5 Апр', time: '18:00', photo: '', text: 'Великолепно!' },
      { id: 15, author: 'Галина', date: '5 Апр', time: '19:00', photo: '', text: 'Спасибо!' },
      { id: 16, author: 'Валерий', date: '5 Апр', time: '20:00', photo: '', text: 'Супер!' },
    ],
  },
  {
    id: 4,
    name: 'Семейные узы в дикой природе',
    description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
    author: 'Екатерина Лебедева',
    images: ['/img/4.jpg'],
    tags: ['Природа', 'Животные'],
    dateCreated: '4 Апр',
    text: 'Полный текст статьи 4...',
    timeToRead: '15 мин',
    comments: [
      {
        id: 17,
        author: 'Игорь',
        date: '4 Апр',
        time: '10:00',
        photo: '',
        text: 'Очень трогательно!',
      },
      {
        id: 18,
        author: 'Светлана',
        date: '4 Апр',
        time: '11:00',
        photo: '',
        text: 'Семья — это важно!',
      },
      { id: 19, author: 'Андрей', date: '4 Апр', time: '12:00', photo: '', text: 'Класс!' },
      { id: 20, author: 'Вера', date: '4 Апр', time: '13:00', photo: '', text: 'Милота!' },
      { id: 21, author: 'Олеся', date: '4 Апр', time: '14:00', photo: '', text: 'Очень мило!' },
      { id: 22, author: 'Владимир', date: '4 Апр', time: '15:00', photo: '', text: 'Супер!' },
    ],
  },
  {
    id: 5,
    name: 'Гармония городских и природных пейзажей',
    description:
      'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
    author: 'Ольга Смирнова',
    images: ['/img/5.jpg'],
    tags: ['Природа', 'Искусство'],
    dateCreated: '3 Апр',
    text: 'Полный текст статьи 5...',
    timeToRead: '2 мин',
    comments: [
      {
        id: 23,
        author: 'Валентина',
        date: '3 Апр',
        time: '10:00',
        photo: '',
        text: 'Очень красиво!',
      },
      { id: 24, author: 'Григорий', date: '3 Апр', time: '11:00', photo: '', text: 'Вдохновляет!' },
    ],
  },
]

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref<Article[]>([...mockArticles])

  function setArticles(data: Article[]) {
    articles.value = data
  }

  function clearArticles() {
    articles.value = []
  }

  return {
    articles,
    setArticles,
    clearArticles,
  }
})
