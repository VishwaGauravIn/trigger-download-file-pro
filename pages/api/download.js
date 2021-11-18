// Free to use (by https://github.com/VishwaGauravIn)

import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);

const handler = async (req, res) => {
  const url = req.query.url;
  const filename= 'attachment; filename='+req.query.filename+'.'+req.query.format;
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/mp4');
  res.setHeader('Content-Disposition', filename);
  await pipeline(response.body, res);
};

export default handler;

// template url :-  'http://localhost:3000/api/download?url=https://ytdlpro.vercel.app/logo.png&filename=test&format=mp4'