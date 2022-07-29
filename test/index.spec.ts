import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Stellar Engine Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'stellarengine');
});

export const { run } = test;
