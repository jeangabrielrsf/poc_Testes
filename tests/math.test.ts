import { multiply } from "../src/helpers/math.helper";

describe("Testando Math Helper", () => {
	it("testando função multiply", () => {
		const result = multiply(4, 4);

		expect(result).toBe(16);
	});
});
