# Base64 Encoding

https://www.codewars.com/kata/5270f22f862516c686000161

## kyu 5

Base64 encoding lets you represent arbitrary binary data as ASCII-safe text. Your task is to provide both the encoder and decoder to convert to and from Base64.

Create two functions that can convert from binary data to a Base64 encoded string, and vice versa:

function toBase64(data: Uint8Array): string
function fromBase64(encoded: string): Uint8Array
While many Base64 implementations use = padding characters, your functions should not use padding.

Can you come up with your own encoder and decoder rather than use your language's base64 implementation?

Example (input -> output):
b'this is a bytestring!' -> "dGhpcyBpcyBhIGJ5dGVzdHJpbmch"
b'\x00' -> "AA"
Tests
All test inputs will be valid
There are 100 random encode and 100 random decode tests with input lengths between 25 and 100.
Read more about Base64 encoding and decoding on Wikipedia.
