import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
}

describe("Todo", () => {
    it('Should render a simple task', async () => {
        render(<MockTodo />);

        addTask(["Do the laundry"])

        const divElement = screen.getByText(/Do the laundry/i);

        expect(divElement).toBeInTheDocument()
    });

    it('Should render multiple tasks', async () => {
        render(<MockTodo />);

        addTask(["Clean the dishes", "Go to grocery shop", "Do the homework"])

        const arrayOfTaks = screen.getAllByTestId("task-container");

        expect(arrayOfTaks.length).toBe(3)
    });

    it('Task should not have completed class when initially rendered', async () => {
        render(<MockTodo />);

        addTask(["Clean the dishes"])

        const taskElement = screen.getByText(/Clean the dishes/i);

        expect(taskElement).not.toHaveClass("todo-item-active")
    });

    it('Task should have completed class when is clicked', async () => {
        render(<MockTodo />);

        addTask(["Clean the dishes"])

        const taskElement = screen.getByText(/Clean the dishes/i);

        fireEvent.click(taskElement)

        expect(taskElement).toHaveClass("todo-item todo-item-active")
    });

    it('Footer should not have task left', async () => {
        render(<MockTodo />);

        const footerElement = screen.getByText(/0 tasks left/i);

        expect(footerElement).toBeInTheDocument()
    });

    it('Footer should have task left', async () => {
        render(<MockTodo />);

        addTask(["Clean bedroom", "Clean the dishes"])

        const footerElement = screen.getByText(/2 tasks left/i);

        expect(footerElement).toBeInTheDocument()
    });

    it('Footer should have task 1 left', async () => {
        render(<MockTodo />);

        addTask(["Clean bedroom", "Clean the dishes"])

        const taskElement = screen.getByText(/Clean the dishes/i);

        fireEvent.click(taskElement)

        const footerElement = screen.getByText(/1 task left/i);

        expect(footerElement).toBeInTheDocument()
    });
})