# NOTES

`.then` returns a promise

Promises have executors, an function for success and a function for failure

akin to instructing a friend say:


"Promise to do this" "Otherwise do that"

    function (fulfill, reject)
    

---

The ES2015 spec declares that promises must not fire their
resolution/rejection function on the same turn of the event loop that they are
created on.

---

Fulfillment handlers may return promises or values.

Handlers will wrap your return values in promises even if they are obtained synchronously.