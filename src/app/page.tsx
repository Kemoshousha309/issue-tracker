"use client"
import { jwtDecode } from "jwt-decode";
export default function Home() {
  const token = "eyJraWQiOiJsVkhkT3g4bHRSIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLm1hemFhZHkiLCJleHAiOjE3MTY4MDk5ODksImlhdCI6MTcxNjcyMzU4OSwic3ViIjoiMDAwNDQyLjBlMGRjM2RjNGQ2YTQ5NmI4NTNjYzY3NGRjY2ViNGZkLjEyMTciLCJjX2hhc2giOiJqRlU5Ymp0YTVOX2x4VVpIeTFfbkpnIiwiYXV0aF90aW1lIjoxNzE2NzIzNTg5LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.RI_BdahahDA06DoCYfWc7CQDjfgmJYVrlU2jrWfWqouWoYsf-_UVsLPpeEygazNmURprJF_-DQzhdc9wf11yI2ZnwxrPkT-OUJC7dGgjFTYP2X2iqdAx1MVkRofVxjn6rm_GdBrdscpeUYuwh4S7ajD32zqdYL0_Zwb4COHz4hzr87_Az3Tib-9m_IX_3rTjRvgZDXdnq1pBQN7SBIFqQP5UCp8W-K-Jyt9CAhOS_lROK28oMFGkAAs2XOZpN_a8cLvtQ83EYvjU4wZVJA1s8MlJ2tyeeg8qaebbRtjWq0qhtS10hdG0Lj2fjczsh0zfOqoufk6zC5lIJqO_45Bvgw"
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <button onClick={() => {
        const decoded = jwtDecode(token);
        console.log(decoded);
      }} >decode</button>
    </div>
);
}
