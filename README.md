# quickCode

A Node.js utility to determine **number padding consistency** across a list of numeric strings.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/cs-sandhya/quickCode.git
cd quickCode
npm install
```
---

## Running the Application

```bash
npm run dev
```

## Running Tests from Command Line

```bash
npm run test -- '<JSON_ARRAY>'
```

## Example 

```bash
npm run test -- '[
  {"input":["001","002"],"expected":3},
  {"input":["001","002","9999"],"expected":3},
  {"input":["1","2","999"],"expected":1},
  {"input":["999","9999"],"expected":-3},
  {"input":["99","999","9999"],"expected":-2},
  {"input":["01","002"],"expected":-1},
  {"input":[],"expected":0}
]'
```

