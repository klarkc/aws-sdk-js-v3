import { CreateApiCacheCommandInput, CreateApiCacheCommandOutput } from "../commands/CreateApiCacheCommand";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "../commands/CreateApiKeyCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "../commands/CreateGraphqlApiCommand";
import { CreateResolverCommandInput, CreateResolverCommandOutput } from "../commands/CreateResolverCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "../commands/CreateTypeCommand";
import { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "../commands/DeleteApiCacheCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "../commands/DeleteApiKeyCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "../commands/DeleteFunctionCommand";
import { DeleteGraphqlApiCommandInput, DeleteGraphqlApiCommandOutput } from "../commands/DeleteGraphqlApiCommand";
import { DeleteResolverCommandInput, DeleteResolverCommandOutput } from "../commands/DeleteResolverCommand";
import { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "../commands/DeleteTypeCommand";
import { FlushApiCacheCommandInput, FlushApiCacheCommandOutput } from "../commands/FlushApiCacheCommand";
import { GetApiCacheCommandInput, GetApiCacheCommandOutput } from "../commands/GetApiCacheCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "../commands/GetFunctionCommand";
import { GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput } from "../commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "../commands/GetIntrospectionSchemaCommand";
import { GetResolverCommandInput, GetResolverCommandOutput } from "../commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "../commands/GetSchemaCreationStatusCommand";
import { GetTypeCommandInput, GetTypeCommandOutput } from "../commands/GetTypeCommand";
import { ListApiKeysCommandInput, ListApiKeysCommandOutput } from "../commands/ListApiKeysCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import { ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput } from "../commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "../commands/ListResolversByFunctionCommand";
import { ListResolversCommandInput, ListResolversCommandOutput } from "../commands/ListResolversCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "../commands/StartSchemaCreationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "../commands/UpdateApiCacheCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "../commands/UpdateApiKeyCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "../commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "../commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "../commands/UpdateResolverCommand";
import { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "../commands/UpdateTypeCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateApiCacheCommand: (
  input: CreateApiCacheCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateApiKeyCommand: (
  input: CreateApiKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDataSourceCommand: (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateFunctionCommand: (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateGraphqlApiCommand: (
  input: CreateGraphqlApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateResolverCommand: (
  input: CreateResolverCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateTypeCommand: (
  input: CreateTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteApiCacheCommand: (
  input: DeleteApiCacheCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteApiKeyCommand: (
  input: DeleteApiKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDataSourceCommand: (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteFunctionCommand: (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteGraphqlApiCommand: (
  input: DeleteGraphqlApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteResolverCommand: (
  input: DeleteResolverCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteTypeCommand: (
  input: DeleteTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1FlushApiCacheCommand: (
  input: FlushApiCacheCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetApiCacheCommand: (
  input: GetApiCacheCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDataSourceCommand: (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetFunctionCommand: (
  input: GetFunctionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetGraphqlApiCommand: (
  input: GetGraphqlApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetIntrospectionSchemaCommand: (
  input: GetIntrospectionSchemaCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetResolverCommand: (
  input: GetResolverCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSchemaCreationStatusCommand: (
  input: GetSchemaCreationStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetTypeCommand: (
  input: GetTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListApiKeysCommand: (
  input: ListApiKeysCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDataSourcesCommand: (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListFunctionsCommand: (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListGraphqlApisCommand: (
  input: ListGraphqlApisCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListResolversCommand: (
  input: ListResolversCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListResolversByFunctionCommand: (
  input: ListResolversByFunctionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTypesCommand: (
  input: ListTypesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartSchemaCreationCommand: (
  input: StartSchemaCreationCommandInput,
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
export declare const serializeAws_restJson1UpdateApiCacheCommand: (
  input: UpdateApiCacheCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateApiKeyCommand: (
  input: UpdateApiKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDataSourceCommand: (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateFunctionCommand: (
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateGraphqlApiCommand: (
  input: UpdateGraphqlApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateResolverCommand: (
  input: UpdateResolverCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateTypeCommand: (
  input: UpdateTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateApiCacheCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApiCacheCommandOutput>;
export declare const deserializeAws_restJson1CreateApiKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApiKeyCommandOutput>;
export declare const deserializeAws_restJson1CreateDataSourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDataSourceCommandOutput>;
export declare const deserializeAws_restJson1CreateFunctionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateFunctionCommandOutput>;
export declare const deserializeAws_restJson1CreateGraphqlApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateGraphqlApiCommandOutput>;
export declare const deserializeAws_restJson1CreateResolverCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateResolverCommandOutput>;
export declare const deserializeAws_restJson1CreateTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTypeCommandOutput>;
export declare const deserializeAws_restJson1DeleteApiCacheCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApiCacheCommandOutput>;
export declare const deserializeAws_restJson1DeleteApiKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApiKeyCommandOutput>;
export declare const deserializeAws_restJson1DeleteDataSourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDataSourceCommandOutput>;
export declare const deserializeAws_restJson1DeleteFunctionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteFunctionCommandOutput>;
export declare const deserializeAws_restJson1DeleteGraphqlApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteGraphqlApiCommandOutput>;
export declare const deserializeAws_restJson1DeleteResolverCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteResolverCommandOutput>;
export declare const deserializeAws_restJson1DeleteTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteTypeCommandOutput>;
export declare const deserializeAws_restJson1FlushApiCacheCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<FlushApiCacheCommandOutput>;
export declare const deserializeAws_restJson1GetApiCacheCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetApiCacheCommandOutput>;
export declare const deserializeAws_restJson1GetDataSourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDataSourceCommandOutput>;
export declare const deserializeAws_restJson1GetFunctionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetFunctionCommandOutput>;
export declare const deserializeAws_restJson1GetGraphqlApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGraphqlApiCommandOutput>;
export declare const deserializeAws_restJson1GetIntrospectionSchemaCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIntrospectionSchemaCommandOutput>;
export declare const deserializeAws_restJson1GetResolverCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetResolverCommandOutput>;
export declare const deserializeAws_restJson1GetSchemaCreationStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSchemaCreationStatusCommandOutput>;
export declare const deserializeAws_restJson1GetTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTypeCommandOutput>;
export declare const deserializeAws_restJson1ListApiKeysCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListApiKeysCommandOutput>;
export declare const deserializeAws_restJson1ListDataSourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDataSourcesCommandOutput>;
export declare const deserializeAws_restJson1ListFunctionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListFunctionsCommandOutput>;
export declare const deserializeAws_restJson1ListGraphqlApisCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGraphqlApisCommandOutput>;
export declare const deserializeAws_restJson1ListResolversCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListResolversCommandOutput>;
export declare const deserializeAws_restJson1ListResolversByFunctionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListResolversByFunctionCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1ListTypesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTypesCommandOutput>;
export declare const deserializeAws_restJson1StartSchemaCreationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartSchemaCreationCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateApiCacheCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApiCacheCommandOutput>;
export declare const deserializeAws_restJson1UpdateApiKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApiKeyCommandOutput>;
export declare const deserializeAws_restJson1UpdateDataSourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDataSourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateFunctionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateFunctionCommandOutput>;
export declare const deserializeAws_restJson1UpdateGraphqlApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGraphqlApiCommandOutput>;
export declare const deserializeAws_restJson1UpdateResolverCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateResolverCommandOutput>;
export declare const deserializeAws_restJson1UpdateTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateTypeCommandOutput>;
