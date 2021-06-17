import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput } from "../commands/AnalyzeDocumentCommand";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput } from "../commands/DetectDocumentTextCommand";
import { GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput } from "../commands/GetDocumentAnalysisCommand";
import { GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput } from "../commands/GetDocumentTextDetectionCommand";
import { StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput } from "../commands/StartDocumentAnalysisCommand";
import { StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput } from "../commands/StartDocumentTextDetectionCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AnalyzeDocumentCommand: (input: AnalyzeDocumentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DetectDocumentTextCommand: (input: DetectDocumentTextCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDocumentAnalysisCommand: (input: GetDocumentAnalysisCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDocumentTextDetectionCommand: (input: GetDocumentTextDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartDocumentAnalysisCommand: (input: StartDocumentAnalysisCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartDocumentTextDetectionCommand: (input: StartDocumentTextDetectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AnalyzeDocumentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AnalyzeDocumentCommandOutput>;
export declare const deserializeAws_json1_1DetectDocumentTextCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DetectDocumentTextCommandOutput>;
export declare const deserializeAws_json1_1GetDocumentAnalysisCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDocumentAnalysisCommandOutput>;
export declare const deserializeAws_json1_1GetDocumentTextDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDocumentTextDetectionCommandOutput>;
export declare const deserializeAws_json1_1StartDocumentAnalysisCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartDocumentAnalysisCommandOutput>;
export declare const deserializeAws_json1_1StartDocumentTextDetectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartDocumentTextDetectionCommandOutput>;
