import { MenuEntry } from '@coffeeswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://swap.coffeemaker.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://swap.coffeemaker.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'http://104.248.247.86:81',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'http://104.248.247.86:81/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'http://104.248.247.86:81/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'http://104.248.247.86:81/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://vote.coffeeswap.finance/#/coffeeswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/cofeeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.coffeeswap.finance',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
    ],
  },
]

export default config
