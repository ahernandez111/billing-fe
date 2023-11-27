import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'customers',
    title: 'Customers',
    type: 'item',
    icon: 'home',
    url: 'customers',
    role: ['Basic']
  },
  {
    id: 'accounts',
    title: 'Accounts',
    type: 'item',
    icon: 'home',
    url: 'accounts',
    role: ['Basic']
  }
]
