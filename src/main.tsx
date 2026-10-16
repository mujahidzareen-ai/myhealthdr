import React from 'react';
import { createRoot } from 'react-dom/client';
import HealthApp from '@/components/health/health-app';
import './styles.css';
const root = document.getElementById('root');
if (!root) throw new Error('MyHealthDr root element is missing.');
createRoot(root).render(<React.StrictMode><HealthApp demo /></React.StrictMode>);
