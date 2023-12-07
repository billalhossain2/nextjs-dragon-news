import Image from "next/image";
import logoImg from "@/assets/logo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
const Header = () => {
  return (
    <Box sx={{ textAlign: "center", mt: "30px" }}>
      <Box sx={{ maxWidth: "400px", margin: "auto" }}>
        <Image src={logoImg} height={300} width={400} alt="Header Logo" />
      </Box>
      <Typography sx={{ my: "10px", color: "GrayText" }}>
        Journalism Without Fear or Favour
      </Typography>
        <Typography>Sunday, <span className="text-gray-500">November 27, 2022</span></Typography>
    </Box>
  );
};

export default Header;
