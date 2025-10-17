import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from './schemas'
import { apiVersion, dataset, projectId } from './env'

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },
})
