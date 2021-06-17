import { LazyJsonString as __LazyJsonString, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum DiscovererState {
    STARTED = "STARTED",
    STOPPED = "STOPPED"
}
export interface DiscovererSummary {
    /**
     * <p>The ARN of the discoverer.</p>
     */
    DiscovererArn?: string;
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId?: string;
    /**
     * <p>The ARN of the event bus.</p>
     */
    SourceArn?: string;
    /**
     * <p>The state of the discoverer.</p>
     */
    State?: DiscovererState | string;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DiscovererSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DiscovererSummary) => any;
}
export interface RegistrySummary {
    /**
     * <p>The ARN of the registry.</p>
     */
    RegistryArn?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
    /**
     * <p>Tags associated with the registry.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace RegistrySummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegistrySummary) => any;
}
/**
 * <p>A summary of schema details.</p>
 */
export interface SchemaSummary {
    /**
     * <p>The date and time that schema was modified.</p>
     */
    LastModified?: Date;
    /**
     * <p>The ARN of the schema.</p>
     */
    SchemaArn?: string;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName?: string;
    /**
     * <p>Tags associated with the schema.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The number of versions available for the schema.</p>
     */
    VersionCount?: number;
}
export declare namespace SchemaSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SchemaSummary) => any;
}
export declare enum Type {
    JSONSchemaDraft4 = "JSONSchemaDraft4",
    OpenApi3 = "OpenApi3"
}
export interface SchemaVersionSummary {
    /**
     * <p>The ARN of the schema version.</p>
     */
    SchemaArn?: string;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName?: string;
    /**
     * <p>The version number of the schema.</p>
     */
    SchemaVersion?: string;
    /**
     * <p>The type of schema.</p>
     */
    Type?: Type | string;
}
export declare namespace SchemaVersionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SchemaVersionSummary) => any;
}
export interface SearchSchemaVersionSummary {
    /**
     * <p>The date the schema version was created.</p>
     */
    CreatedDate?: Date;
    /**
     * <p>The version number of the schema</p>
     */
    SchemaVersion?: string;
    /**
     * <p>The type of schema.</p>
     */
    Type?: Type | string;
}
export declare namespace SearchSchemaVersionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchSchemaVersionSummary) => any;
}
export interface SearchSchemaSummary {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
    /**
     * <p>The ARN of the schema.</p>
     */
    SchemaArn?: string;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName?: string;
    /**
     * <p>An array of schema version summaries.</p>
     */
    SchemaVersions?: SearchSchemaVersionSummary[];
}
export declare namespace SearchSchemaSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchSchemaSummary) => any;
}
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
export declare enum CodeGenerationStatus {
    CREATE_COMPLETE = "CREATE_COMPLETE",
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
}
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface CreateDiscovererRequest {
    /**
     * <p>A description for the discoverer.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the event bus.</p>
     */
    SourceArn: string | undefined;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDiscovererRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDiscovererRequest) => any;
}
export interface CreateDiscovererResponse {
    /**
     * <p>The description of the discoverer.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the discoverer.</p>
     */
    DiscovererArn?: string;
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId?: string;
    /**
     * <p>The ARN of the event bus.</p>
     */
    SourceArn?: string;
    /**
     * <p>The state of the discoverer.</p>
     */
    State?: DiscovererState | string;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDiscovererResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDiscovererResponse) => any;
}
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
    name: "ForbiddenException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace ForbiddenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ForbiddenException) => any;
}
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace ServiceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace UnauthorizedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnauthorizedException) => any;
}
export interface CreateRegistryRequest {
    /**
     * <p>A description of the registry to be created.</p>
     */
    Description?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>Tags to associate with the registry.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateRegistryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRegistryRequest) => any;
}
export interface CreateRegistryResponse {
    /**
     * <p>The description of the registry.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the registry.</p>
     */
    RegistryArn?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
    /**
     * <p>Tags associated with the registry.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateRegistryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRegistryResponse) => any;
}
export interface CreateSchemaRequest {
    /**
     * <p>The source of the schema definition.</p>
     */
    Content: string | undefined;
    /**
     * <p>A description of the schema.</p>
     */
    Description?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>Tags associated with the schema.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of schema.</p>
     */
    Type: Type | string | undefined;
}
export declare namespace CreateSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSchemaRequest) => any;
}
export interface CreateSchemaResponse {
    /**
     * <p>The description of the schema.</p>
     */
    Description?: string;
    /**
     * <p>The date and time that schema was modified.</p>
     */
    LastModified?: Date;
    /**
     * <p>The ARN of the schema.</p>
     */
    SchemaArn?: string;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName?: string;
    /**
     * <p>The version number of the schema</p>
     */
    SchemaVersion?: string;
    /**
     * <p>Key-value pairs associated with a resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the schema.</p>
     */
    Type?: string;
    /**
     * <p>The date the schema version was created.</p>
     */
    VersionCreatedDate?: Date;
}
export declare namespace CreateSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSchemaResponse) => any;
}
export interface DeleteDiscovererRequest {
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId: string | undefined;
}
export declare namespace DeleteDiscovererRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDiscovererRequest) => any;
}
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
export interface DeleteRegistryRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
}
export declare namespace DeleteRegistryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRegistryRequest) => any;
}
export interface DeleteResourcePolicyRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
}
export declare namespace DeleteResourcePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourcePolicyRequest) => any;
}
export interface DeleteSchemaRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
}
export declare namespace DeleteSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSchemaRequest) => any;
}
export interface DeleteSchemaVersionRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * The version number of the schema
     */
    SchemaVersion: string | undefined;
}
export declare namespace DeleteSchemaVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSchemaVersionRequest) => any;
}
export interface DescribeCodeBindingRequest {
    /**
     * <p>The language of the code binding.</p>
     */
    Language: string | undefined;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>Specifying this limits the results to only this schema version.</p>
     */
    SchemaVersion?: string;
}
export declare namespace DescribeCodeBindingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCodeBindingRequest) => any;
}
export interface DescribeCodeBindingResponse {
    /**
     * <p>The time and date that the code binding was created.</p>
     */
    CreationDate?: Date;
    /**
     * <p>The date and time that code bindings were modified.</p>
     */
    LastModified?: Date;
    /**
     * <p>The version number of the schema.</p>
     */
    SchemaVersion?: string;
    /**
     * <p>The current status of code binding generation.</p>
     */
    Status?: CodeGenerationStatus | string;
}
export declare namespace DescribeCodeBindingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCodeBindingResponse) => any;
}
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
export interface DescribeDiscovererRequest {
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId: string | undefined;
}
export declare namespace DescribeDiscovererRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDiscovererRequest) => any;
}
export interface DescribeDiscovererResponse {
    /**
     * <p>The description of the discoverer.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the discoverer.</p>
     */
    DiscovererArn?: string;
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId?: string;
    /**
     * <p>The ARN of the event bus.</p>
     */
    SourceArn?: string;
    /**
     * <p>The state of the discoverer.</p>
     */
    State?: DiscovererState | string;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeDiscovererResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDiscovererResponse) => any;
}
export interface DescribeRegistryRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
}
export declare namespace DescribeRegistryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRegistryRequest) => any;
}
export interface DescribeRegistryResponse {
    /**
     * <p>The description of the registry.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the registry.</p>
     */
    RegistryArn?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
    /**
     * <p>Tags associated with the registry.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeRegistryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRegistryResponse) => any;
}
export interface DescribeSchemaRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>Specifying this limits the results to only this schema version.</p>
     */
    SchemaVersion?: string;
}
export declare namespace DescribeSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSchemaRequest) => any;
}
export interface DescribeSchemaResponse {
    /**
     * <p>The source of the schema definition.</p>
     */
    Content?: string;
    /**
     * <p>The description of the schema.</p>
     */
    Description?: string;
    /**
     * <p>The date and time that schema was modified.</p>
     */
    LastModified?: Date;
    /**
     * <p>The ARN of the schema.</p>
     */
    SchemaArn?: string;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName?: string;
    /**
     * <p>The version number of the schema</p>
     */
    SchemaVersion?: string;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the schema.</p>
     */
    Type?: string;
    /**
     * <p>The date the schema version was created.</p>
     */
    VersionCreatedDate?: Date;
}
export declare namespace DescribeSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSchemaResponse) => any;
}
export interface ExportSchemaRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>Specifying this limits the results to only this schema version.</p>
     */
    SchemaVersion?: string;
    Type: string | undefined;
}
export declare namespace ExportSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportSchemaRequest) => any;
}
export interface ExportSchemaResponse {
    Content?: string;
    SchemaArn?: string;
    SchemaName?: string;
    SchemaVersion?: string;
    Type?: string;
}
export declare namespace ExportSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportSchemaResponse) => any;
}
export interface GetCodeBindingSourceRequest {
    /**
     * <p>The language of the code binding.</p>
     */
    Language: string | undefined;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>Specifying this limits the results to only this schema version.</p>
     */
    SchemaVersion?: string;
}
export declare namespace GetCodeBindingSourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCodeBindingSourceRequest) => any;
}
export interface GetCodeBindingSourceResponse {
    Body?: Uint8Array;
}
export declare namespace GetCodeBindingSourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCodeBindingSourceResponse) => any;
}
export interface GetDiscoveredSchemaRequest {
    /**
     * <p>An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.</p>
     */
    Events: string[] | undefined;
    /**
     * <p>The type of event.</p>
     */
    Type: Type | string | undefined;
}
export declare namespace GetDiscoveredSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDiscoveredSchemaRequest) => any;
}
export interface GetDiscoveredSchemaResponse {
    /**
     * <p>The source of the schema definition.</p>
     */
    Content?: string;
}
export declare namespace GetDiscoveredSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDiscoveredSchemaResponse) => any;
}
export interface GetResourcePolicyRequest {
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
}
export declare namespace GetResourcePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourcePolicyRequest) => any;
}
export interface GetResourcePolicyResponse {
    /**
     * <p>The resource-based policy.</p>
     */
    Policy?: __LazyJsonString | string;
    /**
     * <p>The revision ID.</p>
     */
    RevisionId?: string;
}
export declare namespace GetResourcePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourcePolicyResponse) => any;
}
export interface GoneException extends __SmithyException, $MetadataBearer {
    name: "GoneException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace GoneException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GoneException) => any;
}
export interface ListDiscoverersRequest {
    /**
     * <p>Specifying this limits the results to only those discoverer IDs that start with the specified prefix.</p>
     */
    DiscovererIdPrefix?: string;
    Limit?: number;
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifying this limits the results to only those ARNs that start with the specified prefix.</p>
     */
    SourceArnPrefix?: string;
}
export declare namespace ListDiscoverersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDiscoverersRequest) => any;
}
export interface ListDiscoverersResponse {
    /**
     * <p>An array of DiscovererSummary information.</p>
     */
    Discoverers?: DiscovererSummary[];
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
}
export declare namespace ListDiscoverersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDiscoverersResponse) => any;
}
export interface ListRegistriesRequest {
    Limit?: number;
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifying this limits the results to only those registry names that start with the specified prefix.</p>
     */
    RegistryNamePrefix?: string;
    /**
     * <p>Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.</p>
     */
    Scope?: string;
}
export declare namespace ListRegistriesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRegistriesRequest) => any;
}
export interface ListRegistriesResponse {
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>An array of registry summaries.</p>
     */
    Registries?: RegistrySummary[];
}
export declare namespace ListRegistriesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRegistriesResponse) => any;
}
export interface ListSchemasRequest {
    Limit?: number;
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>Specifying this limits the results to only those schema names that start with the specified prefix.</p>
     */
    SchemaNamePrefix?: string;
}
export declare namespace ListSchemasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemasRequest) => any;
}
export interface ListSchemasResponse {
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>An array of schema summaries.</p>
     */
    Schemas?: SchemaSummary[];
}
export declare namespace ListSchemasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemasResponse) => any;
}
export interface ListSchemaVersionsRequest {
    Limit?: number;
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
}
export declare namespace ListSchemaVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemaVersionsRequest) => any;
}
export interface ListSchemaVersionsResponse {
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>An array of schema version summaries.</p>
     */
    SchemaVersions?: SchemaVersionSummary[];
}
export declare namespace ListSchemaVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemaVersionsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>Key-value pairs associated with a resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
    name: "PreconditionFailedException";
    $fault: "client";
    /**
     * <p>The error code.</p>
     */
    Code: string | undefined;
    /**
     * <p>The message string of the error output.</p>
     */
    Message: string | undefined;
}
export declare namespace PreconditionFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PreconditionFailedException) => any;
}
export interface PutCodeBindingRequest {
    /**
     * <p>The language of the code binding.</p>
     */
    Language: string | undefined;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>Specifying this limits the results to only this schema version.</p>
     */
    SchemaVersion?: string;
}
export declare namespace PutCodeBindingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutCodeBindingRequest) => any;
}
export interface PutCodeBindingResponse {
    /**
     * <p>The time and date that the code binding was created.</p>
     */
    CreationDate?: Date;
    /**
     * <p>The date and time that code bindings were modified.</p>
     */
    LastModified?: Date;
    /**
     * <p>The version number of the schema.</p>
     */
    SchemaVersion?: string;
    /**
     * <p>The current status of code binding generation.</p>
     */
    Status?: CodeGenerationStatus | string;
}
export declare namespace PutCodeBindingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutCodeBindingResponse) => any;
}
/**
 * <p>The name of the policy.</p>
 */
export interface PutResourcePolicyRequest {
    /**
     * <p>The resource-based policy.</p>
     */
    Policy: __LazyJsonString | string | undefined;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
    /**
     * <p>The revision ID of the policy.</p>
     */
    RevisionId?: string;
}
export declare namespace PutResourcePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutResourcePolicyRequest) => any;
}
export interface PutResourcePolicyResponse {
    /**
     * <p>The resource-based policy.</p>
     */
    Policy?: __LazyJsonString | string;
    /**
     * <p>The revision ID of the policy.</p>
     */
    RevisionId?: string;
}
export declare namespace PutResourcePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutResourcePolicyResponse) => any;
}
export interface SearchSchemasRequest {
    /**
     * <p>Specifying this limits the results to only schemas that include the provided keywords.</p>
     */
    Keywords: string | undefined;
    Limit?: number;
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
}
export declare namespace SearchSchemasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchSchemasRequest) => any;
}
export interface SearchSchemasResponse {
    /**
     * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
     */
    NextToken?: string;
    /**
     * <p>An array of SearchSchemaSummary information.</p>
     */
    Schemas?: SearchSchemaSummary[];
}
export declare namespace SearchSchemasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchSchemasResponse) => any;
}
export interface StartDiscovererRequest {
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId: string | undefined;
}
export declare namespace StartDiscovererRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartDiscovererRequest) => any;
}
export interface StartDiscovererResponse {
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId?: string;
    /**
     * <p>The state of the discoverer.</p>
     */
    State?: DiscovererState | string;
}
export declare namespace StartDiscovererResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartDiscovererResponse) => any;
}
export interface StopDiscovererRequest {
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId: string | undefined;
}
export declare namespace StopDiscovererRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopDiscovererRequest) => any;
}
export interface StopDiscovererResponse {
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId?: string;
    /**
     * <p>The state of the discoverer.</p>
     */
    State?: DiscovererState | string;
}
export declare namespace StopDiscovererResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopDiscovererResponse) => any;
}
/**
 * <p></p>
 */
export interface TagResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Keys of key-value pairs.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateDiscovererRequest {
    /**
     * <p>The description of the discoverer to update.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId: string | undefined;
}
export declare namespace UpdateDiscovererRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDiscovererRequest) => any;
}
export interface UpdateDiscovererResponse {
    /**
     * <p>The description of the discoverer.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the discoverer.</p>
     */
    DiscovererArn?: string;
    /**
     * <p>The ID of the discoverer.</p>
     */
    DiscovererId?: string;
    /**
     * <p>The ARN of the event bus.</p>
     */
    SourceArn?: string;
    /**
     * <p>The state of the discoverer.</p>
     */
    State?: DiscovererState | string;
    /**
     * <p>Tags associated with the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace UpdateDiscovererResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDiscovererResponse) => any;
}
/**
 * <p>Updates the registry.</p>
 */
export interface UpdateRegistryRequest {
    /**
     * <p>The description of the registry to update.</p>
     */
    Description?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
}
export declare namespace UpdateRegistryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRegistryRequest) => any;
}
export interface UpdateRegistryResponse {
    /**
     * <p>The description of the registry.</p>
     */
    Description?: string;
    /**
     * <p>The ARN of the registry.</p>
     */
    RegistryArn?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName?: string;
    /**
     * <p>Tags associated with the registry.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace UpdateRegistryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRegistryResponse) => any;
}
export interface UpdateSchemaRequest {
    /**
     * <p>The ID of the client token.</p>
     */
    ClientTokenId?: string;
    /**
     * <p>The source of the schema definition.</p>
     */
    Content?: string;
    /**
     * <p>The description of the schema.</p>
     */
    Description?: string;
    /**
     * <p>The name of the registry.</p>
     */
    RegistryName: string | undefined;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName: string | undefined;
    /**
     * <p>The schema type for the events schema.</p>
     */
    Type?: Type | string;
}
export declare namespace UpdateSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSchemaRequest) => any;
}
export interface UpdateSchemaResponse {
    /**
     * <p>The description of the schema.</p>
     */
    Description?: string;
    /**
     * <p>The date and time that schema was modified.</p>
     */
    LastModified?: Date;
    /**
     * <p>The ARN of the schema.</p>
     */
    SchemaArn?: string;
    /**
     * <p>The name of the schema.</p>
     */
    SchemaName?: string;
    /**
     * <p>The version number of the schema</p>
     */
    SchemaVersion?: string;
    /**
     * <p>Key-value pairs associated with a resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the schema.</p>
     */
    Type?: string;
    /**
     * <p>The date the schema version was created.</p>
     */
    VersionCreatedDate?: Date;
}
export declare namespace UpdateSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSchemaResponse) => any;
}
