import {
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
} from "../commands/AssociateConfigurationItemsToApplicationCommand";
import {
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
} from "../commands/BatchDeleteImportDataCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput } from "../commands/DeleteApplicationsCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DescribeAgentsCommandInput, DescribeAgentsCommandOutput } from "../commands/DescribeAgentsCommand";
import {
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput,
} from "../commands/DescribeConfigurationsCommand";
import {
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "../commands/DescribeContinuousExportsCommand";
import {
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput,
} from "../commands/DescribeExportConfigurationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "../commands/DescribeImportTasksCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DisassociateConfigurationItemsFromApplicationCommandInput,
  DisassociateConfigurationItemsFromApplicationCommandOutput,
} from "../commands/DisassociateConfigurationItemsFromApplicationCommand";
import {
  ExportConfigurationsCommandInput,
  ExportConfigurationsCommandOutput,
} from "../commands/ExportConfigurationsCommand";
import {
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
} from "../commands/GetDiscoverySummaryCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "../commands/ListConfigurationsCommand";
import {
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
} from "../commands/ListServerNeighborsCommand";
import {
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
} from "../commands/StartContinuousExportCommand";
import {
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput,
} from "../commands/StartDataCollectionByAgentIdsCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "../commands/StartExportTaskCommand";
import { StartImportTaskCommandInput, StartImportTaskCommandOutput } from "../commands/StartImportTaskCommand";
import {
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput,
} from "../commands/StopContinuousExportCommand";
import {
  StopDataCollectionByAgentIdsCommandInput,
  StopDataCollectionByAgentIdsCommandOutput,
} from "../commands/StopDataCollectionByAgentIdsCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand: (
  input: AssociateConfigurationItemsToApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchDeleteImportDataCommand: (
  input: BatchDeleteImportDataCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateApplicationCommand: (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateTagsCommand: (
  input: CreateTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteApplicationsCommand: (
  input: DeleteApplicationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteTagsCommand: (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeAgentsCommand: (
  input: DescribeAgentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeConfigurationsCommand: (
  input: DescribeConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeContinuousExportsCommand: (
  input: DescribeContinuousExportsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeExportConfigurationsCommand: (
  input: DescribeExportConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeExportTasksCommand: (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeImportTasksCommand: (
  input: DescribeImportTasksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeTagsCommand: (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand: (
  input: DisassociateConfigurationItemsFromApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ExportConfigurationsCommand: (
  input: ExportConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDiscoverySummaryCommand: (
  input: GetDiscoverySummaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListConfigurationsCommand: (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListServerNeighborsCommand: (
  input: ListServerNeighborsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartContinuousExportCommand: (
  input: StartContinuousExportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartDataCollectionByAgentIdsCommand: (
  input: StartDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartExportTaskCommand: (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartImportTaskCommand: (
  input: StartImportTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopContinuousExportCommand: (
  input: StopContinuousExportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopDataCollectionByAgentIdsCommand: (
  input: StopDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateApplicationCommand: (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateConfigurationItemsToApplicationCommandOutput>;
export declare const deserializeAws_json1_1BatchDeleteImportDataCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchDeleteImportDataCommandOutput>;
export declare const deserializeAws_json1_1CreateApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApplicationCommandOutput>;
export declare const deserializeAws_json1_1CreateTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTagsCommandOutput>;
export declare const deserializeAws_json1_1DeleteApplicationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApplicationsCommandOutput>;
export declare const deserializeAws_json1_1DeleteTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteTagsCommandOutput>;
export declare const deserializeAws_json1_1DescribeAgentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeAgentsCommandOutput>;
export declare const deserializeAws_json1_1DescribeConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeConfigurationsCommandOutput>;
export declare const deserializeAws_json1_1DescribeContinuousExportsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeContinuousExportsCommandOutput>;
export declare const deserializeAws_json1_1DescribeExportConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeExportConfigurationsCommandOutput>;
export declare const deserializeAws_json1_1DescribeExportTasksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeExportTasksCommandOutput>;
export declare const deserializeAws_json1_1DescribeImportTasksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeImportTasksCommandOutput>;
export declare const deserializeAws_json1_1DescribeTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeTagsCommandOutput>;
export declare const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateConfigurationItemsFromApplicationCommandOutput>;
export declare const deserializeAws_json1_1ExportConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExportConfigurationsCommandOutput>;
export declare const deserializeAws_json1_1GetDiscoverySummaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDiscoverySummaryCommandOutput>;
export declare const deserializeAws_json1_1ListConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListConfigurationsCommandOutput>;
export declare const deserializeAws_json1_1ListServerNeighborsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListServerNeighborsCommandOutput>;
export declare const deserializeAws_json1_1StartContinuousExportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartContinuousExportCommandOutput>;
export declare const deserializeAws_json1_1StartDataCollectionByAgentIdsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDataCollectionByAgentIdsCommandOutput>;
export declare const deserializeAws_json1_1StartExportTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartExportTaskCommandOutput>;
export declare const deserializeAws_json1_1StartImportTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartImportTaskCommandOutput>;
export declare const deserializeAws_json1_1StopContinuousExportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopContinuousExportCommandOutput>;
export declare const deserializeAws_json1_1StopDataCollectionByAgentIdsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopDataCollectionByAgentIdsCommandOutput>;
export declare const deserializeAws_json1_1UpdateApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApplicationCommandOutput>;
