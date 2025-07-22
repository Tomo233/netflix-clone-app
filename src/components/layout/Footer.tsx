import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="text-secondary-text-color bg-background-color border-t-border-color border-t py-14">
      <Container>
        {/* Social Media Icons */}
        <div className="mb-3">
          <InstagramIcon sx={{ color: "white" }} />
          <FacebookIcon sx={{ color: "white" }} />
          <YouTubeIcon sx={{ color: "white" }} />
        </div>

        {/* Footer List */}
        <ul className="grid grid-cols-4 gap-5 text-sm">
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Speed Test</li>
          <li>Jobs</li>
          <li>Legal Notices</li>
          <li>FAQ</li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
