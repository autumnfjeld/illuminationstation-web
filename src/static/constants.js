
// App constants
export const controllerUrl = "http://59.100.235.250:9800";

// Enums

export const inputStates = {
    text: 'text',
    speech: 'speech'
};
export const appStates = {
    waiting: 'waiting',
    working: 'working',
    responding: 'responding'
};
export const moods = {
    neutral: 'neutral',
    party: 'party',
    soothing: 'soothing',
    artic: 'artic'
};
export const moodPrompts = {
    'party':    'Let\'s party!',
    'soothing': 'I\'ve had a rough day.',
    'artic':    'It\'s sooo hot outside.',
    'neutral': 'I\'m feelin\' fine.'
};
export const moodKeywords = {
    party: 'party',
    excited: 'party',
    happy: 'party',
    fun: 'party',
    rough: 'soothing',
    stress: 'soothing',
    relax: 'soothing',
    sad: 'soothing',
    hot: 'artic',
    chill: 'artic',
    fine: 'neutral',
    ok: 'neutral',
};
