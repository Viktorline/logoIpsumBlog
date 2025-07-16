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

export const IconComment = () =>
  h(
    'svg',
    {
      width: 16,
      height: 16,
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
    },
    [
      h('path', {
        d: 'M2.667 13.333V4.667A2 2 0 0 1 4.667 2.667h6.666a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2H4.667L2.667 13.333Z',
        stroke: '#B1B5C3',
        'stroke-width': 1.2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
  )

export const IconTime = () =>
  h(
    'svg',
    {
      width: 16,
      height: 16,
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
    },
    [
      h('circle', {
        cx: 8,
        cy: 8,
        r: 6,
        stroke: '#B1B5C3',
        'stroke-width': 1.2,
      }),
      h('path', {
        d: 'M8 4.667V8l2 2',
        stroke: '#B1B5C3',
        'stroke-width': 1.2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
  )

export const IconCalendar = () =>
  h(
    'svg',
    {
      width: 16,
      height: 16,
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
    },
    [
      h('rect', {
        x: 2.667,
        y: 3.333,
        width: 10.667,
        height: 9.333,
        rx: 2,
        stroke: '#B1B5C3',
        'stroke-width': 1.2,
      }),
      h('path', {
        d: 'M5.333 2.667v1.333M10.667 2.667v1.333',
        stroke: '#B1B5C3',
        'stroke-width': 1.2,
        'stroke-linecap': 'round',
      }),
    ],
  )

export const Logo = () =>
  h('svg', { width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none' }, [
    h('path', {
      d: 'M13.6366 27.6364C21.168 27.6364 27.273 21.5314 27.273 14V4.45456C27.273 3.36958 26.842 2.32904 26.0748 1.56185C25.3076 0.794653 24.267 0.363647 23.1821 0.363647L14.3184 0.363647V6.34592C14.3184 7.71092 14.4016 9.12501 15.1175 10.2868C15.63 11.1195 16.3156 11.8321 17.1278 12.3765C17.94 12.9208 18.8598 13.2841 19.8248 13.4416L20.0859 13.4839C20.1936 13.5207 20.287 13.5902 20.3532 13.6828C20.4194 13.7753 20.455 13.8862 20.455 14C20.455 14.1138 20.4194 14.2247 20.3532 14.3173C20.287 14.4098 20.1936 14.4793 20.0859 14.5161L19.8248 14.5584C18.4149 14.7887 17.113 15.4561 16.1028 16.4662C15.0927 17.4764 14.4253 18.7783 14.195 20.1882L14.1527 20.4493C14.1159 20.557 14.0464 20.6504 13.9538 20.7166C13.8613 20.7828 13.7504 20.8184 13.6366 20.8184C13.5228 20.8184 13.4119 20.7828 13.3194 20.7166C13.2268 20.6504 13.1573 20.557 13.1205 20.4493L13.0782 20.1882C12.9206 19.2232 12.5573 18.3035 12.013 17.4913C11.4687 16.6791 10.756 15.9935 9.92342 15.4809C8.7616 14.765 7.34751 14.6818 5.98251 14.6818H0.0166016C0.373192 21.8961 6.33433 27.6364 13.6366 27.6364Z',
      fill: '#e5e7eb',
    }),
  ])
