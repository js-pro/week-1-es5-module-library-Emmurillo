# Objeneric

Objeneric is a library that lets you manipulated objects and cast them to many data-types/resources.

## Install

By npm:

```
npm install objeneric --save
```

## Usage

You can use CommmonJS require such as follow:

``` javascript
var objeneric = require("objeneric");
```

Then use it's API.

## Methods


### Encode Object To URI

Useful for example when sending HTTP requests with URL params.

``` javascript
var uri = objeneric.toURI({ foo: "some object" });
```

That will set uri to `foo=some%20object`
