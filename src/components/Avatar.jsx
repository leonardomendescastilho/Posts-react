import styles from '../components/Avatar.module.css'

export function Avatar({ hasBorder, src}){
  return(
    <img
    className={hasBorder ? styles.avatarWithBorder : styles.avatarNoBorder}
    src={src}
  />
  )
}
