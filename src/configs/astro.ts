import { ensurePackages, interopDefault } from '../utils'
import type { FlatConfigItem, OptionsFiles, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from '../types'
import { GLOB_ASTRO } from '../globs'

export async function astro(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic & OptionsFiles = {},
): Promise<FlatConfigItem[]> {
  const {
    files = [GLOB_ASTRO],
    overrides = {},
    stylistic = true,
  } = options

  await ensurePackages([
    'eslint-plugin-astro',
    'astro-eslint-parser',
  ])

  const [
    pluginAstro,
    parserAstro,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-astro')),
    interopDefault(import('astro-eslint-parser')),
  ] as const)

  return [
    {
      name: 'antfu:astro:setup',
      plugins: {
        astro: pluginAstro,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: options.typescript
            ? await interopDefault(import('@typescript-eslint/parser')) as any
            : null,
        },
      },
      name: 'antfu:astro:rules',
      processor: pluginAstro.processors['.astro'],
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-deprecated-astro-canonicalurl': 'error',
        'astro/no-deprecated-astro-fetchcontent': 'error',
        'astro/no-deprecated-astro-resolve': 'error',
        'astro/no-deprecated-getentrybyslug': 'error',
        'astro/no-set-html-directive': 'error',
        'astro/no-set-text-directive': 'error',
        'astro/no-unused-css-selector': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'astro/valid-compile': 'error',

        'style/jsx-indent': 'off', // this would conflict with astro files

        ...stylistic
          ? {
              'astro/prefer-class-list-directive': 'error',
              'astro/prefer-object-class-list': 'error',
              'astro/prefer-split-class-list': 'error',
            }
          : {},

        ...overrides,
      },
    },
  ]
}
