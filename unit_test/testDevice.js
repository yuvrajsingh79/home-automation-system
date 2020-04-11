/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
"use strict";

const request = require("supertest");
const should = require("should");
const express = require("express");

const app = express();

describe("POST /devices", function() {
  it("responds with json", function(done) {
    request(app)
      .post("/devices")
      .send({
        deviceName: "test",
        deviceCategory: "fan",
        features: ["on", "off"]
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
