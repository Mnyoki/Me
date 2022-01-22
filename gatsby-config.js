module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                process.env.GA_TRACKING_ID, // Google Analytics
                ],
                gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
                },
                pluginConfig: {
                head: true,
                respectDNT: true,
                },
            },
        }
    ]
}