import CategorySelector from "./CategorySelector";
import { fireEvent, render, screen } from '@testing-library/react';

describe("CategorySelector", () => {
    test("no categories has no labels", () => {
        render(<CategorySelector />);
        expect(screen.queryByRole("radio")).not.toBeInTheDocument();
    });

    test("three categories, has three radio buttons", () => {
        const categories = ["comedy", "techno music", "lifting"];
        render(<CategorySelector categories={categories} />);
        expect(screen.getAllByRole("radio").length).toBe(3);
    });

    test("single category clicked, function called with category string", () => {
        const category = "coding";
        const categories = [category];
        const handleSelect = jest.fn();
        render(<CategorySelector categories={categories} onSelect={handleSelect} />);
        const inputElement = screen.getByRole("radio");
        fireEvent.click(inputElement);
        expect(handleSelect).toBeCalledWith(category);
    });
});
