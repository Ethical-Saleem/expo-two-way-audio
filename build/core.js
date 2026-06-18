import ExpoTwoWayAudioModule from "./ExpoTwoWayAudioModule";
export async function initialize() {
    await ExpoTwoWayAudioModule.initialize();
}
export function isInitialized() {
    return ExpoTwoWayAudioModule.isInitialized();
}
export function playPCMData(audioData) {
    return ExpoTwoWayAudioModule.playPCMData(audioData);
}
export function bypassVoiceProcessing(bypass) {
    return ExpoTwoWayAudioModule.bypassVoiceProcessing(bypass);
}
export function toggleRecording(val) {
    return ExpoTwoWayAudioModule.toggleRecording(val);
}
export function isRecording() {
    return ExpoTwoWayAudioModule.isRecording();
}
export function tearDown() {
    return ExpoTwoWayAudioModule.tearDown();
}
export function restart() {
    return ExpoTwoWayAudioModule.restart();
}
export async function getMicrophonePermissionsAsync() {
    return ExpoTwoWayAudioModule.getMicrophonePermissionsAsync();
}
export async function requestMicrophonePermissionsAsync() {
    return ExpoTwoWayAudioModule.requestMicrophonePermissionsAsync();
}
export function getMicrophoneModeIOS() {
    return ExpoTwoWayAudioModule.getMicrophoneModeIOS();
}
export function setMicrophoneModeIOS() {
    return ExpoTwoWayAudioModule.setMicrophoneModeIOS();
}
export function clearAudioQueue() {
    return ExpoTwoWayAudioModule.clearAudioQueue();
}
//# sourceMappingURL=core.js.map