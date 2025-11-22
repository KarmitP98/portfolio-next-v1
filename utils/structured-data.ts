export interface PersonSchema {
	'@context': string;
	'@type': string;
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	image: string;
	sameAs: string[];
	knowsAbout: string[];
	knowsLanguage?: Array<{
		'@type': string;
		name: string;
	}>;
	hasCredential?: Array<{
		'@type': string;
		name: string;
		credentialCategory: string;
	}>;
	alumniOf?: {
		'@type': string;
		name: string;
	};
	address?: {
		'@type': string;
		addressLocality: string;
		addressRegion: string;
		addressCountry: string;
	};
	worksFor?: {
		'@type': string;
		name: string;
	};
	email?: string;
	telephone?: string;
}

export interface WebSiteSchema {
	'@context': string;
	'@type': string;
	name: string;
	url: string;
	description: string;
	author: {
		'@type': string;
		name: string;
	};
}

export interface OrganizationSchema {
	'@context': string;
	'@type': string;
	name: string;
	url: string;
	logo: string;
	description: string;
}

export interface ProfilePageSchema {
	'@context': string;
	'@type': string;
	name: string;
	url: string;
	description: string;
	mainEntity: {
		'@type': string;
		name: string;
		jobTitle: string;
		url: string;
		sameAs: string[];
	};
}

export const generatePersonSchema = (data: {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	image: string;
	socialProfiles: string[];
	skills: string[];
	programmingLanguages?: string[];
	applications?: string[];
	frameworks?: string[];
	location?: {
		city: string;
		region: string;
		country: string;
	};
	email?: string;
	telephone?: string;
	linkedInUrl?: string;
}): PersonSchema => {
	const schema: PersonSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: data.name,
		jobTitle: data.jobTitle,
		description: data.description,
		url: data.url,
		image: data.image,
		sameAs: data.socialProfiles,
		knowsAbout: data.skills
	};

	if (data.programmingLanguages && data.programmingLanguages.length > 0) {
		schema.knowsLanguage = data.programmingLanguages.map(lang => ({
			'@type': 'Language',
			name: lang
		}));
	}

	if (data.frameworks && data.frameworks.length > 0) {
		schema.hasCredential = [
			...(schema.hasCredential || []),
			...data.frameworks.map(framework => ({
				'@type': 'EducationalOccupationalCredential',
				name: framework,
				credentialCategory: 'Framework'
			}))
		];
	}

	if (data.applications && data.applications.length > 0) {
		schema.hasCredential = [
			...(schema.hasCredential || []),
			...data.applications.map(app => ({
				'@type': 'EducationalOccupationalCredential',
				name: app,
				credentialCategory: 'Application'
			}))
		];
	}

	if (data.location) {
		schema.address = {
			'@type': 'PostalAddress',
			addressLocality: data.location.city,
			addressRegion: data.location.region,
			addressCountry: data.location.country
		};
	}

	if (data.email) {
		schema.email = data.email;
	}

	if (data.telephone) {
		schema.telephone = data.telephone;
	}

	if (data.linkedInUrl) {
		schema.worksFor = {
			'@type': 'Organization',
			name: 'LinkedIn Profile'
		};
	}

	return schema;
};

export const generateWebSiteSchema = (data: {
	name: string;
	url: string;
	description: string;
	authorName: string;
}): WebSiteSchema => {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: data.name,
		url: data.url,
		description: data.description,
		author: {
			'@type': 'Person',
			name: data.authorName
		}
	};
};

export const generateOrganizationSchema = (data: {
	name: string;
	url: string;
	logo: string;
	description: string;
}): OrganizationSchema => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: data.name,
		url: data.url,
		logo: data.logo,
		description: data.description
	};
};

export const generateProfilePageSchema = (data: {
	name: string;
	url: string;
	description: string;
	personName: string;
	jobTitle: string;
	personUrl: string;
	socialProfiles: string[];
}): ProfilePageSchema => {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		name: data.name,
		url: data.url,
		description: data.description,
		mainEntity: {
			'@type': 'Person',
			name: data.personName,
			jobTitle: data.jobTitle,
			url: data.personUrl,
			sameAs: data.socialProfiles
		}
	};
};

