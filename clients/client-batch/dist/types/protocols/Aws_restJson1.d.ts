import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "../commands/CreateComputeEnvironmentCommand";
import { CreateJobQueueCommandInput, CreateJobQueueCommandOutput } from "../commands/CreateJobQueueCommand";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "../commands/DeleteComputeEnvironmentCommand";
import { DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput } from "../commands/DeleteJobQueueCommand";
import {
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
} from "../commands/DeregisterJobDefinitionCommand";
import {
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "../commands/DescribeComputeEnvironmentsCommand";
import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "../commands/DescribeJobDefinitionsCommand";
import { DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput } from "../commands/DescribeJobQueuesCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "../commands/RegisterJobDefinitionCommand";
import { SubmitJobCommandInput, SubmitJobCommandOutput } from "../commands/SubmitJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TerminateJobCommandInput, TerminateJobCommandOutput } from "../commands/TerminateJobCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
} from "../commands/UpdateComputeEnvironmentCommand";
import { UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput } from "../commands/UpdateJobQueueCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CancelJobCommand: (
  input: CancelJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateComputeEnvironmentCommand: (
  input: CreateComputeEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateJobQueueCommand: (
  input: CreateJobQueueCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteComputeEnvironmentCommand: (
  input: DeleteComputeEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteJobQueueCommand: (
  input: DeleteJobQueueCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeregisterJobDefinitionCommand: (
  input: DeregisterJobDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeComputeEnvironmentsCommand: (
  input: DescribeComputeEnvironmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJobDefinitionsCommand: (
  input: DescribeJobDefinitionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJobQueuesCommand: (
  input: DescribeJobQueuesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJobsCommand: (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJobsCommand: (
  input: ListJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RegisterJobDefinitionCommand: (
  input: RegisterJobDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SubmitJobCommand: (
  input: SubmitJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TerminateJobCommand: (
  input: TerminateJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateComputeEnvironmentCommand: (
  input: UpdateComputeEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateJobQueueCommand: (
  input: UpdateJobQueueCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CancelJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CancelJobCommandOutput>;
export declare const deserializeAws_restJson1CreateComputeEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateComputeEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1CreateJobQueueCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateJobQueueCommandOutput>;
export declare const deserializeAws_restJson1DeleteComputeEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteComputeEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1DeleteJobQueueCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteJobQueueCommandOutput>;
export declare const deserializeAws_restJson1DeregisterJobDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeregisterJobDefinitionCommandOutput>;
export declare const deserializeAws_restJson1DescribeComputeEnvironmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeComputeEnvironmentsCommandOutput>;
export declare const deserializeAws_restJson1DescribeJobDefinitionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeJobDefinitionsCommandOutput>;
export declare const deserializeAws_restJson1DescribeJobQueuesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeJobQueuesCommandOutput>;
export declare const deserializeAws_restJson1DescribeJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeJobsCommandOutput>;
export declare const deserializeAws_restJson1ListJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListJobsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1RegisterJobDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterJobDefinitionCommandOutput>;
export declare const deserializeAws_restJson1SubmitJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SubmitJobCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1TerminateJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TerminateJobCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateComputeEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateComputeEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1UpdateJobQueueCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateJobQueueCommandOutput>;
