import { ensurePackages, interopDefault } from '../utils'
import type { FlatConfigItem, OptionsFiles, OptionsHasTypeScript, OptionsOverrides } from '../types'
import { GLOB_JSX, GLOB_TSX } from '../globs'

export async function solid(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsFiles = {},
): Promise<FlatConfigItem[]> {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    overrides = {},
    typescript = true,
  } = options

  await ensurePackages([
    'eslint-plugin-solid',
  ])

  const [
    pluginSolid,
    solid,
  ] = await Promise.all([
    // @ts-expect-error types are in src folder (and not in dist)
    interopDefault(import('eslint-plugin-solid')),
    interopDefault(import('eslint-plugin-solid/configs/typescript')),
  ] as const)

  return [
    {
      name: 'antfu:solid:setup',
      plugins: {
        solid: pluginSolid,
      },
    },
    {
      files,
      ...solid,
      languageOptions: {
        parser: typescript
          ? await interopDefault(import('@typescript-eslint/parser')) as any
          : null,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          project: typescript ? 'tsconfig.json' : undefined,
        },
      },
      name: 'antfu:solid:rules',
      rules: {
        // recommended rules solid
        'solid/components-return-once': 'error',
        'solid/event-handlers': 'error',
        'solid/imports': 'error',
        'solid/jsx-no-duplicate-props': 'error',
        'solid/jsx-no-script-url': 'error',
        'solid/jsx-no-undef': ['error', { allowGlobals: true, autoImport: true }],
        'solid/jsx-uses-vars': 'error',
        'solid/no-array-handlers': 'off',
        'solid/no-destructure': 'error',
        'solid/no-innerhtml': 'error',
        'solid/no-proxy-apis': 'off',
        'solid/no-react-deps': 'error',
        'solid/no-react-specific-props': 'error',
        'solid/no-unknown-namespaces': 'error',
        'solid/prefer-classlist': 'off',
        'solid/prefer-for': 'error',
        'solid/prefer-show': 'error',
        'solid/reactivity': 'error',
        'solid/self-closing-comp': 'error',
        'solid/style-prop': 'error',

        // overrides
        ...overrides,
      },
    },
  ]
}
