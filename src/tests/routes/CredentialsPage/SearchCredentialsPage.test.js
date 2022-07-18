import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/CredentialsPage/SearchCredentialsPage.stories';

const { Primary: SearchCredentialsPage } = composeStories(stories);

describe('routes/SearchCredentialsPage', () => {
  it('should render', () => {
    render(<SearchCredentialsPage />);
  });
});
