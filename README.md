# Syndic Web Payment Management System Front End 

## Project Overview

In this web agency project, the client has requested the development of a Syndicate Payment Management System. The application will enable the management of apartments, monthly payments, and the printing of invoices for each apartment.

## Functionality Overview

### Apartment Management

- **Add New Apartment:**
  - Syndic can add a new apartment, specifying details such as apartment number, owner information, and other relevant details.

### Payment Management

  - For each apartment, the syndic can mark the monthly payment as paid when the owner makes the payment.

### Invoice Generation

- **Download PDF Invoice:**
  - Syndic can generate and download a PDF invoice for each payment made by the apartment owner.

### Statistics

- **View Statistics:**
  - Syndic can view statistical data related to payments.

### User Management

- **Register New Admin (SuperAdmin Only):**
  - SuperAdmin can register a new admin, providing them with the necessary access rights.


## Technologies Used

### Frontend

- ReactJs
- Redux 
- React Testing Library for unit tests

## Project Structure

The project is divided into three main parts: Backend, Frontend, and Deployment.

### Frontend

- Components: Reusable UI components.
- Routes: Define frontend application routes and protect them.
- Redux: Manage global state.
- Tests: Ensure test coverage exceeds 20% using React Testing Library.



### Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
   ```bash
   cd DigiSynd_Front
   npm install

