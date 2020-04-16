#!/usr/bin/env python3

import board
import adafruit_dht
import time
import datetime
import requests
import os

dht_sensor = adafruit_dht.DHT11(board.D17)

temperature_c = dht_sensor.temperature

sensorConfig = {
    "id": os.environ["SENSOR_ID"],
    "location": os.environ["SENSOR_LOCATION"],
    "temperature": temperature_c
}

while True:
    sensorConfig["temperature"] = dht_sensor.temperature
    sensorConfig["time"] = datetime.datetime.now().isoformat()
    print(sensorConfig)
    post = requests.post(os.environ["THERMAPOLL_API_URL"], json=sensorConfig)
    time.sleep(15)