# Overall Architecture

```
App
 ├── Layout
 │    ├── Navbar
 │    ├── Sidebar (optional)
 │    └── Main Content
 │
 ├── Dashboard Page
 ├── Transactions Page
 └── (Optional) Insights Page
```

---

# Component Structure (React mindset)

## 1. App Level

```
App.jsx
 ├── RoleContext / State
 ├── Transactions State
 ├── Filters State
 └── Routes / Layout
```

👉 Keep global state here (or Context)

---

## 2. Layout Components

### Navbar

```
Navbar.jsx
 ├── App Title
 ├── Role Switch (Admin / Viewer)
 └── Theme toggle (optional)
```

👉 Role switch is IMPORTANT (don’t hide it)

---

### Sidebar (optional but strong impression)

```
Sidebar.jsx
 ├── Dashboard
 ├── Transactions
 └── Insights
```

---

# 📊 3. Dashboard Page (MAIN PART)

```
Dashboard.jsx
 ├── SummaryCards
 ├── ChartsSection
 └── QuickInsights
```

---

## A. Summary Cards

```
SummaryCards.jsx
 ├── Card (Total Balance)
 ├── Card (Income)
 ├── Card (Expenses)
```

👉 Data derived from transactions

---

## B. Charts Section

```
ChartsSection.jsx
 ├── LineChart (time trend)
 ├── BarChart (category comparison)
 └── PieChart (distribution)
```

---

## C. Quick Insights

```
Insights.jsx
 ├── Highest spending category
 ├── This month vs last month
 └── Simple observations
```

---

# 4. Transactions Page

```
Transactions.jsx
 ├── FiltersBar
 ├── TransactionsTable
 └── Add/Edit Modal (Admin only)
```

---

## A. Filters Bar

```
FiltersBar.jsx
 ├── Search input
 ├── Category filter
 ├── Type filter (income/expense)
 └── Date filter
```

---

## B. Transactions Table

```
TransactionsTable.jsx
 ├── TableHeader
 └── TableRow[]
```

Each row:

```
TableRow.jsx
 ├── Date
 ├── Amount
 ├── Category
 ├── Type
 └── Actions (Edit/Delete → Admin only)
```

---

## C. Add / Edit Modal

```
TransactionModal.jsx
 ├── Form fields
 ├── Validation
 └── Submit handler
```

---

# 5. Role-Based Behavior (IMPORTANT BUT SIMPLE)

```
role = "admin" | "viewer"
```

### Apply rules:

| Feature           | Viewer | Admin |
| ----------------- | ------ | ----- |
| View dashboard    | ✅     | ✅    |
| View transactions | ✅     | ✅    |
| Add transaction   | ❌     | ✅    |
| Edit/Delete       | ❌     | ✅    |

---

# 6. State Structure

Keep it clean:

```
{
  role: "admin" | "viewer",
  transactions: [],
  filters: {
    search: "",
    category: "",
    type: "",
    dateRange: null
  }
}
```

---

# Data Flow

```
Transactions (state)
   ↓
Filtered Data
   ↓
Used by:
   → Table
   → Charts
   → Summary Cards
```

---

# 7. Data Processing Layer (IMPORTANT)

Create utility functions:

```
utils/
 ├── calculateSummary()
 ├── groupByCategory()
 ├── groupByDate()
 └── getInsights()
```

---

# 8. Responsiveness

At minimum:

- Cards stack on mobile
- Charts resize
- Table scrolls horizontally

---

# 9. Optional Enhancements (high impact)

Pick 1–2 only:

- Dark mode
- LocalStorage persistence
- Smooth animations
- CSV export

---
