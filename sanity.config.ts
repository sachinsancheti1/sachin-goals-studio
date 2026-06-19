import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {dashboardConfig} from './dashboardConfig.js'

export default defineConfig({
  name: 'default',
  title: 'Sachin Goals',

  projectId: '04rb9ev3',
  dataset: 'production',

  plugins: [
    dashboardConfig,
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
