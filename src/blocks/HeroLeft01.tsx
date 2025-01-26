import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Components/TowSidedLayout';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" sx={{ fontSize: 'xl', fontWeight: 'xl' }}>
        ברוכים הבאים ל-foody !!
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontWeight: 'large',
          fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
        }}
      >
אתר המתכונים שלי מציע מגוון רחב של מתכונים לכל טעם ולכל אירוע.
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: 'lg', lineHeight: 'lg' }}
      >
      בין אם אתם מחפשים מתכון קל ופשוט לארוחה יומיומית, או מתכון יוקרתי לאירוע מיוחד – תמצאו כאן את כל מה שצריך. 
      </Typography>
      
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
      </Typography>
    </TwoSidedLayout>
  );
}
