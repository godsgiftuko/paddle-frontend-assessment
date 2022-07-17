import { Typography, Box, Grid, Stack } from '@mui/material';

const PostGridFore = ({ title, subTitle, right }) => (
  <Grid container item xs={12} md={12} spacing={3} mt={2} mb={8} >
    <Grid item xs={12} sm={6}>
      <Typography variant="h4" sx={{ textTransform: 'capitalize', fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        {subTitle}
      </Typography>
    </Grid>
    {
      right &&
      <Grid item xs={12} sm={6}>
        hello
      </Grid>
    }
  </Grid>
)

export default function PostsGrid({ title, subTitle, right, children }) {
  return (
    <Grid container item my={4} xs={12}>
      <PostGridFore title={title} subTitle={subTitle} right={right} />
      <Box sx={{ display: 'grid', gridTemplateColumns: { lg:  'repeat(3, 1fr)', sm:  'repeat(2, 1fr)' }, gap: 5 }}>
        {children}
      </Box>
    </Grid>
  );
}
