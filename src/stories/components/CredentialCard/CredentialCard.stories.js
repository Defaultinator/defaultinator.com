import React from 'react';

import CredentialCard from '../../../components/CredentialCard/CredentialCard';

import { sampleCredential, sampleVerifiedCredential } from '../../../tests/data/credentialData';

export default {
  title: 'Components/CredentialCard',
  component: CredentialCard,
  argTypes: {
    onPrimaryAction: { action: 'onPrimaryAction' },
    onSecondaryAction: { action: 'onSecondaryAction' },
  },
};

const Template = (args) => <CredentialCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  credential: sampleCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
};

export const Verified = Template.bind({});
Verified.args = {
  credential: sampleVerifiedCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
};