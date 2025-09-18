import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-wrap gap-4">

        <Button title="Small Rounded-SM" styles="text-sm rounded-sm" />
        <Button title="Small Rounded-MD" styles="text-sm rounded-md" />
        <Button title="Small Rounded-Full" styles="text-sm rounded-full" />


        <Button title="Medium Rounded-SM" styles="text-base rounded-sm" />
        <Button title="Medium Rounded-MD" styles="text-base rounded-md" />
        <Button title="Medium Rounded-Full" styles="text-base rounded-full" />

       
        <Button title="Large Rounded-SM" styles="text-lg rounded-sm" />
        <Button title="Large Rounded-MD" styles="text-lg rounded-md" />
        <Button title="Large Rounded-Full" styles="text-lg rounded-lg" />
      </div>
    </div>
  )
}
export default Landing;