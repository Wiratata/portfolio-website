import { useState, useEffect } from 'react';

export const useGitHubRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            try {

                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
                if (!response.ok) throw new Error('Failed to fetch repositories');
                const data = await response.json();



                const topRepos = data
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);



                const reposWithLanguages = await Promise.all(
                    topRepos.map(async (repo) => {
                        try {
                            const langResponse = await fetch(repo.languages_url);
                            if (!langResponse.ok) return { ...repo, languages: [repo.language].filter(Boolean) };

                            const langData = await langResponse.json();


                            return {
                                ...repo,
                                languages: Object.keys(langData)
                            };
                        } catch (e) {
                            console.warn(`Failed to fetch languages for ${repo.name}`, e);

                            return { ...repo, languages: [repo.language].filter(Boolean) };
                        }
                    })
                );

                setRepos(reposWithLanguages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchRepos();
        }
    }, [username]);

    return { repos, loading, error };
};
