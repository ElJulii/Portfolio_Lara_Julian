import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Language } from './translations.tsx'

const STORAGE_KEY = 'portfolio-lang'

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  t: (typeof content)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'es') return stored

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en')),
      t: content[language],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
