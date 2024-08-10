import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '42ihtd8b',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skP6M97Dj0ZAQXKDWcUtTZzaAfLIDm8mVW3DE922W3dUR2AGBznf0deXbgD2VFzKV9wUDrcyT13XDWd2sV3zg06nRUWnsYJnhp3Esfz9YUohLgIuYADtGc3GL1ogTQOpaaHcX49iMRbbNMO3In1obqRfOrRTaMWtupvFZe9YpOEbAWswanNx',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;