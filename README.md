**Test Edilen Nodejs Versiyonları**
- v15.8.0

**Kullanım**
```shell``
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

**Devre**
Pot: 10K
R1 = 10K
![](https://i.ibb.co/LkFKt59/potdevre.png)

https://muhammedsaygili.com

