/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 19:26:58
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 19:27:26
 * @ Description:
 */

const extractValidLinks = (links: string) => {
	// Extract valid links using regex and return an array of links
	const regex = /https?:\/\/[^\s]+/g;
	const validLinks = links.match(regex);

	return validLinks ? validLinks.toString().split(',') : [];
};

export default extractValidLinks;
