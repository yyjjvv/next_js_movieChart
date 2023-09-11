import Link from 'next/link';
//components
import SearchForm from '@/components/SearchForm';

export default function Home() {
    return (
        <div>
            <h1>watchit</h1>
            <SearchForm />
            <ul>
                <li>
                    <Link href="/movies/1">첫 번째 영화</Link>
                </li>
                <li>
                    <Link href="/movies/2">두 번째 영화</Link>
                </li>
                <li>
                    <Link href="/movies/3">세 번째 영화</Link>
                </li>
            </ul>
        </div>
    );
}
