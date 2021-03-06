import { withKnobs, color, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import readme from './readme.md';
import { datasetId, knobGroups } from '../../stories/tdp.common';

export default {
  title: 'TDP CKAN|Dataset',
  component: 'tdp-ckan-dataset',
  decorators: [withKnobs],
  parameters: {
    notes: {
      markdown: { readme },
    }
  }
};

export const Default = () => html`
  <style>
  tdp-ckan-dataset {
    --tdp-ckan-dataset__title--color: ${color('Title: colour', 'var(--tdp-primary)', knobGroups.Styling)};
    --tdp-ckan-dataset__resources__header--color: ${color('Resources: header colour', 'var(--tdp-secondary)', knobGroups.Styling)};
    --tdp-ckan-dataset__resources__item--color: ${color('Resources: item colour', 'var(--tdp-primary)', knobGroups.Styling)};
    --tdp-ckan-dataset__resources__item--background-color: ${color('Resources: item background colour', 'var(--tdp-white)', knobGroups.Styling)};
    --tdp-ckan-dataset__resources__item--hover--color: ${color('Resources: item hover text colour', 'var(--tdp-white)', knobGroups.Styling)};
    --tdp-ckan-dataset__resources__item--hover--background-color: ${color('Item: hover background colour', 'var(--tdp-primary)', knobGroups.Styling)};
    --tdp-ckan-dataset__metadata--color: ${color('Metadata: text colour', 'var(--tdp-primary)', knobGroups.Styling)};
    --tdp-ckan-dataset__metadata--background-color: ${color('Metadata: background colour', 'var(--tdp-white)', knobGroups.Styling)};
    --tdp-ckan-dataset__metadata--hover--color: ${color('Metadata: hover texr colour', 'var(--tdp-white)', knobGroups.Styling)};
    --tdp-ckan-dataset__metadata--hover--background-color: ${color('Metadata: hover background colour', 'var(--tdp-primary)', knobGroups.Styling)};
  }
  </style>
  <tdp-ckan-dataset dataset-id="${text('Dataset ID', datasetId, knobGroups.Properties)}"></tdp-ckan-dataset>
`;
