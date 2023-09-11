import { useRouter } from "next/router";
//components
import SearchForm from "@/components/SearchForm";

const Search = () => {
    const router = useRouter();
    const { q } = router.query;

    return (
        <div>
            <h1>search 페이지</h1>
            <SearchForm initialValue={q} />
            <h2>{q} 검색 결과</h2>
        </div>
    );
};

export default Search;
