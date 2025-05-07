const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'docusaurus-changelog-plugin',
    
    getPathsToWatch() {
      return [path.resolve(context.siteDir, 'changelog')];
    },
    
    async loadContent() {
      // Load changelog entries here
      // This is a simplified example
      const fs = require('fs');
      const changelogDir = path.resolve(context.siteDir, 'changelog');
      const entries = {};
      
      // Read changelog directory
      const files = fs.readdirSync(changelogDir);
      
      for (const file of files) {
        if (file.endsWith('.md')) {
          const content = fs.readFileSync(path.join(changelogDir, file), 'utf8');
          // Parse frontmatter and content
          entries[file] = { content, metadata: {} }; // Simplified
        }
      }
      
      return entries;
    },
    
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      
      // Create routes for each changelog entry
      for (const [id, {content, metadata}] of Object.entries(content)) {
        const dataPath = await createData(
          `changelog/${id}.json`,
          JSON.stringify({content, metadata})
        );
        
        addRoute({
          path: `changelog/${id.replace('.md', '')}`,
          component: '@theme/ChangelogEntry',
          exact: true,
          modules: {
            content: dataPath,
          },
        });
      }
      
      // Add index route
      addRoute({
        path: '/changelog',
        component: '@theme/ChangelogList',
        exact: true,
      });
    },
    
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
};
