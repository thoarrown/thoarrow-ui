import React from 'react';
import { render } from '../../../tests/utils';
import Button from '../Button';

describe('Button', () => {
  it('should support all sizes', () => {
    const { container } = render(
      <>
        <Button size="default" />
        <Button size="large" />
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});
