
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Terminal className="h-16 w-16 text-terminal-green mb-4" />
      <h1 className="text-4xl font-bold mb-2 font-mono">404</h1>
      <p className="text-xl text-gray-600 mb-6 text-center">
        Command Not Found: {location.pathname}
      </p>
      <div className="bg-terminal-dark text-terminal-green p-4 rounded-md font-mono mb-6 max-w-sm w-full">
        <p>$ cd {location.pathname}</p>
        <p className="text-red-400">bash: cd: {location.pathname}: No such file or directory</p>
      </div>
      <Button 
        onClick={() => navigate("/")}
        className="bg-terminal-dark hover:bg-gray-800 text-white"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
