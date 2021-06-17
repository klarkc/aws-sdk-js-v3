import { PollyClient, SynthesizeSpeechInput } from "@aws-sdk/client-polly";
export interface PresignedPollyOptions {
    /**
     * Seconds until the presigned URL expires. Defaults to 3600
     */
    expiresIn?: number;
}
/**
 * Generate a signed URL.
 */
export interface PresignedPollyInput {
    /**
     * A pre-configured instance of the AWS.Polly service object to use for requests. The object may bound parameters used by the presigner.
     */
    client: PollyClient;
    /**
     * The input to the synthesizedSpeechCommand
     */
    params: SynthesizeSpeechInput;
    /**
     * Optional configuration of getPresignedUrl
     */
    options?: PresignedPollyOptions;
}
export declare const getSynthesizeSpeechUrl: (input: PresignedPollyInput) => Promise<String>;
