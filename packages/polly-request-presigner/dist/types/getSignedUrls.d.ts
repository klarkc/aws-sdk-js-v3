import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
export declare const getSignedUrl: (client: PollyClient, command: SynthesizeSpeechCommand, options?: any) => Promise<string>;
