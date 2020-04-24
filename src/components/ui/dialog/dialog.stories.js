import React from 'react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '~/App.scss';
import Dialog from './Dialog';

export default {
  title: 'Dialog',
  decorators: [withKnobs]
}

export function Default() {
  return (
    <Dialog open={boolean('open', false)} onClose={action('onClose')} maxWidth={radios('maxWidth', ['xs', 'sm', 'md', 'lg', 'xl'], '최대 가로사이즈')} fullWidth>
      <h2>example</h2>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis molestiae ab expedita distinctio doloremque assumenda corrupti quaerat. Debitis, voluptatum? Deleniti quo architecto enim veniam a ab omnis accusantium repellendus.
    </Dialog>
  )
}
