import { FileProvider } from "./contexts";
import { RoutesMain } from "./routes";

const App = () => {
  return (
    <FileProvider>
      <RoutesMain />
    </FileProvider>
  );
};

export default App;
