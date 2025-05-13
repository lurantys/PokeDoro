// Pokemon evolution data
const pokemonEvolutions = {
    'bulbasaur': {
        evolvesTo: 'ivysaur',
        sessionsRequired: 5,
        currentSessions: 0
    },
    'ivysaur': {
        evolvesTo: 'venusaur',
        sessionsRequired: 10,
        currentSessions: 0
    },
    'charmander': {
        evolvesTo: 'charmeleon',
        sessionsRequired: 5,
        currentSessions: 0
    },
    'charmeleon': {
        evolvesTo: 'charizard',
        sessionsRequired: 10,
        currentSessions: 0
    },
    'squirtle': {
        evolvesTo: 'wartortle',
        sessionsRequired: 5,
        currentSessions: 0
    },
    'wartortle': {
        evolvesTo: 'blastoise',
        sessionsRequired: 10,
        currentSessions: 0
    },
    'caterpie': {
        evolvesTo: 'metapod',
        sessionsRequired: 3,
        currentSessions: 0
    },
    'metapod': {
        evolvesTo: 'butterfree',
        sessionsRequired: 5,
        currentSessions: 0
    },
    'weedle': {
        evolvesTo: 'kakuna',
        sessionsRequired: 3,
        currentSessions: 0
    },
    'kakuna': {
        evolvesTo: 'beedrill',
        sessionsRequired: 5,
        currentSessions: 0
    }
};

// Function to get evolution data for a Pokemon
function getEvolutionData(pokemonName) {
    return pokemonEvolutions[pokemonName.toLowerCase()];
}

// Function to increment session count for a Pokemon
function incrementSessionCount(pokemonName) {
    const evolutionData = getEvolutionData(pokemonName);
    if (evolutionData) {
        evolutionData.currentSessions++;
        return evolutionData.currentSessions;
    }
    return 0;
}

// Function to check if a Pokemon can evolve
function canEvolve(pokemonName) {
    const evolutionData = getEvolutionData(pokemonName);
    if (evolutionData) {
        return evolutionData.currentSessions >= evolutionData.sessionsRequired;
    }
    return false;
}

// Function to get the next evolution for a Pokemon
function getNextEvolution(pokemonName) {
    const evolutionData = getEvolutionData(pokemonName);
    if (evolutionData && canEvolve(pokemonName)) {
        return evolutionData.evolvesTo;
    }
    return null;
}

// Function to reset session count after evolution
function resetSessionCount(pokemonName) {
    const evolutionData = getEvolutionData(pokemonName);
    if (evolutionData) {
        evolutionData.currentSessions = 0;
    }
}

// Function to get evolution progress
function getEvolutionProgress(pokemonName) {
    const evolutionData = getEvolutionData(pokemonName);
    if (evolutionData) {
        return {
            current: evolutionData.currentSessions,
            required: evolutionData.sessionsRequired,
            nextEvolution: evolutionData.evolvesTo
        };
    }
    return null;
} 