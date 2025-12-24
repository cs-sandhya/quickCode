import { checkNumberPadding } from "../index";

function runTests(testCases: any[]) {
  let passed = 0;

  testCases.forEach((test, index) => {
    const result = checkNumberPadding(test.input);
    const success = result === test.expected;

    if (success) passed++;

    console.log(
      `Test ${index + 1}:`,
      success ? "PASS" : "FAIL",
      "| Input:", JSON.stringify(test.input),
      "| Expected:", test.expected,
      "| Got:", result
    );
  });

  console.log(`\n${passed}/${testCases.length} tests passed`);
}

const rawInput = process.argv[2];

if (!rawInput) {
  console.error("Please provide test cases as JSON");
  process.exit(1);
}

let testCases;
try {
  testCases = JSON.parse(rawInput);
  console.log("Parsed test cases:", testCases);
} catch (err) {
  console.error("Invalid JSON input");
  process.exit(1);
}

runTests(testCases);
