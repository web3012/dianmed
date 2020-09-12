module.exports = {
    siteMetadata: {
        title: `Дианмед`,
        description: `Наркологический центр`,
        author: `@bumka`,
        copytxt: `©, ` + new Date().getFullYear()+ ` Дианмед`
    },

    plugins: [
        `gatsby-plugin-sass`,

        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto`,
                    },
                ],
            },
        },

        `gatsby-plugin-react-helmet`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },


        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,

    ],
}
