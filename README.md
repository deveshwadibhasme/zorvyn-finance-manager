# Zorvyan Finance Manager

A dashboard for users to track and understand their financial activity. (No Backend)

## Tech Stack & Architecture

- **Chart.js**: Used for rendering financial analytics and trends. (https://www.chartjs.org/docs/latest/)

- **Ant Design (antd)**: Used for a professional and consistent UI. (https://ant.design/components/overview)

### 4-Layer Frontend Architecture

I learn to use this architecture a month ago

1.  **UI Layer**: Contains reusable components and layout pages.
2.  **Hooks Layer**: Custom hooks to manage API/State layers.
3.  **State Layer**: Global state management (e.g., `TransactionContext`) to store and provide data across the app.
4.  **API Layer**: Dedicated modules for backend communication (e.g., `getTransaction`).

### Key Ant Design Components Used

- **Switch**: For toggling admin and viewer.
- **Form**: For handling user input and transaction entries.
- **Select, DatePicker, Tag**: helper component used in Form.
- **Modal**: For Add and Edit Transaction.
- **Table**: Used for displaying transaction history.
  - _Note: While Antd Table supports built-in filtering, I Decided to implement it myself_

### Chart Component Used from chartjs

- **Pie** : For catagory distribution visualization
- **Line** : For Date Wise
