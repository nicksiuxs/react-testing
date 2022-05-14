import { render, screen, fireEvent } from '@testing-library/react';

import AddInput from '../AddInput'

const mockSetTodos = jest.fn();

describe("AddInput", () => {
    it('should render input element', async () => {
        render(<AddInput setTodos={mockSetTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        render(<AddInput setTodos={mockSetTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go grocery store" } })
        expect(inputElement.value).toBe("Go grocery store");
    });

    it('should have empty input when add button is clicked', async () => {
        render(<AddInput setTodos={mockSetTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i })

        fireEvent.change(inputElement, { target: { value: "Go grocery store" } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });
})