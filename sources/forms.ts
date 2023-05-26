import {
  Form,
} from '../../../generated-types/type-defs';


export const AssetForm: Form = {
  fields: [
    {
      key: 'relatie',
      label: 'relatie',
      relationType: 'components',
      metadata: [],
      acceptedEntityTypes: ['asset'],
      disabled: false,
    },
  ],
};
