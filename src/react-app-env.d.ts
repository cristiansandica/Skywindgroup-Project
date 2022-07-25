/// <reference types="react-scripts" />

// so we can import modules in app component

declare module '*.mp4' {
    const src: string;
    export default src;
}