##TIMESTAMPA <br />A timestamp microservice project for FreeCodeCamp
----
#### USER STORIES:

- [x] The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
- [x] A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
- [x] If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
- [x] If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
- [x] If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

#### USAGE:
* [[project url]/api/timestamp/2018-07-06](https://timestampa-fcc-project-1.glitch.me/api/timestamp/2018-07-06)
* [[project url]/api/timestamp/1530835200000](https://timestampa-fcc-project-1.glitch.me/api/timestamp/1530835200000)

#### OUTPUT:
* { "unix" : 1530835200000, "utc" : "Fri, 06 Jul 2018 00:00:00 GMT" }

---
[Yago Estévez](https://twitter.com/yagoestevez)
