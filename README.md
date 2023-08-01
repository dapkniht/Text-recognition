# Text-recognition

Text recognition using Express js and Tesseract js

## How to run this project
steps to run the project
```sh
git clone https://github.com/dapkniht/Text-recognition.git
cd Text-recognition
npm install
npm run start
```

## API Endpoints
### 1. /recognize
- **Description:**
  - recognize image from file
- **Method:**
  - `GET`
- **Request Header:**
  - `Content-Type : multipart/form-data`
- **Request Body:**
  - `image` as `file`
- **Response:**
  ```JSON
   {
      "status": "Success",
      "data": "Lorem ipsum",
  }
  ```
  
### 2. /recognize/url
- **Description:**
  - recognize image from url
- **Method:**
  - `GET`
 
- **Request Body:**
  - `url` as `string`
- **Response:**
  ```JSON
   {
      "status": "Success",
      "data": "Lorem ipsum",
  }
  ```
