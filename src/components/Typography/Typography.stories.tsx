import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Title, Text, Paragraph } from './Typography';

const meta: Meta = {
  title: 'Components/Typography',
  tags: ['autodocs'],
};

export default meta;

export const Heading: StoryObj = {
  render: () => (
    <>
      <Title level={1}>Title 1</Title>
      <Title level={2}>Title 2</Title>
      <Title level={3}>Title 3</Title>
      <Title level={4}>Title 4</Title>
      <Title level={5}>Title 5</Title>
    </>
  ),
};

export const NormalText: StoryObj = {
  render: () => (
    <>
      <Text>This is normal text.</Text>
      <br />
      <Text type="secondary">Secondary</Text>
      <br />
      <Text type="warning">Warning</Text>
      <br />
      <Text type="danger">Danger</Text>
      <br />
      <Text strong>Strong</Text>
      <br />
      <Text italic>Italic</Text>
      <br />
      <Text underline>Underline</Text>
    </>
  ),
};

export const ParagraphText: StoryObj = {
  render: () => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie diam sit amet purus
      fermentum, a placerat sapien bibendum. In hac habitasse platea dictumst.
    </Paragraph>
  ),
};
