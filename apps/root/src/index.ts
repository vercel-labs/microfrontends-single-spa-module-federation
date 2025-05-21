import { mountVercelToolbar } from '@vercel/toolbar/vite';
import { registerApplication, start } from 'single-spa';
import './globals.css';

registerApplication(
  'header',
  () => import('navigation/header'),
  () => true,
);

registerApplication(
  'footer',
  () => import('navigation/footer'),
  () => true,
);

registerApplication(
  'content',
  () => import('content/landing'),
  () => true,
);

start();
mountVercelToolbar();
