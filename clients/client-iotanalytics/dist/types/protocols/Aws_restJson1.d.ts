import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "../commands/BatchPutMessageCommand";
import { CancelPipelineReprocessingCommandInput, CancelPipelineReprocessingCommandOutput } from "../commands/CancelPipelineReprocessingCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateDatasetContentCommandInput, CreateDatasetContentCommandOutput } from "../commands/CreateDatasetContentCommand";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "../commands/CreateDatastoreCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteDatasetContentCommandInput, DeleteDatasetContentCommandOutput } from "../commands/DeleteDatasetContentCommand";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "../commands/DeleteDatastoreCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput } from "../commands/DescribeDatastoreCommand";
import { DescribeLoggingOptionsCommandInput, DescribeLoggingOptionsCommandOutput } from "../commands/DescribeLoggingOptionsCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "../commands/DescribePipelineCommand";
import { GetDatasetContentCommandInput, GetDatasetContentCommandOutput } from "../commands/GetDatasetContentCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListDatasetContentsCommandInput, ListDatasetContentsCommandOutput } from "../commands/ListDatasetContentsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "../commands/ListDatastoresCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "../commands/PutLoggingOptionsCommand";
import { RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput } from "../commands/RunPipelineActivityCommand";
import { SampleChannelDataCommandInput, SampleChannelDataCommandOutput } from "../commands/SampleChannelDataCommand";
import { StartPipelineReprocessingCommandInput, StartPipelineReprocessingCommandOutput } from "../commands/StartPipelineReprocessingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import { UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput } from "../commands/UpdateDatastoreCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1BatchPutMessageCommand: (input: BatchPutMessageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CancelPipelineReprocessingCommand: (input: CancelPipelineReprocessingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateChannelCommand: (input: CreateChannelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDatasetCommand: (input: CreateDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDatasetContentCommand: (input: CreateDatasetContentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDatastoreCommand: (input: CreateDatastoreCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreatePipelineCommand: (input: CreatePipelineCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteChannelCommand: (input: DeleteChannelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDatasetCommand: (input: DeleteDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDatasetContentCommand: (input: DeleteDatasetContentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDatastoreCommand: (input: DeleteDatastoreCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeletePipelineCommand: (input: DeletePipelineCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeChannelCommand: (input: DescribeChannelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeDatasetCommand: (input: DescribeDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeDatastoreCommand: (input: DescribeDatastoreCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeLoggingOptionsCommand: (input: DescribeLoggingOptionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribePipelineCommand: (input: DescribePipelineCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDatasetContentCommand: (input: GetDatasetContentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListChannelsCommand: (input: ListChannelsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDatasetContentsCommand: (input: ListDatasetContentsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDatasetsCommand: (input: ListDatasetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDatastoresCommand: (input: ListDatastoresCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListPipelinesCommand: (input: ListPipelinesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutLoggingOptionsCommand: (input: PutLoggingOptionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RunPipelineActivityCommand: (input: RunPipelineActivityCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SampleChannelDataCommand: (input: SampleChannelDataCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartPipelineReprocessingCommand: (input: StartPipelineReprocessingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateChannelCommand: (input: UpdateChannelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDatasetCommand: (input: UpdateDatasetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDatastoreCommand: (input: UpdateDatastoreCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdatePipelineCommand: (input: UpdatePipelineCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1BatchPutMessageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchPutMessageCommandOutput>;
export declare const deserializeAws_restJson1CancelPipelineReprocessingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CancelPipelineReprocessingCommandOutput>;
export declare const deserializeAws_restJson1CreateChannelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateChannelCommandOutput>;
export declare const deserializeAws_restJson1CreateDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateDatasetCommandOutput>;
export declare const deserializeAws_restJson1CreateDatasetContentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateDatasetContentCommandOutput>;
export declare const deserializeAws_restJson1CreateDatastoreCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateDatastoreCommandOutput>;
export declare const deserializeAws_restJson1CreatePipelineCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePipelineCommandOutput>;
export declare const deserializeAws_restJson1DeleteChannelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteChannelCommandOutput>;
export declare const deserializeAws_restJson1DeleteDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDatasetCommandOutput>;
export declare const deserializeAws_restJson1DeleteDatasetContentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDatasetContentCommandOutput>;
export declare const deserializeAws_restJson1DeleteDatastoreCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDatastoreCommandOutput>;
export declare const deserializeAws_restJson1DeletePipelineCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeletePipelineCommandOutput>;
export declare const deserializeAws_restJson1DescribeChannelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeChannelCommandOutput>;
export declare const deserializeAws_restJson1DescribeDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeDatasetCommandOutput>;
export declare const deserializeAws_restJson1DescribeDatastoreCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeDatastoreCommandOutput>;
export declare const deserializeAws_restJson1DescribeLoggingOptionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLoggingOptionsCommandOutput>;
export declare const deserializeAws_restJson1DescribePipelineCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribePipelineCommandOutput>;
export declare const deserializeAws_restJson1GetDatasetContentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDatasetContentCommandOutput>;
export declare const deserializeAws_restJson1ListChannelsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListChannelsCommandOutput>;
export declare const deserializeAws_restJson1ListDatasetContentsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDatasetContentsCommandOutput>;
export declare const deserializeAws_restJson1ListDatasetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDatasetsCommandOutput>;
export declare const deserializeAws_restJson1ListDatastoresCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDatastoresCommandOutput>;
export declare const deserializeAws_restJson1ListPipelinesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListPipelinesCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1PutLoggingOptionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutLoggingOptionsCommandOutput>;
export declare const deserializeAws_restJson1RunPipelineActivityCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RunPipelineActivityCommandOutput>;
export declare const deserializeAws_restJson1SampleChannelDataCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SampleChannelDataCommandOutput>;
export declare const deserializeAws_restJson1StartPipelineReprocessingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartPipelineReprocessingCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateChannelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateChannelCommandOutput>;
export declare const deserializeAws_restJson1UpdateDatasetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateDatasetCommandOutput>;
export declare const deserializeAws_restJson1UpdateDatastoreCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateDatastoreCommandOutput>;
export declare const deserializeAws_restJson1UpdatePipelineCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdatePipelineCommandOutput>;
