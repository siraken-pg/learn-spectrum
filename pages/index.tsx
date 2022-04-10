import type { NextPage } from "next";
import { Layout } from "../layouts/default";

const HomePage: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Hello Next.js 👋</h1>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
