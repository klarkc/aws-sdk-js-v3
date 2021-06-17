import { SchemasClient } from "./SchemasClient";
import { CreateDiscovererCommandInput, CreateDiscovererCommandOutput } from "./commands/CreateDiscovererCommand";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "./commands/CreateRegistryCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import { DeleteDiscovererCommandInput, DeleteDiscovererCommandOutput } from "./commands/DeleteDiscovererCommand";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "./commands/DeleteRegistryCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "./commands/DeleteResourcePolicyCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import { DeleteSchemaVersionCommandInput, DeleteSchemaVersionCommandOutput } from "./commands/DeleteSchemaVersionCommand";
import { DescribeCodeBindingCommandInput, DescribeCodeBindingCommandOutput } from "./commands/DescribeCodeBindingCommand";
import { DescribeDiscovererCommandInput, DescribeDiscovererCommandOutput } from "./commands/DescribeDiscovererCommand";
import { DescribeRegistryCommandInput, DescribeRegistryCommandOutput } from "./commands/DescribeRegistryCommand";
import { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "./commands/DescribeSchemaCommand";
import { ExportSchemaCommandInput, ExportSchemaCommandOutput } from "./commands/ExportSchemaCommand";
import { GetCodeBindingSourceCommandInput, GetCodeBindingSourceCommandOutput } from "./commands/GetCodeBindingSourceCommand";
import { GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput } from "./commands/GetDiscoveredSchemaCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { ListDiscoverersCommandInput, ListDiscoverersCommandOutput } from "./commands/ListDiscoverersCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "./commands/ListRegistriesCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "./commands/ListSchemaVersionsCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutCodeBindingCommandInput, PutCodeBindingCommandOutput } from "./commands/PutCodeBindingCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { SearchSchemasCommandInput, SearchSchemasCommandOutput } from "./commands/SearchSchemasCommand";
import { StartDiscovererCommandInput, StartDiscovererCommandOutput } from "./commands/StartDiscovererCommand";
import { StopDiscovererCommandInput, StopDiscovererCommandOutput } from "./commands/StopDiscovererCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDiscovererCommandInput, UpdateDiscovererCommandOutput } from "./commands/UpdateDiscovererCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "./commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon EventBridge Schema Registry</p>
 */
export declare class Schemas extends SchemasClient {
    /**
     * <p>Creates a discoverer.</p>
     */
    createDiscoverer(args: CreateDiscovererCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiscovererCommandOutput>;
    createDiscoverer(args: CreateDiscovererCommandInput, cb: (err: any, data?: CreateDiscovererCommandOutput) => void): void;
    createDiscoverer(args: CreateDiscovererCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiscovererCommandOutput) => void): void;
    /**
     * <p>Creates a registry.</p>
     */
    createRegistry(args: CreateRegistryCommandInput, options?: __HttpHandlerOptions): Promise<CreateRegistryCommandOutput>;
    createRegistry(args: CreateRegistryCommandInput, cb: (err: any, data?: CreateRegistryCommandOutput) => void): void;
    createRegistry(args: CreateRegistryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRegistryCommandOutput) => void): void;
    /**
     * <p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
     */
    createSchema(args: CreateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<CreateSchemaCommandOutput>;
    createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
    createSchema(args: CreateSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
    /**
     * <p>Deletes a discoverer.</p>
     */
    deleteDiscoverer(args: DeleteDiscovererCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDiscovererCommandOutput>;
    deleteDiscoverer(args: DeleteDiscovererCommandInput, cb: (err: any, data?: DeleteDiscovererCommandOutput) => void): void;
    deleteDiscoverer(args: DeleteDiscovererCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDiscovererCommandOutput) => void): void;
    /**
     * <p>Deletes a Registry.</p>
     */
    deleteRegistry(args: DeleteRegistryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRegistryCommandOutput>;
    deleteRegistry(args: DeleteRegistryCommandInput, cb: (err: any, data?: DeleteRegistryCommandOutput) => void): void;
    deleteRegistry(args: DeleteRegistryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRegistryCommandOutput) => void): void;
    /**
     * <p>Delete the resource-based policy attached to the specified registry.</p>
     */
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyCommandOutput>;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Delete a schema definition.</p>
     */
    deleteSchema(args: DeleteSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSchemaCommandOutput>;
    deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
    deleteSchema(args: DeleteSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
    /**
     * <p>Delete the schema version definition</p>
     */
    deleteSchemaVersion(args: DeleteSchemaVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSchemaVersionCommandOutput>;
    deleteSchemaVersion(args: DeleteSchemaVersionCommandInput, cb: (err: any, data?: DeleteSchemaVersionCommandOutput) => void): void;
    deleteSchemaVersion(args: DeleteSchemaVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSchemaVersionCommandOutput) => void): void;
    /**
     * <p>Describe the code binding URI.</p>
     */
    describeCodeBinding(args: DescribeCodeBindingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCodeBindingCommandOutput>;
    describeCodeBinding(args: DescribeCodeBindingCommandInput, cb: (err: any, data?: DescribeCodeBindingCommandOutput) => void): void;
    describeCodeBinding(args: DescribeCodeBindingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCodeBindingCommandOutput) => void): void;
    /**
     * <p>Describes the discoverer.</p>
     */
    describeDiscoverer(args: DescribeDiscovererCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDiscovererCommandOutput>;
    describeDiscoverer(args: DescribeDiscovererCommandInput, cb: (err: any, data?: DescribeDiscovererCommandOutput) => void): void;
    describeDiscoverer(args: DescribeDiscovererCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDiscovererCommandOutput) => void): void;
    /**
     * <p>Describes the registry.</p>
     */
    describeRegistry(args: DescribeRegistryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRegistryCommandOutput>;
    describeRegistry(args: DescribeRegistryCommandInput, cb: (err: any, data?: DescribeRegistryCommandOutput) => void): void;
    describeRegistry(args: DescribeRegistryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRegistryCommandOutput) => void): void;
    /**
     * <p>Retrieve the schema definition.</p>
     */
    describeSchema(args: DescribeSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSchemaCommandOutput>;
    describeSchema(args: DescribeSchemaCommandInput, cb: (err: any, data?: DescribeSchemaCommandOutput) => void): void;
    describeSchema(args: DescribeSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSchemaCommandOutput) => void): void;
    exportSchema(args: ExportSchemaCommandInput, options?: __HttpHandlerOptions): Promise<ExportSchemaCommandOutput>;
    exportSchema(args: ExportSchemaCommandInput, cb: (err: any, data?: ExportSchemaCommandOutput) => void): void;
    exportSchema(args: ExportSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportSchemaCommandOutput) => void): void;
    /**
     * <p>Get the code binding source URI.</p>
     */
    getCodeBindingSource(args: GetCodeBindingSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetCodeBindingSourceCommandOutput>;
    getCodeBindingSource(args: GetCodeBindingSourceCommandInput, cb: (err: any, data?: GetCodeBindingSourceCommandOutput) => void): void;
    getCodeBindingSource(args: GetCodeBindingSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCodeBindingSourceCommandOutput) => void): void;
    /**
     * <p>Get the discovered schema that was generated based on sampled events.</p>
     */
    getDiscoveredSchema(args: GetDiscoveredSchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetDiscoveredSchemaCommandOutput>;
    getDiscoveredSchema(args: GetDiscoveredSchemaCommandInput, cb: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void): void;
    getDiscoveredSchema(args: GetDiscoveredSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void): void;
    /**
     * <p>Retrieves the resource-based policy attached to a given registry.</p>
     */
    getResourcePolicy(args: GetResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcePolicyCommandOutput>;
    getResourcePolicy(args: GetResourcePolicyCommandInput, cb: (err: any, data?: GetResourcePolicyCommandOutput) => void): void;
    getResourcePolicy(args: GetResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcePolicyCommandOutput) => void): void;
    /**
     * <p>List the discoverers.</p>
     */
    listDiscoverers(args: ListDiscoverersCommandInput, options?: __HttpHandlerOptions): Promise<ListDiscoverersCommandOutput>;
    listDiscoverers(args: ListDiscoverersCommandInput, cb: (err: any, data?: ListDiscoverersCommandOutput) => void): void;
    listDiscoverers(args: ListDiscoverersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDiscoverersCommandOutput) => void): void;
    /**
     * <p>List the registries.</p>
     */
    listRegistries(args: ListRegistriesCommandInput, options?: __HttpHandlerOptions): Promise<ListRegistriesCommandOutput>;
    listRegistries(args: ListRegistriesCommandInput, cb: (err: any, data?: ListRegistriesCommandOutput) => void): void;
    listRegistries(args: ListRegistriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRegistriesCommandOutput) => void): void;
    /**
     * <p>List the schemas.</p>
     */
    listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
    listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
    listSchemas(args: ListSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
    /**
     * <p>Provides a list of the schema versions and related information.</p>
     */
    listSchemaVersions(args: ListSchemaVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemaVersionsCommandOutput>;
    listSchemaVersions(args: ListSchemaVersionsCommandInput, cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void): void;
    listSchemaVersions(args: ListSchemaVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void): void;
    /**
     * <p>Get tags for resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Put code binding URI</p>
     */
    putCodeBinding(args: PutCodeBindingCommandInput, options?: __HttpHandlerOptions): Promise<PutCodeBindingCommandOutput>;
    putCodeBinding(args: PutCodeBindingCommandInput, cb: (err: any, data?: PutCodeBindingCommandOutput) => void): void;
    putCodeBinding(args: PutCodeBindingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutCodeBindingCommandOutput) => void): void;
    /**
     * <p>The name of the policy.</p>
     */
    putResourcePolicy(args: PutResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResourcePolicyCommandOutput>;
    putResourcePolicy(args: PutResourcePolicyCommandInput, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    putResourcePolicy(args: PutResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Search the schemas</p>
     */
    searchSchemas(args: SearchSchemasCommandInput, options?: __HttpHandlerOptions): Promise<SearchSchemasCommandOutput>;
    searchSchemas(args: SearchSchemasCommandInput, cb: (err: any, data?: SearchSchemasCommandOutput) => void): void;
    searchSchemas(args: SearchSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchSchemasCommandOutput) => void): void;
    /**
     * <p>Starts the discoverer</p>
     */
    startDiscoverer(args: StartDiscovererCommandInput, options?: __HttpHandlerOptions): Promise<StartDiscovererCommandOutput>;
    startDiscoverer(args: StartDiscovererCommandInput, cb: (err: any, data?: StartDiscovererCommandOutput) => void): void;
    startDiscoverer(args: StartDiscovererCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDiscovererCommandOutput) => void): void;
    /**
     * <p>Stops the discoverer</p>
     */
    stopDiscoverer(args: StopDiscovererCommandInput, options?: __HttpHandlerOptions): Promise<StopDiscovererCommandOutput>;
    stopDiscoverer(args: StopDiscovererCommandInput, cb: (err: any, data?: StopDiscovererCommandOutput) => void): void;
    stopDiscoverer(args: StopDiscovererCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDiscovererCommandOutput) => void): void;
    /**
     * <p>Add tags to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the discoverer</p>
     */
    updateDiscoverer(args: UpdateDiscovererCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDiscovererCommandOutput>;
    updateDiscoverer(args: UpdateDiscovererCommandInput, cb: (err: any, data?: UpdateDiscovererCommandOutput) => void): void;
    updateDiscoverer(args: UpdateDiscovererCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDiscovererCommandOutput) => void): void;
    /**
     * <p>Updates a registry.</p>
     */
    updateRegistry(args: UpdateRegistryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRegistryCommandOutput>;
    updateRegistry(args: UpdateRegistryCommandInput, cb: (err: any, data?: UpdateRegistryCommandOutput) => void): void;
    updateRegistry(args: UpdateRegistryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRegistryCommandOutput) => void): void;
    /**
     * <p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
     */
    updateSchema(args: UpdateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSchemaCommandOutput>;
    updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
    updateSchema(args: UpdateSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
}
