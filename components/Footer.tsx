import * as React from 'react'

import * as config from '@/lib/config'
import { GitHubIcon } from '@/lib/icons/github'
import { LinkedInIcon } from '@/lib/icons/linkedin'
import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { TwitterIcon } from '@/lib/icons/twitter'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  
  // Alterado para refletir seu período histórico de 2011 até o ano atual
  const currentYear = new Date().getFullYear()
  const startYear = 2011 

  const onToggleDarkMode = React.useCallback((e: any) => {
    e.preventDefault()
    toggleDarkMode()
  }, [toggleDarkMode])

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © {startYear} - {currentYear} {config.author}. Todos os direitos reservados. All rights reserved.
      </div>
      <div className={styles.copyright}>
        <a href="/termos" className={styles.legalLink}>Termos de Uso & Políticas de Privacidade</a>
        <span className={styles.copyright> | </span>
      </div>

      <div className={styles.settings}>
        {hasMounted && (
          <a className={styles.toggleDarkMode} href='#' role='button' onClick={onToggleDarkMode}>
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
