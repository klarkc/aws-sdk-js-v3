import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "../commands/BatchGetNamedQueryCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "../commands/BatchGetQueryExecutionCommand";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "../commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "../commands/CreateNamedQueryCommand";
import {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "../commands/CreatePreparedStatementCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "../commands/CreateWorkGroupCommand";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "../commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "../commands/DeleteNamedQueryCommand";
import {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "../commands/DeletePreparedStatementCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "../commands/DeleteWorkGroupCommand";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "../commands/GetDataCatalogCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "../commands/GetDatabaseCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "../commands/GetNamedQueryCommand";
import {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "../commands/GetPreparedStatementCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "../commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "../commands/GetTableMetadataCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "../commands/GetWorkGroupCommand";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "../commands/ListDataCatalogsCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "../commands/ListEngineVersionsCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "../commands/ListNamedQueriesCommand";
import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "../commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "../commands/ListQueryExecutionsCommand";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "../commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "../commands/ListWorkGroupsCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "../commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "../commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "../commands/UpdateDataCatalogCommand";
import {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "../commands/UpdatePreparedStatementCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "../commands/UpdateWorkGroupCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1BatchGetNamedQueryCommand: (
  input: BatchGetNamedQueryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchGetQueryExecutionCommand: (
  input: BatchGetQueryExecutionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateDataCatalogCommand: (
  input: CreateDataCatalogCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateNamedQueryCommand: (
  input: CreateNamedQueryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreatePreparedStatementCommand: (
  input: CreatePreparedStatementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateWorkGroupCommand: (
  input: CreateWorkGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteDataCatalogCommand: (
  input: DeleteDataCatalogCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteNamedQueryCommand: (
  input: DeleteNamedQueryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeletePreparedStatementCommand: (
  input: DeletePreparedStatementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteWorkGroupCommand: (
  input: DeleteWorkGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDatabaseCommand: (
  input: GetDatabaseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDataCatalogCommand: (
  input: GetDataCatalogCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetNamedQueryCommand: (
  input: GetNamedQueryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetPreparedStatementCommand: (
  input: GetPreparedStatementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetQueryExecutionCommand: (
  input: GetQueryExecutionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetQueryResultsCommand: (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetTableMetadataCommand: (
  input: GetTableMetadataCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetWorkGroupCommand: (
  input: GetWorkGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListDatabasesCommand: (
  input: ListDatabasesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListDataCatalogsCommand: (
  input: ListDataCatalogsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListEngineVersionsCommand: (
  input: ListEngineVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListNamedQueriesCommand: (
  input: ListNamedQueriesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListPreparedStatementsCommand: (
  input: ListPreparedStatementsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListQueryExecutionsCommand: (
  input: ListQueryExecutionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTableMetadataCommand: (
  input: ListTableMetadataCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListWorkGroupsCommand: (
  input: ListWorkGroupsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartQueryExecutionCommand: (
  input: StartQueryExecutionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StopQueryExecutionCommand: (
  input: StopQueryExecutionCommandInput,
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
export declare const serializeAws_json1_1UpdateDataCatalogCommand: (
  input: UpdateDataCatalogCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdatePreparedStatementCommand: (
  input: UpdatePreparedStatementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateWorkGroupCommand: (
  input: UpdateWorkGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1BatchGetNamedQueryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchGetNamedQueryCommandOutput>;
export declare const deserializeAws_json1_1BatchGetQueryExecutionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchGetQueryExecutionCommandOutput>;
export declare const deserializeAws_json1_1CreateDataCatalogCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDataCatalogCommandOutput>;
export declare const deserializeAws_json1_1CreateNamedQueryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateNamedQueryCommandOutput>;
export declare const deserializeAws_json1_1CreatePreparedStatementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreatePreparedStatementCommandOutput>;
export declare const deserializeAws_json1_1CreateWorkGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateWorkGroupCommandOutput>;
export declare const deserializeAws_json1_1DeleteDataCatalogCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDataCatalogCommandOutput>;
export declare const deserializeAws_json1_1DeleteNamedQueryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteNamedQueryCommandOutput>;
export declare const deserializeAws_json1_1DeletePreparedStatementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeletePreparedStatementCommandOutput>;
export declare const deserializeAws_json1_1DeleteWorkGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteWorkGroupCommandOutput>;
export declare const deserializeAws_json1_1GetDatabaseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDatabaseCommandOutput>;
export declare const deserializeAws_json1_1GetDataCatalogCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDataCatalogCommandOutput>;
export declare const deserializeAws_json1_1GetNamedQueryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetNamedQueryCommandOutput>;
export declare const deserializeAws_json1_1GetPreparedStatementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetPreparedStatementCommandOutput>;
export declare const deserializeAws_json1_1GetQueryExecutionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetQueryExecutionCommandOutput>;
export declare const deserializeAws_json1_1GetQueryResultsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetQueryResultsCommandOutput>;
export declare const deserializeAws_json1_1GetTableMetadataCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTableMetadataCommandOutput>;
export declare const deserializeAws_json1_1GetWorkGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetWorkGroupCommandOutput>;
export declare const deserializeAws_json1_1ListDatabasesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDatabasesCommandOutput>;
export declare const deserializeAws_json1_1ListDataCatalogsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDataCatalogsCommandOutput>;
export declare const deserializeAws_json1_1ListEngineVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListEngineVersionsCommandOutput>;
export declare const deserializeAws_json1_1ListNamedQueriesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListNamedQueriesCommandOutput>;
export declare const deserializeAws_json1_1ListPreparedStatementsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPreparedStatementsCommandOutput>;
export declare const deserializeAws_json1_1ListQueryExecutionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListQueryExecutionsCommandOutput>;
export declare const deserializeAws_json1_1ListTableMetadataCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTableMetadataCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1ListWorkGroupsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListWorkGroupsCommandOutput>;
export declare const deserializeAws_json1_1StartQueryExecutionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartQueryExecutionCommandOutput>;
export declare const deserializeAws_json1_1StopQueryExecutionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopQueryExecutionCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateDataCatalogCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDataCatalogCommandOutput>;
export declare const deserializeAws_json1_1UpdatePreparedStatementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdatePreparedStatementCommandOutput>;
export declare const deserializeAws_json1_1UpdateWorkGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateWorkGroupCommandOutput>;
