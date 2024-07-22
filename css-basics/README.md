
# Simple Dashboard

This project is a simple dashboard created to learn and practice Tailwind CSS, Material UI, and Next.js routing system.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Learnings](#learnings)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)

## Project Overview

The main aim of this dashboard is to learn and implement Tailwind CSS, Material UI, and Next.js routing system. The project includes various components such as charts, forms, and tables to provide a comprehensive learning experience.

## Technologies Used

- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Material UI:** A popular React UI framework for building responsive, accessible, and customizable components.
- **Next.js:** A React framework for building server-side rendered (SSR) and statically generated (SSG) applications.

## Folder Structure

```
├── package.json
├── tailwind.config.js
├── public
│   ├── next.svg
│   ├── vercel.svg
│   └── profile_images
│       ├── old_40_male.png
│       ├── old_female_60.png
│       ├── user_20_male.png
│       ├── young_female_20.png
│       └── young_male_20.png
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── categories
│   │   │   └── page.js
│   │   ├── chats
│   │   │   └── page.js
│   │   ├── components
│   │   │   ├── base
│   │   │   │   ├── Footer.js
│   │   │   │   ├── Header.js
│   │   │   │   └── Navbar.js
│   │   │   ├── charts
│   │   │   │   ├── BarPlotChart.js
│   │   │   │   ├── BasicPieChart.js
│   │   │   │   ├── LinePlotChart.js
│   │   │   │   └── ScatterPlotChart.js
│   │   │   ├── forms
│   │   │   │   ├── CategoryForm.js
│   │   │   │   ├── ChatForm.js
│   │   │   │   ├── LoginForm.js
│   │   │   │   ├── RegisterForm.js
│   │   │   │   └── chat_components
│   │   │   │       ├── ChatContentItem.js
│   │   │   │       └── ChatHistroyItem.js
│   │   │   └── tables
│   │   │       └── CategoryTable.js
│   │   ├── constants
│   │   │   └── chats_constants.js
│   │   └── dashboard
│   │       └── page.js
```

## Learnings

### Tailwind CSS
- Learned to configure and customize Tailwind CSS using `tailwind.config.js`.
- Used utility-first classes to build responsive and modern UI components.

### Material UI
- Integrated Material UI components to enhance the UI with pre-built, accessible components.
- Customized Material UI themes to match the design requirements.

### Next.js Routing System
- Explored Next.js file-based routing system to create dynamic and nested routes.
- Implemented server-side rendering (SSR) and static site generation (SSG) for optimized performance.

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- Navigate through the dashboard to explore various components such as charts, forms, and tables.
- Modify and extend the components to practice and enhance your skills with Tailwind CSS, Material UI, and Next.js.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
