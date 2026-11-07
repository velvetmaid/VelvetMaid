// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Velvet Maid';
export const SITE_DESCRIPTION = 'A quiet archive of small creations, unfinished, and notes along the way.';
export const SITE_AVATAR = '/assets/profile.v1.webp';

export const ARCHIVES = {
  notes: {
    title: 'Notes',
    description: 'Observations, lessons, and loose threads collected along the way.',
    heading: 'Notes along the way',
    eyebrow: 'From the notebook',
    introduction: 'Observations, lessons, and loose threads worth keeping.',
    entryLabel: 'Note',
  },
  stuff: {
    title: 'Stuff',
    description: 'A record of things made, tried, and left behind.',
    heading: 'Stuff',
    eyebrow: 'A shelf of small creations',
    introduction: 'Things made, ideas tested, and experiments still taking shape.',
    entryLabel: 'Stuff',
  },
} as const;

export const ARCHIVE_EMPTY_MESSAGE = 'Nothing here yet.';

export const PROFILE = {
  eyebrow: 'An independent little corner',
  introduction: 'I make small things and leave a few notes behind.',
};
