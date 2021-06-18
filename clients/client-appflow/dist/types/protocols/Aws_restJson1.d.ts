import {
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "../commands/CreateConnectorProfileCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "../commands/CreateFlowCommand";
import {
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "../commands/DeleteConnectorProfileCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "../commands/DeleteFlowCommand";
import {
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "../commands/DescribeConnectorEntityCommand";
import {
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "../commands/DescribeConnectorProfilesCommand";
import { DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput } from "../commands/DescribeConnectorsCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "../commands/DescribeFlowCommand";
import {
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "../commands/DescribeFlowExecutionRecordsCommand";
import {
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "../commands/ListConnectorEntitiesCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "../commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "../commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "../commands/UpdateConnectorProfileCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "../commands/UpdateFlowCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateConnectorProfileCommand: (
  input: CreateConnectorProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateFlowCommand: (
  input: CreateFlowCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteConnectorProfileCommand: (
  input: DeleteConnectorProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteFlowCommand: (
  input: DeleteFlowCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeConnectorEntityCommand: (
  input: DescribeConnectorEntityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeConnectorProfilesCommand: (
  input: DescribeConnectorProfilesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeConnectorsCommand: (
  input: DescribeConnectorsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeFlowCommand: (
  input: DescribeFlowCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeFlowExecutionRecordsCommand: (
  input: DescribeFlowExecutionRecordsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListConnectorEntitiesCommand: (
  input: ListConnectorEntitiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListFlowsCommand: (
  input: ListFlowsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartFlowCommand: (
  input: StartFlowCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StopFlowCommand: (
  input: StopFlowCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateConnectorProfileCommand: (
  input: UpdateConnectorProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateFlowCommand: (
  input: UpdateFlowCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateConnectorProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateConnectorProfileCommandOutput>;
export declare const deserializeAws_restJson1CreateFlowCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateFlowCommandOutput>;
export declare const deserializeAws_restJson1DeleteConnectorProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteConnectorProfileCommandOutput>;
export declare const deserializeAws_restJson1DeleteFlowCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteFlowCommandOutput>;
export declare const deserializeAws_restJson1DescribeConnectorEntityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeConnectorEntityCommandOutput>;
export declare const deserializeAws_restJson1DescribeConnectorProfilesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeConnectorProfilesCommandOutput>;
export declare const deserializeAws_restJson1DescribeConnectorsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeConnectorsCommandOutput>;
export declare const deserializeAws_restJson1DescribeFlowCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeFlowCommandOutput>;
export declare const deserializeAws_restJson1DescribeFlowExecutionRecordsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeFlowExecutionRecordsCommandOutput>;
export declare const deserializeAws_restJson1ListConnectorEntitiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListConnectorEntitiesCommandOutput>;
export declare const deserializeAws_restJson1ListFlowsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListFlowsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1StartFlowCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartFlowCommandOutput>;
export declare const deserializeAws_restJson1StopFlowCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopFlowCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateConnectorProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateConnectorProfileCommandOutput>;
export declare const deserializeAws_restJson1UpdateFlowCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateFlowCommandOutput>;
