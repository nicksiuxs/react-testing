import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )
}

it('Should render the correct amount of incomplete tasks', async () => {
    render(
        <MockTodoFooter numberOfIncompleteTasks={5} />
    );
    const paragraphElement = screen.getByText(/5 tasks left/i);

    expect(paragraphElement).toBeInTheDocument();
});

it('Should render "task" when number of incomplete task is one', async () => {
    render(
        <MockTodoFooter numberOfIncompleteTasks={1} />
    );
    const paragraphElement = screen.getByText(/1 task left/i);

    expect(paragraphElement).toBeTruthy();
});

it('Should render "task" when number of incomplete task is one 2', async () => {
    render(
        <MockTodoFooter numberOfIncompleteTasks={1} />
    );
    const paragraphElement = screen.getByText(/1 task left/i);

    expect(paragraphElement).toHaveTextContent("1 task left");
    expect(paragraphElement).toBeVisible();
    expect(paragraphElement.textContent).not.toBe("1 tasks left")
});