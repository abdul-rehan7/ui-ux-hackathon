import { type SchemaTypeDefinition } from 'sanity'
import { item } from './item'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [item],
}
