const demoQuests = [
  {
    questName: 'Conquer Scotland',
    user: 'Macbeth',
    id: 0,
  },
  {
    questName: 'Do Laundry',
    user: 'Macbeth',
    id: 1,
  },
  {
    questName: 'Research Caesarean Sections',
    user: 'Macbeth',
    id: 2,
  },
];

const demoTasks = [
  {
    taskName: 'Consort with witches',
    taskDesc: 'Bubble, bubble, toil, and trouble...',
    questId: 0,
  },
  {
    taskName: 'Assassinate Banquo',
    taskDesc: 'I have to betray my friend in order to fulfill the witches\' prophecy',
    questId: 0,
  },
  {
    taskName: 'Recruit the Lady Macbeth for aid',
    taskDesc: '',
    questId: 1,
  },
  {
    taskName: 'Find some bleach',
    taskDesc: 'No one tells you how difficult it is to get bloodstains out of laundry *before* you murder someone...',
    questId: 1,
  },
  {
    taskName: 'Accept Promotion',
    taskDesc: 'King Duncan will be coming to my castle to offer me anothere Thanedom',
    questId: 0
  },
  {
    taskName: 'Study Obstetrics',
    taskDesc: 'I need to find an obstetrician in 11th century Scotland capable of determining if C-Sections are a thing in this time and place',
    questId: 2
  },
  {
    taskName: 'Succumb to hubris',
    taskDesc: 'Regardless of what the obstetrician tells me, I\'m not going to get assassinated by any nobles born via C-Section...',
    questId: 2
  },
];

export { demoQuests, demoTasks };