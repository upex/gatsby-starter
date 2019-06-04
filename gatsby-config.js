/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Upen Panging.FullStack Javascript Engineer. Agile minded. Risk taker. Wannabe Chef.`,
    siteUrl: `https://upenpanging.in/`,
    description: `FullStack javascript engineer, Agile minded, Risk taker, having keen interest in DevOps and cloud technology, loves minimalist UI/UX design, an entertainer with great sense of humour. My primary focus is on modern Javascript and its ecosystem. Currently learning about GraphQL and loving it.When I'm not coding, you can find me cooking amazing dishes.Frontend Development: HTML5, CSS3, Javascript(ES5/ES6), Angular, Vue, Vuex, React, Redux, GatsbyJs, Material UI, Bootstrap, Vuetify, Jquery, Responsive Design.Backend Development: Nodejs, Express, RESTful API, MongoDB, JSON.Hosting & Deployments: AWS, DigitalOcean, Netlify`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
  ]
}
