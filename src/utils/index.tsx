// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateURLParamsString(options: { [key: string]: any }): string {
    const urlParams = new URLSearchParams()
    for (const key in options) {
        if(options[key])
        urlParams.append(key, options[key]);
    }

    return urlParams.toString();
}

export { generateURLParamsString };