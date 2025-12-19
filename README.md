# 📝 AWS Notes App (Serverless CRUD Application)

Live Demo: 🌐 [http://my-notes-app-12345.s3-website-us-east-1.amazonaws.com/](http://my-notes-app-12345.s3-website-us-east-1.amazonaws.com/)

---

## 📌 Project Overview

This project is a **fully serverless Notes application** built on **AWS**. It allows users to:

* Create notes
* View all notes
* Edit notes
* Delete notes

The application uses a modern **serverless architecture**, with a static frontend hosted on S3 and a backend powered by AWS Lambda, API Gateway, and DynamoDB.

---

## 🏗️ Architecture

```
Browser (HTML/CSS/JS)
        |
        | HTTPS (CORS-enabled)
        v
Amazon API Gateway (REST API)
        |
        v
AWS Lambda (Python)
        |
        v
Amazon DynamoDB (Notes table)
```

---

## 🧰 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)
* Amazon S3 (Static Website Hosting)

### Backend

* AWS Lambda (Python 3.11)
* Amazon API Gateway (REST API)
* Amazon DynamoDB

---

## 🗂️ Project Structure

```
frontend/
├── index.html
├── style.css
└── app.js

backend/
└── lambda_function.py
```

---

## 🧾 DynamoDB

**Table Name:** `Notes`

| Attribute | Type   |
| --------- | ------ |
| id (PK)   | String |
| title     | String |
| content   | String |

---

## 🔌 API Endpoints

Base URL:

```
https://<api-id>.execute-api.us-east-1.amazonaws.com/prod
```

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /notes         | Fetch all notes   |
| POST   | /notes         | Create a new note |
| PUT    | /notes         | Update a note     |
| DELETE | /notes?id={id} | Delete a note     |

---

## 🔐 CORS Configuration

CORS is enabled on API Gateway with:

* **Allow-Origin:** `*`
* **Allow-Methods:** GET, POST, PUT, DELETE, OPTIONS
* **Allow-Headers:** Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token

This allows the S3-hosted frontend to securely communicate with the API.

---

## 🚀 Deployment Steps (High Level)

1. **Create DynamoDB table** (`Notes`)
2. **Create Lambda function** and attach IAM role with DynamoDB access
3. **Create API Gateway REST API**
4. Configure `/notes` resource with GET, POST, PUT, DELETE
5. Enable CORS and deploy API
6. **Upload frontend files to S3**
7. Enable **Static Website Hosting** in S3

---

## ✅ Features

* Fully serverless (no servers to manage)
* Scales automatically
* Clean and responsive UI
* Red delete button for clear UX
* Error-handled backend
* Production-ready architecture

---

## 📸 Live Application

👉 **Try it here:**

[http://my-notes-app-12345.s3-website-us-east-1.amazonaws.com/](http://my-notes-app-12345.s3-website-us-east-1.amazonaws.com/)

---

## 📈 Future Improvements

* User authentication with Amazon Cognito
* Per-user notes isolation
* Pagination for large note sets
* CI/CD pipeline (GitHub → AWS)
* Dark mode UI

---

## 🏁 Conclusion

This project demonstrates how to build a **real-world CRUD application** using AWS serverless services. It is ideal as a portfolio project or a foundation for more advanced applications.

Happy building 🚀
