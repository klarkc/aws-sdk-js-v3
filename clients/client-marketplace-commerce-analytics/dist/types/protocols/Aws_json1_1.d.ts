import { GenerateDataSetCommandInput, GenerateDataSetCommandOutput } from "../commands/GenerateDataSetCommand";
import { StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput } from "../commands/StartSupportDataExportCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1GenerateDataSetCommand: (input: GenerateDataSetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartSupportDataExportCommand: (input: StartSupportDataExportCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1GenerateDataSetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GenerateDataSetCommandOutput>;
export declare const deserializeAws_json1_1StartSupportDataExportCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartSupportDataExportCommandOutput>;
