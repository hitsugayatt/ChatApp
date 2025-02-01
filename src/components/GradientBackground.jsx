const GradientBackground = ({ children }) => {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-purple-200/30 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-teal-200/30 dark:from-blue-500/20 dark:to-teal-500/20 rounded-full blur-3xl" />
        </div>
    );
  };
  
  export default GradientBackground;