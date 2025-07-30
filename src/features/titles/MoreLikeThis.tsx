import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "../../components/ui/Container";
import Overlay from "../../components/ui/Overlay";

function MoreLikeThis() {
  return (
    <section className="pb-5">
      <h3 className="pt-3 pb-5 text-2xl font-semibold">More Like This</h3>

      <div className="flex flex-wrap gap-x-5 gap-y-7">
        <div className="w-72 rounded-md bg-[#202020] pb-3 transition-transform duration-500">
          {/* Card Image */}
          <div className="relative cursor-pointer">
            <img
              src="https://image.tmdb.org/t/p//original//ncEsesgOJDNrTUED89hYbA117wo.jpg"
              className="rounded-md"
              alt="Image Poster"
            />
            <Overlay type="bottom" />

            <h4 className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold tracking-wide">
              Almost Cops
            </h4>
          </div>
          {/* Card Menu */}

          <Container>
            <div className="flex items-center justify-between gap-3 py-2">
              <p className="rounded-sm border border-[#7c7676] px-2 text-sm">
                16+
              </p>
              <p className="rounded-sm border border-[#7c7676] px-1 text-sm">
                HD
              </p>
              <p>1h 37m</p>

              <p>2025</p>

              <AddCircleOutlineIcon className="h-12! w-12! text-[#a3a3a3]" />
            </div>
            <p className="text-secondary-text-color text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              exercitationem aspernatur obcaecati pariatur eaque doloremque iste
              molestiae ex,
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default MoreLikeThis;
