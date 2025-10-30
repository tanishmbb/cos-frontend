/**
 * ======================
 * COS Frontend Data Models
 * ======================
 */

/**
 * @typedef {Object} Skill
 * @property {number} id
 * @property {string} name
 * @property {string} [category]
 * @property {string} [icon_url]
 */

/**
 * @typedef {Object} Badge
 * @property {number} id
 * @property {string} name
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {string} [criteria]
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} username
 * @property {string} email
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [avatar_url]
 * @property {string} [bio]
 * @property {Skill[]} [skills]
 * @property {Badge[]} [badges]
 * @property {string[]} [roles]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Organization
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {string} [avatar_url]
 * @property {number} [owner_id]
 * @property {string} [created_at]
 */

/**
 * @typedef {Object} Community
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {string} [banner_url]
 * @property {Organization} [organization]
 * @property {User[]} [members]
 * @property {string} [created_at]
 */

/**
 * @typedef {Object} Event
 * @property {number} id
 * @property {string} title
 * @property {string} [description]
 * @property {string} [location]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {Community} [community]
 * @property {User[]} [attendees]
 * @property {string} [created_at]
 */

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {User} author
 * @property {Community} [community]
 * @property {string} content
 * @property {string[]} [media_urls]
 * @property {number} [likes_count]
 * @property {number} [comments_count]
 * @property {string} [created_at]
 */

/**
 * @typedef {Object} Comment
 * @property {number} id
 * @property {User} author
 * @property {Post} post
 * @property {string} content
 * @property {string} [created_at]
 */

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} [description]
 * @property {string} [price]
 * @property {string} [image_url]
 * @property {User} [seller]
 * @property {Community} [community]
 * @property {string} [created_at]
 */
