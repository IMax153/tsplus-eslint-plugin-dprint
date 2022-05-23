import { dprint } from "@tsplus/eslint-plugin-dprint/Rule"
import { TSESLint } from "@typescript-eslint/utils"

const tester = new TSESLint.RuleTester()

describe("dprint", () => {
  TSESLint.RuleTester.it!("foo", () => {
    tester.run("dprint", dprint, {
      valid: [
        {
          code: "console.log(\"hello\");\n",
          options: [{ config: { semiColons: "asi" } }]
        },
        {
          code: "console . log('hello')"
        }
      ],
      invalid: []
    })
  })
})
