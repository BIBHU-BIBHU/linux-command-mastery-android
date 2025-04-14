
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.cf88a94af4244f06b424e020ec13f297',
  appName: 'Linux Command Mastery',
  webDir: 'dist',
  server: {
    url: 'https://cf88a94a-f424-4f06-b424-e020ec13f297.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    backgroundColor: "#1A1F2C",
    // Adding status bar configuration for better mobile experience
    statusBar: {
      backgroundColor: "#1A1F2C",
      style: "dark",
      overlaysWebView: false
    }
  },
  // Adding iOS configuration for completeness
  ios: {
    backgroundColor: "#1A1F2C",
    statusBar: {
      style: "dark"
    }
  }
};

export default config;
