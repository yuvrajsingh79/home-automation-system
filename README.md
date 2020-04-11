# home-automation-system
This project provides a set of REST api's which helps in maintaining the home appliances remotely, which are connected over a network

## Prerequisites
1. npm and node should be installed
2. mongoDB should be installed and started ```sudo service mongod start```
3. mocha with supertest is being used for unit testing

## Installation & Usage

Clone the source code : 

```bash
git clone https://github.com/yuvrajsingh79/home-automation-system.git
cd home-automation-system/
node .
```

## APIs sample request, response :

Open loopback api explorer to perform api operations ``` http://localhost:3000/explorer/ ```

1. Add a new device : ```http://localhost:3000/api/devices ```
```
{
  "deviceName": "led",
  "deviceCategory": "light",
  "features": [
    "on", "off"
  ]
}
```
sample response :
```
{
  "deviceName": "led",
  "deviceCategory": "light",
  "features": [
    "on",
    "off"
  ],
  "id": "5e9147cb13974653a75b337a"
}
```
2. Set operation of a device : ```http://localhost:3000/api/devices/{deviceId}/operations ```
```
id : 5e9147cb13974653a75b337a
{
  "operationName": "on",
  "status": false,
  "value": {}
}
```
sample response :
```
{
  "operationName": "on",
  "status": false,
  "value": {},
  "deviceId": "5e9147cb13974653a75b337a",
  "id": "5e91482313974653a75b337b"
}
```
There are all CRUD apis exposed over loopback explorer having relations between devices and their operations.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

