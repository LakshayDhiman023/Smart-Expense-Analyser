# 💰 Smart Expense Analyser

Smart Expense Analyser is a full-stack web application that helps users automatically extract and analyze expenses from physical or digital receipts. By leveraging OCR and NLP, it converts receipts into structured data, enabling budget tracking and financial insights.

---

## 🚀 Features

- 📤 Upload receipt images or PDFs
- 🔐 User authentication powered by [Clerk](https://clerk.dev)
- 🔍 OCR processing using Tesseract.js
- 🧠 NER (Named Entity Recognition) with BERT-based LayoutLM to extract:
  - Merchant Name
  - Total Bill
  - Items and Costs
  - Purchase Date
- 🗃️ Data storage in MongoDB
- 📊 Interactive analytics dashboard (e.g., pie charts)
- 🎯 Set and manage monthly budgets
- 📈 View budget history and get spending insights

---

## 🛠️ Tech Stack

| Layer       | Technology          |
|------------|---------------------|
| Frontend    | Next.js             |
| Styling     | Tailwind CSS        |
| Backend     | Node.js (Express)   |
| Database    | MongoDB             |
| OCR Engine  | Tesseract.js        |
| NER Model   | BERT-based LayoutLM |
| Charts      | Chart.js / Recharts |
| Auth        | Clerk               |

---

## 🧠 How It Works

1. **User Login/Signup**  
   Authentication handled through Clerk (OAuth, magic links, email/password).

2. **Upload Receipt**  
   Upload receipt image or PDF via the frontend UI.

3. **OCR Processing**  
   Uses Tesseract.js to extract text and layout data from the uploaded file.

4. **NER Extraction**  
   A LayoutLM model extracts structured data like merchant, items, prices, and date.

5. **Data Storage**  
   Parsed data is stored in MongoDB and linked to the authenticated user.

6. **Analytics & Budgeting**  
   - Track expenses with pie charts and summaries  
   - Set monthly budgets  
   - Monitor historical budget performance  

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/smart-expense-analyser.git
cd smart-expense-analyser
2. Setup Clerk
Create an account at Clerk.dev

Get your Frontend API and JWT Secret

Configure environment variables in frontend/.env.local:

env
Copy
Edit
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_SECRET_KEY=your-clerk-secret-key
3. Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
4. Setup Backend
bash
Copy
Edit
cd ../backend
npm install
npm start
Configure environment variables in backend/.env:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/expenseDB
PORT=5000
CLERK_SECRET_KEY=your-clerk-secret-key
📄 License
This project is licensed under the MIT License.

🤝 Contributing
We welcome contributions of any kind!
Fork the repo, open issues, or submit pull requests to help improve the platform.

