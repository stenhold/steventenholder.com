// pages/api/rss.js

export default function handler(req, res) {
    // Set the content type to XML
    res.setHeader('Content-Type', 'application/rss+xml');
  
    // RSS XML content (you can dynamically generate this or fetch from a static file)
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
      <title>Steven's Conversations</title>
      <link>https://www.steventenholder.com</link>
      <description>Investigations into the minds of interesting people.</description>
      <copyright>Copyright 2022 Steven ten Holder</copyright>
      <language>en</language>
      <itunes:category text="History"/>
      <itunes:author>Steven ten Holder</itunes:author>
      <itunes:owner>
          <itunes:name>Steven ten Holder</itunes:name>
          <itunes:email>steve.tenholder@gmail.com</itunes:email>
      </itunes:owner>
      <itunes:explicit>no</itunes:explicit>
      <itunes:image href="https://www.steventenholder.com/images/steven_s_conversations_square.png"/>
      <!-- More items here -->
  </channel>
  </rss>`;
  
    res.status(200).send(xmlContent);
  }