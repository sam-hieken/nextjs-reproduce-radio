/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <>
        <input type="radio" value={0} name="exploreOption" aria-label="One" defaultChecked={true}/> 
        <input type="radio" value={1} name="exploreOption" aria-label="Two" defaultChecked={false}/> 
        <input type="radio" value={2} name="exploreOption" aria-label="Three" defaultChecked={false}/>
  </>
}
