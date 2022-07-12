import { Buffer } from 'buffer';

function Encoder(data?: any, json?: any) {
  let string;
  if (json) {
    string = JSON.stringify(data);
  } else {
    string = data.toString();
  }
  const buffer = new Buffer(string);
  return buffer.toString('base64');
}

function Decoder(data?: any) {
  const buffer = new Buffer(data, 'base64');
  return buffer.toString('utf8');
}

export { Encoder, Decoder };
