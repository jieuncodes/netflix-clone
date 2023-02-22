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
          animate={{ x: searchOpen ? 0 : 280 }}
          transition={{ type: "linear", duration: 0.2 }}
        >
          <SearchIcon
            style={{
              color: "white",
              fontSize: "40px",
            }}
          />
        </SearchIconBox>

        <SearchBar
          {...register("keyword", { required: true, minLength: 2 })}
          placeholder="Titles, People, Genres ..."
          animate={searchAnimation}
          transition={{ type: "linear", duration: 0.1 }}
          initial={{ scaleX: 0 }}
        ></SearchBar>
      </SearchBarContainer>
    </>
  );
}
export default Search;
