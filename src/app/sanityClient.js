import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "bazw3s7l", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // Set to false if you need fresh data
  apiVersion: "2023-12-19", // Use the current date
});

export default client;
