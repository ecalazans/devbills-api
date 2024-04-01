import { Router } from 'express';

import packageJson from '../../package.json';

export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
  const { name, version, description, author } = packageJson;

  res.status(200).json({ name, version, description, author });
});

// ROUTE -> CONTROLLER -> SERVICE -> ENTITY
// CAMADAS:
// ENTITY -> SERVICE -> CONTROLLER -> ROUTE
