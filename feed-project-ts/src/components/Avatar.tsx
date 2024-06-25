import styles from '../components/Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  console.log(props);
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatarNoBorder}
      {...props}
    />
  );
}
