import { Provider } from "@/components/ui/provider";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <Provider>
      <div>Test</div>
      <Button colorPalette="teal">TestButton</Button>
    </Provider>
  );
}

export default App;
