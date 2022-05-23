import { disableConflictRules } from "@tsplus/eslint-plugin-dprint/configs/disable-conflict-rules"

export const recommended = {
  plugins: ["@tsplus/dprint"],
  rules: {
    ...disableConflictRules.rules,
    "@tsplus/dprint/dprint": "warn"
  }
}
