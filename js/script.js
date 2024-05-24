// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-04-kai-nguyen-4/sw.js", {
    scope: "/ICS2O-Unit-6-04-kai-nguyen-4/",
  })
}

window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  const radius = params.get("radius")

  const volume = 4/3 * Math.PI * (radius ** 3)
  document.getElementById("radiusAnswer").innerHTML = radius + " mm<sup>3</sup> <br /><br />"
  document.getElementById("answer").innerHTML = "the volume of the sphere is: " + volume
}

