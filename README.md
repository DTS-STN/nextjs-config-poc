This is a proof of concept demonstrating how to fetch client-side configuration via a `fetch()` call to an `/api/client-config` endpoint.

This strategy enables build-once-run-anywhere Next.js container images.

## Run dev server

``` sh
NEXT_PUBLIC_API_URL=https://reqres.in/api/users npm run dev
```

## Run non-dev server

``` sh
npm run build
NEXT_PUBLIC_API_URL=https://reqres.in/api/users npm start
```

You can replace the API URL with any API that returns JSON data.
