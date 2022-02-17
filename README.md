**Test Edilen Nodejs Versiyonları**
- v15.8.0

**Kullanım**
```shell
$ npm install
```
Yükleme bittikten sonra main.js içinden COM portunu değiştir.

```javascript
const port = new SerialPort({ path: 'COM3', baudRate: 9600 }) //Port
```
Portunu değiştirdikten sonra
```shell
$ npm start
```
Bu kadar..

https://muhammedsaygili.com

