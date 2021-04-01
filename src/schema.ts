import { makeSchema, queryType } from 'nexus';
import path from 'path';

const Query = queryType({
  definition(t) {
    t.string('name', { resolve: () => 'Michael Slocum' });
  },
});

const types = { Query };

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), 'src', 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'src', 'generated', 'schema.graphql'),
  },
});
