import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "../../components/ui/Container";
import Overlay from "../../components/ui/Overlay";
import MediaTag from "../../components/ui/MediaTag";
import { useSimilarTitles } from "./hooks/useSimilarTitles";
import SkeletonLoader from "../../components/ui/SkeletonLoader";
import { IMAGE_BASE_URL } from "../../constants/tmdbBaseUrls";
import Rating from "../../components/ui/Rating";

function MoreLikeThis() {
  const { similarTitles, isLoadingSimilarTitles } = useSimilarTitles();

  if (isLoadingSimilarTitles) return <SkeletonLoader />;

  return (
    <section className="pb-5">
      <h3 className="pt-3 pb-5 text-2xl font-semibold">More Like This</h3>

      <div className="flex flex-wrap gap-x-5 gap-y-7">
        {similarTitles?.map((title) => {
          return (
            <div
              className="w-72 rounded-md bg-[#202020] pb-3 transition-transform duration-500"
              key={title.id}
            >
              {/* Card Image */}
              <div className="relative cursor-pointer">
                <img
                  src={`${IMAGE_BASE_URL}/original/${title.imageURL}`}
                  className="rounded-md"
                  alt="Image Poster"
                />
                <Overlay type="bottom" />

                <h4 className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold tracking-wide">
                  {title.titleName}
                </h4>
              </div>
              {/* Card Menu */}

              <Container>
                <div className="flex items-center justify-between gap-2 py-2">
                  <MediaTag value={title.adult ? "16+" : "13+"} />
                  <MediaTag value="HD" />
                  <Rating value={title.rating} />
                  <p>2025</p>
                  <AddCircleOutlineIcon className="h-12! w-12! text-[#a3a3a3]" />
                </div>
                <p className="text-secondary-text-color text-sm font-medium">
                  {title.overview}
                </p>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MoreLikeThis;
