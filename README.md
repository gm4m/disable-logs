# disable-logs
Disable logs/errors that pops up in terminal.

## Usage
```javascript
const {use, setDisableErrors} = require("disable-logs")

use(); //removes all console.logs
setDisableErrors(); //that makes disable errors variable true, if you use this function 1 more then you disable it.
```
