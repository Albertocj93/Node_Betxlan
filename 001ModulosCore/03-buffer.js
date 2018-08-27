/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulación de ficheros/imágenes
		Criptografía
*/
'use strict'

var buf = new Buffer(100),
	buf2 = new Buffer(26),
	str = '\u00bd + \u00bc = \u00be'

buf.write('abcd',0,4,'ascii')
console.log(
	buf,
	buf.toString('ascii'),
	str,
	str.length + 'caracteres',
	Buffer.byteLength(str, 'utf8') + 'bytes'
	)