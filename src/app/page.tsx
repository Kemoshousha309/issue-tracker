import { revalidatePath } from 'next/cache';
import LatestIssues from "./components/LatestIssues";
export default async function Home() {
  return (
    <div className="home">
      <LatestIssues />
    </div>
  );
}
revalidatePath('/')