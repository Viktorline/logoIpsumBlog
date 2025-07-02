// icons.ts
import { h } from 'vue'

export const IconCheck = () =>
  h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
    h('path', {
      d: 'M5 9.5L8 12.5L13 7.5',
      stroke: 'currentColor',
      'stroke-width': 1.5,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    }),
  ])

export const IconPlus = () =>
  h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
    h('path', {
      d: 'M9 4V14',
      stroke: '#3B82F6',
      'stroke-width': 1.5,
      'stroke-linecap': 'round',
    }),
    h('path', {
      d: 'M4 9H14',
      stroke: '#3B82F6',
      'stroke-width': 1.5,
      'stroke-linecap': 'round',
    }),
  ])

export const IconSearch = () =>
  h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
    h('circle', {
      cx: 8.5,
      cy: 8.5,
      r: 7.25,
      stroke: '#B1B5C3',
      'stroke-width': 1.5,
    }),
    h('path', {
      d: 'M15.5 15.5L13 13',
      stroke: '#B1B5C3',
      'stroke-width': 1.5,
      'stroke-linecap': 'round',
    }),
  ])

export const IconChevron = (isOpen: boolean) =>
  h(
    'svg',
    {
      width: 16,
      height: 16,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      class: ['transition-transform', isOpen ? 'rotate-180' : ''],
    },
    [
      h('path', {
        d: 'M4 6L8 10L12 6',
        stroke: 'currentColor',
        'stroke-width': 1.2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
  )
