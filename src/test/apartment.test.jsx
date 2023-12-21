import { describe, expect,vi, test } from 'vitest';
import { render } from '@testing-library/react';
import PDFfile from '../components/pdf/PDFfile';
import ApartmentCard from '../components/ListApart/ApartmentCard';
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;
  
describe('PDFfile Component', () => {
    const testComponent = () => {
        return {
            cin: "hh678",
            createdAt: "2023-12-17T22:50:04.061Z",
            firstNameOwner: "Willa",
            floor: 2,
            isPaid: true,
            lastNameOwner: "Warner",
            numberApart: 10,
            phone: 1234567,
            _id: "657f7bfc3cb1e006791c4022"

    };
};


    const currentDate = new Date().toISOString();

    test('renders PDF with correct data', () => {
        const apartmentData = testComponent(); // Call the function to get the data
        render(<ApartmentCard apartment={apartmentData}  />);
 
        // Check that the title is rendered
        expect(screen.getByText('DigiSyndic Facture')).toBeInTheDocument();

        // Check that the owner name is rendered
        expect(screen.getByText('Owner: Willa Warner')).toBeInTheDocument();
        expect(screen.getByText('CIN: hh678')).toBeInTheDocument();
        expect(screen.getByText('Number of Apartment: 10')).toBeInTheDocument();
        
        expect(screen.getByText(`Date Payment Facture: ${currentDate}`)).toBeInTheDocument();
        // Add more checks for other date formats if needed

        // Check that footer is rendered
        expect(screen.getByText('Thank you for choosing DigiSyndic')).toBeInTheDocument();
    });
});
