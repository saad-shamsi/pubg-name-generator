/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    @:{
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
