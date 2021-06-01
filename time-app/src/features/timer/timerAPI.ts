const fetch = require("node-fetch");

export function fetchTime() {
  return fetch("/api/time").then((response: { json: () => any }) => response.json());
}
