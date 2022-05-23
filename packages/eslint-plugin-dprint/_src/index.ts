import { disableConflictRules } from "@tsplus/eslint-plugin-dprint/configs/disable-conflict-rules"
import { recommended } from "@tsplus/eslint-plugin-dprint/configs/recommended"
import { dprint } from "@tsplus/eslint-plugin-dprint/Rule"

export * as configSchema from "@tsplus/eslint-plugin-dprint/ConfigSchema"
export * as diff from "@tsplus/eslint-plugin-dprint/Diff"
export * as diffIterator from "@tsplus/eslint-plugin-dprint/DiffIterator"
export * as regularExpression from "@tsplus/eslint-plugin-dprint/RegularExpression"
export * as rule from "@tsplus/eslint-plugin-dprint/Rule"

export const configs = {
  "disable-conflict-rules": disableConflictRules,
  recommended
}
export const rules = {
  dprint
}
