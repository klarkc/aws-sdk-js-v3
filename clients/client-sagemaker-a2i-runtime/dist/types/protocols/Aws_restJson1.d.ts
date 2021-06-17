import { DeleteHumanLoopCommandInput, DeleteHumanLoopCommandOutput } from "../commands/DeleteHumanLoopCommand";
import { DescribeHumanLoopCommandInput, DescribeHumanLoopCommandOutput } from "../commands/DescribeHumanLoopCommand";
import { ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput } from "../commands/ListHumanLoopsCommand";
import { StartHumanLoopCommandInput, StartHumanLoopCommandOutput } from "../commands/StartHumanLoopCommand";
import { StopHumanLoopCommandInput, StopHumanLoopCommandOutput } from "../commands/StopHumanLoopCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1DeleteHumanLoopCommand: (input: DeleteHumanLoopCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeHumanLoopCommand: (input: DescribeHumanLoopCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListHumanLoopsCommand: (input: ListHumanLoopsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartHumanLoopCommand: (input: StartHumanLoopCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StopHumanLoopCommand: (input: StopHumanLoopCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1DeleteHumanLoopCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteHumanLoopCommandOutput>;
export declare const deserializeAws_restJson1DescribeHumanLoopCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeHumanLoopCommandOutput>;
export declare const deserializeAws_restJson1ListHumanLoopsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListHumanLoopsCommandOutput>;
export declare const deserializeAws_restJson1StartHumanLoopCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartHumanLoopCommandOutput>;
export declare const deserializeAws_restJson1StopHumanLoopCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopHumanLoopCommandOutput>;
