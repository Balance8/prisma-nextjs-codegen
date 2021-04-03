import { makeSchema, objectType, queryType } from 'nexus';
import path from 'path';
import { Context } from './context';

const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id', { description: 'Id of the user' });
    t.string('firstName', { description: 'First name of the user' });
    t.string('lastName', { description: 'Last name of the user' });
    t.string('email', { description: 'Email' });
    t.string('phone', { description: 'Phone' });
  },
});

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('manyUsers', {
      type: 'User',
      resolve: (parent, args, ctx: Context) => {
        return ctx.prisma.user.findMany({
          where: {
            firstName: {
              startsWith: 'Amanda',
            },
          },
        });
      },
    });
  },
});

const types = { User, Query };

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), 'src', 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'src', 'generated', 'schema.graphql'),
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});
