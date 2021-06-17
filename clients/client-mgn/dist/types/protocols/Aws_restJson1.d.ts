import { ChangeServerLifeCycleStateCommandInput, ChangeServerLifeCycleStateCommandOutput } from "../commands/ChangeServerLifeCycleStateCommand";
import { CreateReplicationConfigurationTemplateCommandInput, CreateReplicationConfigurationTemplateCommandOutput } from "../commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteReplicationConfigurationTemplateCommandInput, DeleteReplicationConfigurationTemplateCommandOutput } from "../commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "../commands/DeleteSourceServerCommand";
import { DescribeJobLogItemsCommandInput, DescribeJobLogItemsCommandOutput } from "../commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import { DescribeReplicationConfigurationTemplatesCommandInput, DescribeReplicationConfigurationTemplatesCommandOutput } from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import { DescribeSourceServersCommandInput, DescribeSourceServersCommandOutput } from "../commands/DescribeSourceServersCommand";
import { DisconnectFromServiceCommandInput, DisconnectFromServiceCommandOutput } from "../commands/DisconnectFromServiceCommand";
import { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "../commands/FinalizeCutoverCommand";
import { GetLaunchConfigurationCommandInput, GetLaunchConfigurationCommandOutput } from "../commands/GetLaunchConfigurationCommand";
import { GetReplicationConfigurationCommandInput, GetReplicationConfigurationCommandOutput } from "../commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "../commands/MarkAsArchivedCommand";
import { RetryDataReplicationCommandInput, RetryDataReplicationCommandOutput } from "../commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "../commands/StartCutoverCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "../commands/StartTestCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TerminateTargetInstancesCommandInput, TerminateTargetInstancesCommandOutput } from "../commands/TerminateTargetInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLaunchConfigurationCommandInput, UpdateLaunchConfigurationCommandOutput } from "../commands/UpdateLaunchConfigurationCommand";
import { UpdateReplicationConfigurationCommandInput, UpdateReplicationConfigurationCommandOutput } from "../commands/UpdateReplicationConfigurationCommand";
import { UpdateReplicationConfigurationTemplateCommandInput, UpdateReplicationConfigurationTemplateCommandOutput } from "../commands/UpdateReplicationConfigurationTemplateCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1ChangeServerLifeCycleStateCommand: (input: ChangeServerLifeCycleStateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateReplicationConfigurationTemplateCommand: (input: CreateReplicationConfigurationTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteJobCommand: (input: DeleteJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand: (input: DeleteReplicationConfigurationTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteSourceServerCommand: (input: DeleteSourceServerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJobLogItemsCommand: (input: DescribeJobLogItemsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJobsCommand: (input: DescribeJobsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand: (input: DescribeReplicationConfigurationTemplatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeSourceServersCommand: (input: DescribeSourceServersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisconnectFromServiceCommand: (input: DisconnectFromServiceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1FinalizeCutoverCommand: (input: FinalizeCutoverCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetLaunchConfigurationCommand: (input: GetLaunchConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetReplicationConfigurationCommand: (input: GetReplicationConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1InitializeServiceCommand: (input: InitializeServiceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1MarkAsArchivedCommand: (input: MarkAsArchivedCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RetryDataReplicationCommand: (input: RetryDataReplicationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartCutoverCommand: (input: StartCutoverCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartTestCommand: (input: StartTestCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TerminateTargetInstancesCommand: (input: TerminateTargetInstancesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateLaunchConfigurationCommand: (input: UpdateLaunchConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateReplicationConfigurationCommand: (input: UpdateReplicationConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand: (input: UpdateReplicationConfigurationTemplateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1ChangeServerLifeCycleStateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ChangeServerLifeCycleStateCommandOutput>;
export declare const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateReplicationConfigurationTemplateCommandOutput>;
export declare const deserializeAws_restJson1DeleteJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteJobCommandOutput>;
export declare const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteReplicationConfigurationTemplateCommandOutput>;
export declare const deserializeAws_restJson1DeleteSourceServerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteSourceServerCommandOutput>;
export declare const deserializeAws_restJson1DescribeJobLogItemsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeJobLogItemsCommandOutput>;
export declare const deserializeAws_restJson1DescribeJobsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeJobsCommandOutput>;
export declare const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
export declare const deserializeAws_restJson1DescribeSourceServersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeSourceServersCommandOutput>;
export declare const deserializeAws_restJson1DisconnectFromServiceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisconnectFromServiceCommandOutput>;
export declare const deserializeAws_restJson1FinalizeCutoverCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<FinalizeCutoverCommandOutput>;
export declare const deserializeAws_restJson1GetLaunchConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLaunchConfigurationCommandOutput>;
export declare const deserializeAws_restJson1GetReplicationConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetReplicationConfigurationCommandOutput>;
export declare const deserializeAws_restJson1InitializeServiceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<InitializeServiceCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1MarkAsArchivedCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MarkAsArchivedCommandOutput>;
export declare const deserializeAws_restJson1RetryDataReplicationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RetryDataReplicationCommandOutput>;
export declare const deserializeAws_restJson1StartCutoverCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartCutoverCommandOutput>;
export declare const deserializeAws_restJson1StartTestCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartTestCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1TerminateTargetInstancesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TerminateTargetInstancesCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateLaunchConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLaunchConfigurationCommandOutput>;
export declare const deserializeAws_restJson1UpdateReplicationConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateReplicationConfigurationCommandOutput>;
export declare const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateReplicationConfigurationTemplateCommandOutput>;
