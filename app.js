import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta?.url);
const dirname = path?.dirname(filename);

const app = express();

app?.use(express?.static(path?.join(dirname, 'frontend/dist')));

app?.get('*', (req, res) => {
    res?.sendFile(path?.join(dirname, 'frontend/dist/index.html'));
});

const port = process?.env?.PORT || 8080;

app?.listen(port, () => {
    console.log('Listening on port ', port);
});
