module.exports = {
	// Replace next lint by eslint because there is a problem with lintstaged https://github.com/vercel/next.js/issues/27997
	'**/*.ts?(x)': 'eslint --cache --cache-location .next/cache/eslint',
};
