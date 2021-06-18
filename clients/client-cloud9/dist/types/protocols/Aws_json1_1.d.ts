import {
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
} from "../commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
} from "../commands/CreateEnvironmentMembershipCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput,
} from "../commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "../commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
} from "../commands/DescribeEnvironmentStatusCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "../commands/DescribeEnvironmentsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
} from "../commands/UpdateEnvironmentMembershipCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CreateEnvironmentEC2Command: (
  input: CreateEnvironmentEC2CommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateEnvironmentMembershipCommand: (
  input: CreateEnvironmentMembershipCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteEnvironmentCommand: (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteEnvironmentMembershipCommand: (
  input: DeleteEnvironmentMembershipCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeEnvironmentMembershipsCommand: (
  input: DescribeEnvironmentMembershipsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeEnvironmentsCommand: (
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeEnvironmentStatusCommand: (
  input: DescribeEnvironmentStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListEnvironmentsCommand: (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateEnvironmentCommand: (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateEnvironmentMembershipCommand: (
  input: UpdateEnvironmentMembershipCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateEnvironmentEC2Command: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateEnvironmentEC2CommandOutput>;
export declare const deserializeAws_json1_1CreateEnvironmentMembershipCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateEnvironmentMembershipCommandOutput>;
export declare const deserializeAws_json1_1DeleteEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteEnvironmentCommandOutput>;
export declare const deserializeAws_json1_1DeleteEnvironmentMembershipCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteEnvironmentMembershipCommandOutput>;
export declare const deserializeAws_json1_1DescribeEnvironmentMembershipsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeEnvironmentMembershipsCommandOutput>;
export declare const deserializeAws_json1_1DescribeEnvironmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeEnvironmentsCommandOutput>;
export declare const deserializeAws_json1_1DescribeEnvironmentStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeEnvironmentStatusCommandOutput>;
export declare const deserializeAws_json1_1ListEnvironmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListEnvironmentsCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateEnvironmentCommandOutput>;
export declare const deserializeAws_json1_1UpdateEnvironmentMembershipCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateEnvironmentMembershipCommandOutput>;
