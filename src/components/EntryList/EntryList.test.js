import EntryList from "./EntryList";
import { render, screen } from '@testing-library/react';

describe("EntryList", () => {
    test("no entries has no links", () => {
        render(<EntryList />);
        expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
    test("5 entires, has 10 links", () => {
        const entries = [
            { id: "a", link: "https://www.link.com/a", author: "dog", name: "cat" },
            { id: "b", link: "https://www.link.com/b", author: "dog", name: "cat" },
            { id: "c", link: "https://www.link.com/c", author: "dog", name: "cat" },
            { id: "d", link: "https://www.link.com/d", author: "dog", name: "cat" },
            { id: "e", link: "https://www.link.com/e", author: "dog", name: "cat" }
        ];
        render(<EntryList entries={entries} />);
        expect(screen.getAllByRole("link").length).toBe(10);
    });
});
