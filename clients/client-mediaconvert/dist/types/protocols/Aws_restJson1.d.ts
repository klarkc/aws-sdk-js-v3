import { AssociateCertificateCommandInput, AssociateCertificateCommandOutput } from "../commands/AssociateCertificateCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "../commands/CreateJobTemplateCommand";
import { CreatePresetCommandInput, CreatePresetCommandOutput } from "../commands/CreatePresetCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "../commands/CreateQueueCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "../commands/DeleteJobTemplateCommand";
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "../commands/DeletePresetCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput } from "../commands/DisassociateCertificateCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetJobTemplateCommandInput, GetJobTemplateCommandOutput } from "../commands/GetJobTemplateCommand";
import { GetPresetCommandInput, GetPresetCommandOutput } from "../commands/GetPresetCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "../commands/GetQueueCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateJobTemplateCommandInput, UpdateJobTemplateCommandOutput } from "../commands/UpdateJobTemplateCommand";
import { UpdatePresetCommandInput, UpdatePresetCommandOutput } from "../commands/UpdatePresetCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "../commands/UpdateQueueCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AssociateCertificateCommand: (input: AssociateCertificateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CancelJobCommand: (input: CancelJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateJobCommand: (input: CreateJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateJobTemplateCommand: (input: CreateJobTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreatePresetCommand: (input: CreatePresetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateQueueCommand: (input: CreateQueueCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteJobTemplateCommand: (input: DeleteJobTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeletePresetCommand: (input: DeletePresetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteQueueCommand: (input: DeleteQueueCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeEndpointsCommand: (input: DescribeEndpointsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateCertificateCommand: (input: DisassociateCertificateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetJobCommand: (input: GetJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetJobTemplateCommand: (input: GetJobTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetPresetCommand: (input: GetPresetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetQueueCommand: (input: GetQueueCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJobsCommand: (input: ListJobsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJobTemplatesCommand: (input: ListJobTemplatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListPresetsCommand: (input: ListPresetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListQueuesCommand: (input: ListQueuesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateJobTemplateCommand: (input: UpdateJobTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdatePresetCommand: (input: UpdatePresetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateQueueCommand: (input: UpdateQueueCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AssociateCertificateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateCertificateCommandOutput>;
export declare const deserializeAws_restJson1CancelJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CancelJobCommandOutput>;
export declare const deserializeAws_restJson1CreateJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateJobCommandOutput>;
export declare const deserializeAws_restJson1CreateJobTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateJobTemplateCommandOutput>;
export declare const deserializeAws_restJson1CreatePresetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePresetCommandOutput>;
export declare const deserializeAws_restJson1CreateQueueCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateQueueCommandOutput>;
export declare const deserializeAws_restJson1DeleteJobTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteJobTemplateCommandOutput>;
export declare const deserializeAws_restJson1DeletePresetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeletePresetCommandOutput>;
export declare const deserializeAws_restJson1DeleteQueueCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteQueueCommandOutput>;
export declare const deserializeAws_restJson1DescribeEndpointsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeEndpointsCommandOutput>;
export declare const deserializeAws_restJson1DisassociateCertificateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateCertificateCommandOutput>;
export declare const deserializeAws_restJson1GetJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetJobCommandOutput>;
export declare const deserializeAws_restJson1GetJobTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetJobTemplateCommandOutput>;
export declare const deserializeAws_restJson1GetPresetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPresetCommandOutput>;
export declare const deserializeAws_restJson1GetQueueCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetQueueCommandOutput>;
export declare const deserializeAws_restJson1ListJobsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListJobsCommandOutput>;
export declare const deserializeAws_restJson1ListJobTemplatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListJobTemplatesCommandOutput>;
export declare const deserializeAws_restJson1ListPresetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListPresetsCommandOutput>;
export declare const deserializeAws_restJson1ListQueuesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListQueuesCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateJobTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateJobTemplateCommandOutput>;
export declare const deserializeAws_restJson1UpdatePresetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdatePresetCommandOutput>;
export declare const deserializeAws_restJson1UpdateQueueCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateQueueCommandOutput>;
