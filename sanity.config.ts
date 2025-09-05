import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: "b04mdi1e",
    dataset: "production",
    title: "Empty Labs Website",
    apiVersion: "2024-04-30",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas},
    scheduledPublishing: { enabled: true, showReleasesBanner: false },

})

export default config;