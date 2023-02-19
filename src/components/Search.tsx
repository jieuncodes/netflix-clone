import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchBar, SearchBarContainer, SearchIconBox } from "../styles/Header";
import motion, { useAnimation } from "framer-motion";
import { useForm } from "react-hook-form";
import { IForm } from "../interfaces";

function Search() {
  const searchAnimation = useAnimation();
  const [searchOpen, setSearchOpen] = useState(false);
  const { register, handleSubmit } = useForm<IForm>();

  const toggleSearch = () => {
    if (searchOpen) {
      searchAnimation.start({ scaleX: 0 });
    } else {
      searchAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  return (
    <>
      <SearchBarContainer>
        <SearchIconBox
          onClick={toggleSearch}
          animate={{ x: searchOpen ? 0 : 185 }}
          transition={{ type: "linear" }}
        >
          <SearchIcon
            style={{
              color: "white",
              fontSize: "25px",
            }}
          />
        </SearchIconBox>

        <SearchBar
          {...register("keyword", { required: true, minLength: 2 })}
          placeholder="Titles, People, Genres ..."
          animate={searchAnimation}
          transition={{ type: "linear" }}
          initial={{ scaleX: 0 }}
        ></SearchBar>
      </SearchBarContainer>
    </>
  );
}
export default Search;
