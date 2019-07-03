module.exports = {
  siteMetadata: {
    title: "Tristan Stutzman Portfolio",
    author: "Tristan STutzman",
    description: "A portfolio site to dispaly my work"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tristan-stutzman-portfolio',
        short_name: 'tristan',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
