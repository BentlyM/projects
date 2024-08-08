// i like this file important stuff

import crypto from 'crypto';

//createHash()

const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex'));

crypto.randomBytes(16 , (err , buf) => {
    if(err) throw err;
    console.log(`asynchronous? -> ${buf.toString('hex')}`);
}); // callback makes this async 

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm , key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(`encrypt -> ${encrypted}`);

// Decipher the encrypted message
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(`decrypt -> ${decrypted}`);