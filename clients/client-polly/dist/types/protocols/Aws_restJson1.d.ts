import { DeleteLexiconCommandInput, DeleteLexiconCommandOutput } from "../commands/DeleteLexiconCommand";
import { DescribeVoicesCommandInput, DescribeVoicesCommandOutput } from "../commands/DescribeVoicesCommand";
import { GetLexiconCommandInput, GetLexiconCommandOutput } from "../commands/GetLexiconCommand";
import { GetSpeechSynthesisTaskCommandInput, GetSpeechSynthesisTaskCommandOutput } from "../commands/GetSpeechSynthesisTaskCommand";
import { ListLexiconsCommandInput, ListLexiconsCommandOutput } from "../commands/ListLexiconsCommand";
import { ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput } from "../commands/ListSpeechSynthesisTasksCommand";
import { PutLexiconCommandInput, PutLexiconCommandOutput } from "../commands/PutLexiconCommand";
import { StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput } from "../commands/StartSpeechSynthesisTaskCommand";
import { SynthesizeSpeechCommandInput, SynthesizeSpeechCommandOutput } from "../commands/SynthesizeSpeechCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1DeleteLexiconCommand: (input: DeleteLexiconCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeVoicesCommand: (input: DescribeVoicesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetLexiconCommand: (input: GetLexiconCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSpeechSynthesisTaskCommand: (input: GetSpeechSynthesisTaskCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListLexiconsCommand: (input: ListLexiconsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListSpeechSynthesisTasksCommand: (input: ListSpeechSynthesisTasksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutLexiconCommand: (input: PutLexiconCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartSpeechSynthesisTaskCommand: (input: StartSpeechSynthesisTaskCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SynthesizeSpeechCommand: (input: SynthesizeSpeechCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1DeleteLexiconCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLexiconCommandOutput>;
export declare const deserializeAws_restJson1DescribeVoicesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeVoicesCommandOutput>;
export declare const deserializeAws_restJson1GetLexiconCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLexiconCommandOutput>;
export declare const deserializeAws_restJson1GetSpeechSynthesisTaskCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSpeechSynthesisTaskCommandOutput>;
export declare const deserializeAws_restJson1ListLexiconsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLexiconsCommandOutput>;
export declare const deserializeAws_restJson1ListSpeechSynthesisTasksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListSpeechSynthesisTasksCommandOutput>;
export declare const deserializeAws_restJson1PutLexiconCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutLexiconCommandOutput>;
export declare const deserializeAws_restJson1StartSpeechSynthesisTaskCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartSpeechSynthesisTaskCommandOutput>;
export declare const deserializeAws_restJson1SynthesizeSpeechCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SynthesizeSpeechCommandOutput>;
