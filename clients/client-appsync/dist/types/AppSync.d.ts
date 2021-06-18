import { AppSyncClient } from "./AppSyncClient";
import { CreateApiCacheCommandInput, CreateApiCacheCommandOutput } from "./commands/CreateApiCacheCommand";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "./commands/CreateGraphqlApiCommand";
import { CreateResolverCommandInput, CreateResolverCommandOutput } from "./commands/CreateResolverCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "./commands/CreateTypeCommand";
import { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "./commands/DeleteApiCacheCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import { DeleteGraphqlApiCommandInput, DeleteGraphqlApiCommandOutput } from "./commands/DeleteGraphqlApiCommand";
import { DeleteResolverCommandInput, DeleteResolverCommandOutput } from "./commands/DeleteResolverCommand";
import { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "./commands/DeleteTypeCommand";
import { FlushApiCacheCommandInput, FlushApiCacheCommandOutput } from "./commands/FlushApiCacheCommand";
import { GetApiCacheCommandInput, GetApiCacheCommandOutput } from "./commands/GetApiCacheCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import { GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput } from "./commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "./commands/GetIntrospectionSchemaCommand";
import { GetResolverCommandInput, GetResolverCommandOutput } from "./commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "./commands/GetSchemaCreationStatusCommand";
import { GetTypeCommandInput, GetTypeCommandOutput } from "./commands/GetTypeCommand";
import { ListApiKeysCommandInput, ListApiKeysCommandOutput } from "./commands/ListApiKeysCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import { ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput } from "./commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "./commands/ListResolversByFunctionCommand";
import { ListResolversCommandInput, ListResolversCommandOutput } from "./commands/ListResolversCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "./commands/StartSchemaCreationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "./commands/UpdateApiCacheCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "./commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "./commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "./commands/UpdateResolverCommand";
import { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "./commands/UpdateTypeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS AppSync provides API actions for creating and interacting with data sources using
 *          GraphQL from your application.</p>
 */
export declare class AppSync extends AppSyncClient {
  /**
   * <p>Creates a cache for the GraphQL API.</p>
   */
  createApiCache(
    args: CreateApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiCacheCommandOutput>;
  createApiCache(args: CreateApiCacheCommandInput, cb: (err: any, data?: CreateApiCacheCommandOutput) => void): void;
  createApiCache(
    args: CreateApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): void;
  /**
   * <p>Creates a unique key that you can distribute to clients who are executing your
   *          API.</p>
   */
  createApiKey(args: CreateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiKeyCommandOutput>;
  createApiKey(args: CreateApiKeyCommandInput, cb: (err: any, data?: CreateApiKeyCommandOutput) => void): void;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <code>DataSource</code> object.</p>
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <code>Function</code> object.</p>
   *          <p>A function is a reusable entity. Multiple functions can be used to compose the resolver
   *          logic.</p>
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(args: CreateFunctionCommandInput, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <code>GraphqlApi</code> object.</p>
   */
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGraphqlApiCommandOutput>;
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <code>Resolver</code> object.</p>
   *          <p>A resolver converts incoming requests into a format that a data source can understand
   *          and converts the data source's responses into GraphQL.</p>
   */
  createResolver(
    args: CreateResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverCommandOutput>;
  createResolver(args: CreateResolverCommandInput, cb: (err: any, data?: CreateResolverCommandOutput) => void): void;
  createResolver(
    args: CreateResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <code>Type</code> object.</p>
   */
  createType(args: CreateTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateTypeCommandOutput>;
  createType(args: CreateTypeCommandInput, cb: (err: any, data?: CreateTypeCommandOutput) => void): void;
  createType(
    args: CreateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypeCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an <code>ApiCache</code> object.</p>
   */
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiCacheCommandOutput>;
  deleteApiCache(args: DeleteApiCacheCommandInput, cb: (err: any, data?: DeleteApiCacheCommandOutput) => void): void;
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an API key.</p>
   */
  deleteApiKey(args: DeleteApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiKeyCommandOutput>;
  deleteApiKey(args: DeleteApiKeyCommandInput, cb: (err: any, data?: DeleteApiKeyCommandOutput) => void): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <code>DataSource</code> object.</p>
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <code>Function</code>.</p>
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(args: DeleteFunctionCommandInput, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <code>GraphqlApi</code> object.</p>
   */
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGraphqlApiCommandOutput>;
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <code>Resolver</code> object.</p>
   */
  deleteResolver(
    args: DeleteResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverCommandOutput>;
  deleteResolver(args: DeleteResolverCommandInput, cb: (err: any, data?: DeleteResolverCommandOutput) => void): void;
  deleteResolver(
    args: DeleteResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <code>Type</code> object.</p>
   */
  deleteType(args: DeleteTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTypeCommandOutput>;
  deleteType(args: DeleteTypeCommandInput, cb: (err: any, data?: DeleteTypeCommandOutput) => void): void;
  deleteType(
    args: DeleteTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypeCommandOutput) => void
  ): void;
  /**
   * <p>Flushes an <code>ApiCache</code> object.</p>
   */
  flushApiCache(args: FlushApiCacheCommandInput, options?: __HttpHandlerOptions): Promise<FlushApiCacheCommandOutput>;
  flushApiCache(args: FlushApiCacheCommandInput, cb: (err: any, data?: FlushApiCacheCommandOutput) => void): void;
  flushApiCache(
    args: FlushApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves an <code>ApiCache</code> object.</p>
   */
  getApiCache(args: GetApiCacheCommandInput, options?: __HttpHandlerOptions): Promise<GetApiCacheCommandOutput>;
  getApiCache(args: GetApiCacheCommandInput, cb: (err: any, data?: GetApiCacheCommandOutput) => void): void;
  getApiCache(
    args: GetApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCacheCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a <code>DataSource</code> object.</p>
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  /**
   * <p>Get a <code>Function</code>.</p>
   */
  getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a <code>GraphqlApi</code> object.</p>
   */
  getGraphqlApi(args: GetGraphqlApiCommandInput, options?: __HttpHandlerOptions): Promise<GetGraphqlApiCommandOutput>;
  getGraphqlApi(args: GetGraphqlApiCommandInput, cb: (err: any, data?: GetGraphqlApiCommandOutput) => void): void;
  getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the introspection schema for a GraphQL API.</p>
   */
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntrospectionSchemaCommandOutput>;
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a <code>Resolver</code> object.</p>
   */
  getResolver(args: GetResolverCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverCommandOutput>;
  getResolver(args: GetResolverCommandInput, cb: (err: any, data?: GetResolverCommandOutput) => void): void;
  getResolver(
    args: GetResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the current status of a schema creation operation.</p>
   */
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaCreationStatusCommandOutput>;
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a <code>Type</code> object.</p>
   */
  getType(args: GetTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetTypeCommandOutput>;
  getType(args: GetTypeCommandInput, cb: (err: any, data?: GetTypeCommandOutput) => void): void;
  getType(
    args: GetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypeCommandOutput) => void
  ): void;
  /**
   * <p>Lists the API keys for a given API.</p>
   *          <note>
   *             <p>API keys are deleted automatically 60 days after they expire. However, they may
   *             still be included in the response until they have actually been deleted. You can safely
   *             call <code>DeleteApiKey</code> to manually delete a key before it's automatically
   *             deleted.</p>
   *          </note>
   */
  listApiKeys(args: ListApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListApiKeysCommandOutput>;
  listApiKeys(args: ListApiKeysCommandInput, cb: (err: any, data?: ListApiKeysCommandOutput) => void): void;
  listApiKeys(
    args: ListApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiKeysCommandOutput) => void
  ): void;
  /**
   * <p>Lists the data sources for a given API.</p>
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  /**
   * <p>List multiple functions.</p>
   */
  listFunctions(args: ListFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsCommandOutput>;
  listFunctions(args: ListFunctionsCommandInput, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  /**
   * <p>Lists your GraphQL APIs.</p>
   */
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGraphqlApisCommandOutput>;
  listGraphqlApis(args: ListGraphqlApisCommandInput, cb: (err: any, data?: ListGraphqlApisCommandOutput) => void): void;
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): void;
  /**
   * <p>Lists the resolvers for a given API and type.</p>
   */
  listResolvers(args: ListResolversCommandInput, options?: __HttpHandlerOptions): Promise<ListResolversCommandOutput>;
  listResolvers(args: ListResolversCommandInput, cb: (err: any, data?: ListResolversCommandOutput) => void): void;
  listResolvers(
    args: ListResolversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolversCommandOutput) => void
  ): void;
  /**
   * <p>List the resolvers that are associated with a specific function.</p>
   */
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolversByFunctionCommandOutput>;
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Lists the tags for a resource.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Lists the types for a given API.</p>
   */
  listTypes(args: ListTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListTypesCommandOutput>;
  listTypes(args: ListTypesCommandInput, cb: (err: any, data?: ListTypesCommandOutput) => void): void;
  listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;
  /**
   * <p>Adds a new schema to your GraphQL API.</p>
   *          <p>This operation is asynchronous. Use  to
   *          determine when it has completed.</p>
   */
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSchemaCreationCommandOutput>;
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;
  /**
   * <p>Tags a resource with user-supplied tags.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Untags a resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates the cache for the GraphQL API.</p>
   */
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiCacheCommandOutput>;
  updateApiCache(args: UpdateApiCacheCommandInput, cb: (err: any, data?: UpdateApiCacheCommandOutput) => void): void;
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): void;
  /**
   * <p>Updates an API key. The key can be updated while it is not deleted.</p>
   */
  updateApiKey(args: UpdateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiKeyCommandOutput>;
  updateApiKey(args: UpdateApiKeyCommandInput, cb: (err: any, data?: UpdateApiKeyCommandOutput) => void): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <code>DataSource</code> object.</p>
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <code>Function</code> object.</p>
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCommandOutput>;
  updateFunction(args: UpdateFunctionCommandInput, cb: (err: any, data?: UpdateFunctionCommandOutput) => void): void;
  updateFunction(
    args: UpdateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <code>GraphqlApi</code> object.</p>
   */
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGraphqlApiCommandOutput>;
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <code>Resolver</code> object.</p>
   */
  updateResolver(
    args: UpdateResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverCommandOutput>;
  updateResolver(args: UpdateResolverCommandInput, cb: (err: any, data?: UpdateResolverCommandOutput) => void): void;
  updateResolver(
    args: UpdateResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <code>Type</code> object.</p>
   */
  updateType(args: UpdateTypeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTypeCommandOutput>;
  updateType(args: UpdateTypeCommandInput, cb: (err: any, data?: UpdateTypeCommandOutput) => void): void;
  updateType(
    args: UpdateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTypeCommandOutput) => void
  ): void;
}
