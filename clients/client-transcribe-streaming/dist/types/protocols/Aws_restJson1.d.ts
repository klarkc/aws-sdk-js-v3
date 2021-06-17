import { StartMedicalStreamTranscriptionCommandInput, StartMedicalStreamTranscriptionCommandOutput } from "../commands/StartMedicalStreamTranscriptionCommand";
import { StartStreamTranscriptionCommandInput, StartStreamTranscriptionCommandOutput } from "../commands/StartStreamTranscriptionCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { EventStreamSerdeContext as __EventStreamSerdeContext, SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1StartMedicalStreamTranscriptionCommand: (input: StartMedicalStreamTranscriptionCommandInput, context: __SerdeContext & __EventStreamSerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartStreamTranscriptionCommand: (input: StartStreamTranscriptionCommandInput, context: __SerdeContext & __EventStreamSerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1StartMedicalStreamTranscriptionCommand: (output: __HttpResponse, context: __SerdeContext & __EventStreamSerdeContext) => Promise<StartMedicalStreamTranscriptionCommandOutput>;
export declare const deserializeAws_restJson1StartStreamTranscriptionCommand: (output: __HttpResponse, context: __SerdeContext & __EventStreamSerdeContext) => Promise<StartStreamTranscriptionCommandOutput>;
