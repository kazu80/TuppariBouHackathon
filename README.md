## 概要 ##

6.11.2016 - 12 つっぱり棒ハッカソンの作品
Raspberry PI x 超音波センサー（HC-SR04）による身長測定を作成

###  RaspberryPIで動かすscript ###

```
app/src/raspberryPi/foo.js
```



### 配線 ###

参考：http://thejackalofjavascript.com/rpi-an-ultrasonic-sensor-measure-distances/

VCC  : +5v power supply
Trigger : GPIO 17
Echo : GPIO 18
Ground : Connected to the ground

### インストール ###

```
$ npm install
```

Web側 : app/root/asset/index.html
 npmインストール後、
  socket.io-clientをJS Rootフォルダ（app/root/asset/js）に「socket.io」にリネームして設置
  NCMB（nifty cloud mobile backend）を使う場合は、ncmbをJS Rootフォルダ（app/root/asset/js）に設置
 WebSocketのConnectionをRaspberryPIのIPに設定する

Raspberry側 : app/src/raspberryPi/foo.js
 使用npmパッケージ
  r-pi-usonic
  ncmb
  socket.io
  
 NCMB（nifty cloud mobile backend）は使ってない。使う場合はキーを設定する

### 使い方 ###

```
$ gulp start // UP

$ gulp build // Copy to dist
```

