
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Terminal className={`${isMobile ? 'h-12 w-12' : 'h-16 w-16'} text-terminal-green mb-4`} />
      <h1 className="text-3xl md:text-4xl font-bold mb-2 font-mono dark:text-white">404</h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center px-4">
        Command Not Found: {location.pathname}
      </p>
      <div className="bg-terminal-dark text-terminal-green p-4 rounded-md font-mono mb-6 max-w-sm w-full mx-4">
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
