import { validateUserInput } from "../src/client/js/validateUserInput"

describe("Testing the submit functionality", () => {
    test("Testing the validateUserInput() function", () => {
           expect(validateUserInput("http://localhost:8080/")).toBeDefined();
})});