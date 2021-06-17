import { CreateExperimentTemplateCommandInput, CreateExperimentTemplateCommandOutput } from "../commands/CreateExperimentTemplateCommand";
import { DeleteExperimentTemplateCommandInput, DeleteExperimentTemplateCommandOutput } from "../commands/DeleteExperimentTemplateCommand";
import { GetActionCommandInput, GetActionCommandOutput } from "../commands/GetActionCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "../commands/GetExperimentCommand";
import { GetExperimentTemplateCommandInput, GetExperimentTemplateCommandOutput } from "../commands/GetExperimentTemplateCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { ListExperimentTemplatesCommandInput, ListExperimentTemplatesCommandOutput } from "../commands/ListExperimentTemplatesCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { StartExperimentCommandInput, StartExperimentCommandOutput } from "../commands/StartExperimentCommand";
import { StopExperimentCommandInput, StopExperimentCommandOutput } from "../commands/StopExperimentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateExperimentTemplateCommandInput, UpdateExperimentTemplateCommandOutput } from "../commands/UpdateExperimentTemplateCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateExperimentTemplateCommand: (input: CreateExperimentTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteExperimentTemplateCommand: (input: DeleteExperimentTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetActionCommand: (input: GetActionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetExperimentCommand: (input: GetExperimentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetExperimentTemplateCommand: (input: GetExperimentTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListActionsCommand: (input: ListActionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListExperimentsCommand: (input: ListExperimentsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListExperimentTemplatesCommand: (input: ListExperimentTemplatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartExperimentCommand: (input: StartExperimentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StopExperimentCommand: (input: StopExperimentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateExperimentTemplateCommand: (input: UpdateExperimentTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateExperimentTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateExperimentTemplateCommandOutput>;
export declare const deserializeAws_restJson1DeleteExperimentTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteExperimentTemplateCommandOutput>;
export declare const deserializeAws_restJson1GetActionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetActionCommandOutput>;
export declare const deserializeAws_restJson1GetExperimentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetExperimentCommandOutput>;
export declare const deserializeAws_restJson1GetExperimentTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetExperimentTemplateCommandOutput>;
export declare const deserializeAws_restJson1ListActionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListActionsCommandOutput>;
export declare const deserializeAws_restJson1ListExperimentsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListExperimentsCommandOutput>;
export declare const deserializeAws_restJson1ListExperimentTemplatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListExperimentTemplatesCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1StartExperimentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartExperimentCommandOutput>;
export declare const deserializeAws_restJson1StopExperimentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopExperimentCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateExperimentTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateExperimentTemplateCommandOutput>;
