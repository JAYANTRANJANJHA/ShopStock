<a name="readme-top"></a>

<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/2897/2897785.png" alt="Logo" width="80" height="80">

  <h1 align="center">ShopStock</h1>

  <p align="center">
    <strong>Smart Inventory Management for React Native</strong>
    <br />
    A lightweight, efficient mobile application to track stock levels, manage items, and visualize inventory status in real-time.
    <br />
    <br />
    <a href="#-getting-started"><strong>Get Started »</strong></a>
    ·
    <a href="#-features"><strong>Explore Features</strong></a>
    ·
    <a href="https://github.com/JAYANTRANJANJHA/ShopStock/issues"><strong>Report Bug</strong></a>
  </p>
</div>

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

</div>

---

## 📖 About The Project

**ShopStock** is a mobile inventory solution built with React Native. It allows business owners and warehouse managers to maintain visibility over their stock. The app focuses on simplicity and visual cues to help users make quick decisions.

The system features an intelligent **Low Stock Alert** mechanism:  
Items with a quantity less than **8** are highlighted in <span style="color:#ff6666">**Red**</span>, while healthy stock levels appear in <span style="color:#72c37a">**Green**</span>.

---

## 📱 Interface & Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>Dashboard</strong></td>
      <td align="center"><strong>Low Stock View</strong></td>
      <td align="center"><strong>Create / Edit</strong></td>
    </tr>
    <tr>
      <td><img src="https://placehold.co/250x500/ffffff/72c37a?text=Dashboard+View&font=roboto" width="200"/></td>
      <td><img src="https://placehold.co/250x500/ffffff/ffcccc?text=Low+Stock+Alerts&font=roboto" width="200"/></td>
      <td><img src="https://placehold.co/250x500/ffffff/CABFEE?text=Edit+Interface&font=roboto" width="200"/></td>
    </tr>
  </table>
</div>

---

## ✨ Features

| Feature | Description | Status |
|--------|-------------|--------|
| **📦 Smart Dashboard** | Toggle views between All Items, Low Stock, and Create modes. | ✅ |
| **🚨 Low Stock Logic** | Auto-filters items under 8 units and highlights them in red (`#FFCCCC`). | ✅ |
| **📝 CRUD Operations** | Create, Read, Update, Delete inventory items. | ✅ |
| **✏️ Edit Mode** | Tap any item to instantly load it into the form for editing. | ✅ |
| **💾 State Management** | Real-time updates using React `useState`. | ✅ |

---

## 🛠️ Tech Stack

- React Native (0.76+)
- JavaScript (ES6+)
- Functional Components + Hooks
- FlatList for optimized rendering
- StyleSheet API

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+  
- Java JDK 11  
- Android Studio  
- Xcode (for iOS)

### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/JAYANTRANJANJHA/ShopStock.git
    cd ShopStock
    ```

2. **Install dependencies**
    ```sh
    npm install
    # or
    yarn install
    ```

3. **Start Metro bundler**
    ```sh
    npm start
    ```

4. **Run on device/emulator**
    **Android:**
    ```sh
    npm run android
    ```
    **iOS:**
    ```sh
    cd ios && pod install && cd ..
    npm run ios
    ```

---

## 📂 Project Structure

```text
ShopStock/
├── App.jsx                 # Entry point
├── src/
│   └── screens/
│       ├── HomeScreen.jsx  # Main Dashboard & View Controller
│       ├── AllItems.jsx    # Component to render inventory lists
│       └── CreateScreen.jsx# Form logic for Add/Edit/Delete
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## 🔧 Usage Guide

### 1. Viewing Stock  
- 🟢 **Green:** Stock ≥ 8  
- 🔴 **Red:** Stock < 8  

The Home Screen automatically shows the **All Items** view.

---

### 2. Adding an Item  
1. Go to the **Create** tab  
2. Enter **Item Name**  
3. Enter **Stock Amount**  
4. Tap **Add New Item**

---

### 3. Editing / Deleting  
1. Open the **Create** tab  
2. Tap **Edit** on any item  
3. Update values and tap **Edit Item**  
4. Tap **Delete** to remove the item permanently  

---

## 🤝 Contributing

Contributions are what make the open-source community amazing.  
Any contribution you make is **greatly appreciated**.

1. Fork the project  
2. Create your feature branch  
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes  
   ```sh
   git commit -m "Add some AmazingFeature"
   ```
4. Push to your branch  
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request  

---

## 📝 License

Distributed under the **MIT License**.  
See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/JAYANTRANJANJHA">Jayant Ranjan Jha</a></p>
</div>
