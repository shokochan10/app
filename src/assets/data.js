import sprite from './sprite.svg';

export const DUMMY_DATA = [
  {
    title: 'Účast na akci',
    state: 'Odesílá se',
    viewed: 503,
    answered: 207,
    folder: 'Unikátní',
    created: '2017-11-12',
    valid: '2019-04-01',
  },
  {
    title: 'Feedback akce',
    state: 'Rozpracovaná',
    viewed: 803,
    answered: 112,
    folder: 'Pravidelně',
    created: '2017-11-11',
    valid: '2018-06-12',
  },
  {
    title: 'Preference produktu',
    state: 'Rozpracovaná',
    viewed: 503,
    answered: 207,
    folder: 'Pravidelně',
    created: '2017-11-10',
    valid: '2019-04-01',
  },
  {
    title: 'Zájmy',
    state: 'Odesílá se',
    viewed: 1121,
    answered: 14,
    folder: 'Pravidelně',
    created: '2017-11-08',
    valid: '2018-05-01',
  },
  {
    title: 'Obecné o uživateli',
    state: 'Odesílá se',
    viewed: 312000,
    answered: 165153,
    folder: 'Unikátní',
    created: '2017-08-05',
    valid: '2018-05-01',
  },
  {
    title: 'Uvítání',
    state: 'Odesílá se',
    viewed: 20633,
    answered: 1180,
    folder: 'Pravidelně',
    created: '2016-04-12',
    valid: '2019-04-01',
  },
];

export const TABLE_HEADINGS = [
  { name: 'Title', value: 'title' },
  { name: 'State', value: 'state' },
  { name: 'Viewed', value: 'viewed' },
  { name: 'Answered', value: 'answered' },
  { name: 'Folder', value: 'folder' },
  { name: 'Created', value: 'created' },
  { name: 'Valid until', value: 'valid' },
  { name: 'Created by', value: 'author' },
];

export const TABLE_ACTIONS = [
  { name: 'Activate', icon: sprite + '#icon-play' },
  { name: 'Preview', icon: sprite + '#icon-eye' },
  { name: 'Edit', icon: sprite + '#icon-edit' },
  { name: 'Stats', icon: sprite + '#icon-bar-chart' },
  { name: 'Delete', icon: sprite + '#icon-trash-o' },
];

export const SIDEBAR_LINKS = [
  { name: 'Dashboard', icon: sprite + '#icon-list' },
  { name: 'Campaigns', icon: sprite + '#icon-envelope-o' },
  { name: 'Workflows', icon: sprite + '#icon-calendar' },
  { name: 'Templates', icon: sprite + '#icon-folder-open-o' },
  { name: 'Stats', icon: sprite + '#icon-bar-chart' },
  { name: 'Contacts', icon: sprite + '#icon-group' },
  { name: 'Surveys', icon: sprite + '#icon-server' },
];

export const TOPBAR_LINKS = [
  { name: 'HELP' },
  { name: 'CLEVER STORE' },
  { name: 'OTHER' },
];

export const TABLE_HERO_ITEMS = {
  subtitle: 'Survey',
  button: 'New Survey',
};
