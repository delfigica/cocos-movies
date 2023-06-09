import { Skeleton, useTheme, useMediaQuery } from "@mui/material";

export const SkeletonCard = () => {
  //to handler responsive desing
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Skeleton
      variant="rectangular"
      height={500}
      sx={
        laptop
          ? { backgroundColor: "#3CCE88", margin: "15px", width: '280px'}
          : { backgroundColor: "#3CCE88", margin: "10px auto", width: '90%' }
      }
    />
  );
};
