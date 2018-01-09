module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "Coding as a Craft Bootcamp PrepCourse", // Site title.
  siteTitleAlt: "PrepCourse material for Craft Academy students", // Alternative site title for SEO.
  siteLogo: "https://assets.craftacademy.se/images/logo/graphic_only_logo_white.png", // Logo used for SEO and manifest.
  siteUrl: "https://prepcourse.craftacademy.se", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "PrepCourse material for Craft Academy students.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "xxxxxxxxxx", // FB Application ID for using app insights
  googleAnalyticsID: "UA-xxxxxxxx-x ", // GA tracking ID.
  disqusShortname: "ca-disqus-shortname", // Disqus shortname.
  postDefaultCategoryID: "bootcamp", // Default category for posts.
  userName: "Craft Academy", // Username to display in the author segment.
  userTwitter: "CraftAcademySE", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Sweden, SE", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "All about me!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/craftacademy",
      iconClassName: "fa fa-github"
    },
    {
      label: "Medium",
      url: "https://medium.com/craft-academy",
      iconClassName: "fa fa-medium"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/craft_academy",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CraftAcademySE",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: "Copyright © 2018. Craft Academy", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: [
    "Introduction",
    "Week One",
    "Week Two",
    "Week Three",
    "Week Four"
  ] // Used to generate the Table Of Contents. Index 0 should be blank.
};
