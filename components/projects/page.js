'use client';
import styles from './page.module.css'
import {projects} from "@/projects"

import Card from '@/components/Scrol/page';

export default function Projectss() {
  return (
    <main className={styles.main}>
      {
        projects.map( (project, i) => {
          return <Card key={`p_${i}`} {...project} i={i}/>
        })
      }
    </main>
  )
}