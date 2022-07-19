import {screen, render, fireEvent} from '@testing-library/react';
import SearchInput from "../index";
import {useState} from 'react'

const MockSearchInput = () => {
    const [value, setValue] = useState("");
    return (
<SearchInput value={value} onChange={(e) => setValue(e.target.value)} />
    )
}

it('searchInpu test', () => {
    render(<MockSearchInput/>);
    const element = screen.getByPlaceholderText("Search");
    fireEvent.change(element, {target: {value:"name"}});
    expect(element.value).toBe("name")
})