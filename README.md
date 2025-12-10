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

The system features an intelligent **Low Stock Alert** mechanism: items with a quantity less than **8** are automatically highlighted in <span style="color:#ff6666">**Red**</span>, while healthy stock levels are shown in <span style="color:#72c37a">**Green**</span>.

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
      <td><img src="https://placehold.co/250x500/ffffff/72c37a?text=Dashboard+View&font=roboto" alt="Dashboard" width="200"/></td>
      <td><img src="https://placehold.co/250x500/ffffff/ffcccc?text=Low+Stock+Alerts&font=roboto" alt="Low Stock" width="200"/></td>
      <td><img src="https://placehold.co/250x500/ffffff/CABFEE?text=Edit+Interface&font=roboto" alt="Create Screen" width="200"/></td>
    </tr>
  </table>
</div>

---

## ✨ Features

| Feature | Description | Status |
| :--- | :--- | :---: |
| **📦 Smart Dashboard** | Toggle views between All Items, Low Stock, and Create modes. | ✅ |
| **🚨 Low Stock Logic** | Auto-filters items with `< 8` units and highlights them in red (`#FFCCCC`). | ✅ |
| **📝 CRUD Operations** | Full capability to **C**reate, **R**ead, **U**pdate, and **D**elete inventory items. | ✅ |
| **✏️ Edit Mode** | Tap any item to instantly load data into the form for modification. | ✅ |
| **💾 State Management** | Uses React `useState` for real-time local data manipulation. | ✅ |

---

## 🛠️ Tech Stack

* **Core:** React Native (0.76+)
* **Language:** JavaScript (ES6+)
* **Components:** Functional Components with Hooks
* **Lists:** Optimized `FlatList` implementation
* **Styling:** `StyleSheet` API

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

* **Node.js**: v14 or newer
* **Java JDK**: v11 (for Android)
* **Android Studio**: For Android Emulator
* **Xcode**: For iOS Simulator (Mac only)

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/JAYANTRANJANJHA/ShopStock.git](https://github.com/JAYANTRANJANJHA/ShopStock.git)
    cd ShopStock
    ```

2.  **Install Dependencies**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Start Metro Bundler**
    ```sh
    npm start
    ```

4.  **Run on Device/Emulator**
    * **Android:**
        ```sh
        npm run android
        ```
    * **iOS:** (Requires CocoaPods installation)
        ```sh
        cd ios && pod install && cd ..
        npm run ios
        ```

---

## 📂 Project Structure

A quick look at the top-level files and directories you'll work with.

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
