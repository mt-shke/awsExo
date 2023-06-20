<h1 style='padding:1rem;font-weight:bold' align='center'>Aws Course - Quote Project</h1>

## **AWS**

<details>
<summary>Styled components</summary>

```js
// add .babelrc
// add next.config.js

// npm install styled-components@latest
// npm install --save-dev babel-plugin-styled-components
// npm install --save @types/styled-components
```

.babelrc

```js
{
   "presets": ["next/babel"],
   "plugins": [["styled-components", { "ssr": true, "displayName": true }]]
}

```

</details>

<details>
<summary>AWS</summary>

```js
// amplify config
// amplify init

// https://docs.amplify.aws/start/getting-started/setup/q/integration/next/#initialize-a-new-backend
// npm install aws-amplify @aws-amplify/ui-react
```

```js
// _app.js
// AWS imports
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });
```

```js
// amplify add api

// amplify add auth
// amplify update auth

// amplify status
// amplify add function

// amplify push

// Add Table to db
// console > app > appDataTable View > create Item
```

</details>
