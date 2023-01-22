# Transalate - is a personal typescript project whose aim is to aid the translation of pdfs from one language to another.

# Tools

- Pdf-parse - npm package to convert pdf to text
- GPT-3 - openai's enpoint(I am using this to power the translation, could not use google's translation endpoint at the time due to some constraints - will explore that option soon)

# Endpoints

- /convert - This expects multipart form data - with two specific fields - 1. File - which comes with the incoming pdf 2. numPage - which indicates the number of pages to be translated/converted - expects a number but can hanlde a string - defaults to max no. of pages if not provided or <=ZERO

- /translate - This endpoint is expected to receive data returned from the previous endpoint and make a call to openai's completion endpoint and return translated data

# Errors

- Errors have been sufficiently accounted for on both endpoints.

# Client side

- No client side implementation yet.

# To RUN

- Clone the repo

- start server with 'npm run dev' and make req according to the endpoint descriptions above.
