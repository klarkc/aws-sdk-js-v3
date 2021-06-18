import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have access to perform this operation on this resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}
export declare namespace AccessDeniedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum AuthenticationType {
  AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
  API_KEY = "API_KEY",
  AWS_IAM = "AWS_IAM",
  OPENID_CONNECT = "OPENID_CONNECT",
}
/**
 * <p>Describes an OpenID Connect configuration.</p>
 */
export interface OpenIDConnectConfig {
  /**
   * <p>The issuer for the OpenID Connect configuration. The issuer returned by discovery must
   *          exactly match the value of <code>iss</code> in the ID token.</p>
   */
  issuer: string | undefined;
  /**
   * <p>The client identifier of the Relying party at the OpenID identity provider. This
   *          identifier is typically obtained when the Relying party is registered with the OpenID
   *          identity provider. You can specify a regular expression so the AWS AppSync can validate
   *          against multiple client identifiers at a time.</p>
   */
  clientId?: string;
  /**
   * <p>The number of milliseconds a token is valid after being issued to a user.</p>
   */
  iatTTL?: number;
  /**
   * <p>The number of milliseconds a token is valid after being authenticated.</p>
   */
  authTTL?: number;
}
export declare namespace OpenIDConnectConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: OpenIDConnectConfig) => any;
}
/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface CognitoUserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;
  /**
   * <p>The AWS Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;
  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID.</p>
   */
  appIdClientRegex?: string;
}
export declare namespace CognitoUserPoolConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CognitoUserPoolConfig) => any;
}
/**
 * <p>Describes an additional authentication provider.</p>
 */
export interface AdditionalAuthenticationProvider {
  /**
   * <p>The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType?: AuthenticationType | string;
  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;
  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: CognitoUserPoolConfig;
}
export declare namespace AdditionalAuthenticationProvider {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AdditionalAuthenticationProvider) => any;
}
export declare enum ApiCachingBehavior {
  FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING",
  PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING",
}
export declare enum ApiCacheStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MODIFYING = "MODIFYING",
}
export declare enum ApiCacheType {
  LARGE = "LARGE",
  LARGE_12X = "LARGE_12X",
  LARGE_2X = "LARGE_2X",
  LARGE_4X = "LARGE_4X",
  LARGE_8X = "LARGE_8X",
  MEDIUM = "MEDIUM",
  R4_2XLARGE = "R4_2XLARGE",
  R4_4XLARGE = "R4_4XLARGE",
  R4_8XLARGE = "R4_8XLARGE",
  R4_LARGE = "R4_LARGE",
  R4_XLARGE = "R4_XLARGE",
  SMALL = "SMALL",
  T2_MEDIUM = "T2_MEDIUM",
  T2_SMALL = "T2_SMALL",
  XLARGE = "XLARGE",
}
/**
 * <p>The <code>ApiCache</code> object.</p>
 */
export interface ApiCache {
  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl?: number;
  /**
   * <p>Caching behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully
   *                cached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resolvers
   *                that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior?: ApiCachingBehavior | string;
  /**
   * <p>Transit encryption flag when connecting to cache. This setting cannot be updated after
   *          creation.</p>
   */
  transitEncryptionEnabled?: boolean;
  /**
   * <p>At rest encryption flag for cache. This setting cannot be updated after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;
  /**
   * <p>The cache instance type. Valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XLARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_2X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_4X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_8X</code> (not available in all regions)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_12X</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p>
   *          <p>The following legacy instance types are available, but their use is discouraged:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *             </li>
   *          </ul>
   */
  type?: ApiCacheType | string;
  /**
   * <p>The cache instance status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AVAILABLE</b>: The instance is available for
   *                use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CREATING</b>: The instance is currently
   *                creating.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b>: The instance is currently
   *                deleting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MODIFYING</b>: The instance is currently
   *                modifying.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b>: The instance has failed
   *                creation.</p>
   *             </li>
   *          </ul>
   */
  status?: ApiCacheStatus | string;
}
export declare namespace ApiCache {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApiCache) => any;
}
/**
 * <p>Describes an API key.</p>
 *          <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity
 *          mechanism. There are two key versions:</p>
 *          <p>
 *             <b>da1</b>: This version was introduced at launch in November
 *          2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB
 *          TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that
 *          date.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ListApiKeys</code> returns the expiration time in milliseconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateApiKey</code> returns the expiration time in
 *                milliseconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateApiKey</code> is not available for this key version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteApiKey</code> deletes the item from the table.</p>
 *             </li>
 *             <li>
 *                <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug
 *                where keys are not automatically deleted because DynamoDB expects the TTL to be
 *                stored in seconds. As a one-time action, we will delete these keys from the table
 *                after February 21, 2018.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>da2</b>: This version was introduced in February 2018 when
 *          AppSync added support to extend key expiration.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ListApiKeys</code> returns the expiration time and deletion time
 *                in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateApiKey</code> returns the expiration time and deletion time
 *                in seconds and accepts a user-provided expiration time in seconds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateApiKey</code> returns the expiration time and and deletion time
 *                in seconds and accepts a user-provided expiration time in seconds. Expired API keys
 *                are kept for 60 days after the expiration time. Key expiration time can be updated
 *                while the key is not deleted. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteApiKey</code> deletes the item from the table.</p>
 *             </li>
 *             <li>
 *                <p>Expiration is stored in Amazon DynamoDB as seconds. After the expiration
 *                time, using the key to authenticate will fail. But the key can be reinstated before
 *                deletion.</p>
 *             </li>
 *             <li>
 *                <p>Deletion is stored in Amazon DynamoDB as seconds. The key will be deleted
 *                after deletion time. </p>
 *             </li>
 *          </ul>
 */
export interface ApiKey {
  /**
   * <p>The API key ID.</p>
   */
  id?: string;
  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;
  /**
   * <p>The time after which the API key expires. The date is represented as seconds since the
   *          epoch, rounded down to the nearest hour.</p>
   */
  expires?: number;
  /**
   * <p>The time after which the API key is deleted. The date is represented as seconds since the
   *          epoch, rounded down to the nearest hour.</p>
   */
  deletes?: number;
}
export declare namespace ApiKey {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApiKey) => any;
}
/**
 * <p>The API key exceeded a limit. Try your request again.</p>
 */
export interface ApiKeyLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ApiKeyLimitExceededException";
  $fault: "client";
  message?: string;
}
export declare namespace ApiKeyLimitExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApiKeyLimitExceededException) => any;
}
/**
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 */
export interface ApiKeyValidityOutOfBoundsException extends __SmithyException, $MetadataBearer {
  name: "ApiKeyValidityOutOfBoundsException";
  $fault: "client";
  message?: string;
}
export declare namespace ApiKeyValidityOutOfBoundsException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApiKeyValidityOutOfBoundsException) => any;
}
/**
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
 */
export interface ApiLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ApiLimitExceededException";
  $fault: "client";
  message?: string;
}
export declare namespace ApiLimitExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ApiLimitExceededException) => any;
}
export declare enum AuthorizationType {
  AWS_IAM = "AWS_IAM",
}
/**
 * <p>The AWS IAM configuration.</p>
 */
export interface AwsIamConfig {
  /**
   * <p>The signing region for AWS IAM authorization.</p>
   */
  signingRegion?: string;
  /**
   * <p>The signing service name for AWS IAM authorization.</p>
   */
  signingServiceName?: string;
}
export declare namespace AwsIamConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AwsIamConfig) => any;
}
/**
 * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
 */
export interface AuthorizationConfig {
  /**
   * <p>The authorization type required by the HTTP endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AWS_IAM</b>: The authorization type is
   *                Sigv4.</p>
   *             </li>
   *          </ul>
   */
  authorizationType: AuthorizationType | string | undefined;
  /**
   * <p>The AWS IAM settings.</p>
   */
  awsIamConfig?: AwsIamConfig;
}
export declare namespace AuthorizationConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AuthorizationConfig) => any;
}
/**
 * <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again. </p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}
export declare namespace BadRequestException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BadRequestException) => any;
}
/**
 * <p>Another modification is in progress at this time and it must complete before you can
 *          make your change. </p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}
export declare namespace ConcurrentModificationException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConcurrentModificationException) => any;
}
/**
 * <p>Represents the input of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheRequest {
  /**
   * <p>The GraphQL API Id.</p>
   */
  apiId: string | undefined;
  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl: number | undefined;
  /**
   * <p>Transit encryption flag when connecting to cache. This setting cannot be updated after
   *          creation.</p>
   */
  transitEncryptionEnabled?: boolean;
  /**
   * <p>At rest encryption flag for cache. This setting cannot be updated after creation.</p>
   */
  atRestEncryptionEnabled?: boolean;
  /**
   * <p>Caching behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully
   *                cached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resolvers
   *                that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior: ApiCachingBehavior | string | undefined;
  /**
   * <p>The cache instance type. Valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XLARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_2X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_4X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_8X</code> (not available in all regions)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_12X</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p>
   *          <p>The following legacy instance types are available, but their use is discouraged:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *             </li>
   *          </ul>
   */
  type: ApiCacheType | string | undefined;
}
export declare namespace CreateApiCacheRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateApiCacheRequest) => any;
}
/**
 * <p>Represents the output of a <code>CreateApiCache</code> operation.</p>
 */
export interface CreateApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}
export declare namespace CreateApiCacheResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateApiCacheResponse) => any;
}
/**
 * <p>An internal AWS AppSync error occurred. Try your request again.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}
export declare namespace InternalFailureException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalFailureException) => any;
}
/**
 * <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}
export declare namespace NotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: NotFoundException) => any;
}
/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}
export declare namespace UnauthorizedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UnauthorizedException) => any;
}
export interface CreateApiKeyRequest {
  /**
   * <p>The ID for your GraphQL API.</p>
   */
  apiId: string | undefined;
  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;
  /**
   * <p>The time from creation time after which the API key expires. The date is represented as
   *          seconds since the epoch, rounded down to the nearest hour. The default value for this
   *          parameter is 7 days from creation time. For more information, see .</p>
   */
  expires?: number;
}
export declare namespace CreateApiKeyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateApiKeyRequest) => any;
}
export interface CreateApiKeyResponse {
  /**
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}
export declare namespace CreateApiKeyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateApiKeyResponse) => any;
}
/**
 * <p>The request exceeded a limit. Try your request again.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}
export declare namespace LimitExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>Describes a Delta Sync configuration.</p>
 */
export interface DeltaSyncConfig {
  /**
   * <p>The number of minutes an Item is stored in the datasource.</p>
   */
  baseTableTTL?: number;
  /**
   * <p>The Delta Sync table name.</p>
   */
  deltaSyncTableName?: string;
  /**
   * <p>The number of minutes a Delta Sync log entry is stored in the Delta Sync table.</p>
   */
  deltaSyncTableTTL?: number;
}
export declare namespace DeltaSyncConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeltaSyncConfig) => any;
}
/**
 * <p>Describes an Amazon DynamoDB data source configuration.</p>
 */
export interface DynamodbDataSourceConfig {
  /**
   * <p>The table name.</p>
   */
  tableName: string | undefined;
  /**
   * <p>The AWS Region.</p>
   */
  awsRegion: string | undefined;
  /**
   * <p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>
   */
  useCallerCredentials?: boolean;
  /**
   * <p>The <code>DeltaSyncConfig</code> for a versioned datasource.</p>
   */
  deltaSyncConfig?: DeltaSyncConfig;
  /**
   * <p>Set to TRUE to use Conflict Detection and Resolution with this data source.</p>
   */
  versioned?: boolean;
}
export declare namespace DynamodbDataSourceConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DynamodbDataSourceConfig) => any;
}
/**
 * <p>Describes an Elasticsearch data source configuration.</p>
 */
export interface ElasticsearchDataSourceConfig {
  /**
   * <p>The endpoint.</p>
   */
  endpoint: string | undefined;
  /**
   * <p>The AWS Region.</p>
   */
  awsRegion: string | undefined;
}
export declare namespace ElasticsearchDataSourceConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ElasticsearchDataSourceConfig) => any;
}
/**
 * <p>Describes an HTTP data source configuration.</p>
 */
export interface HttpDataSourceConfig {
  /**
   * <p>The HTTP URL endpoint. You can either specify the domain name or IP, and port
   *          combination, and the URL scheme must be HTTP or HTTPS. If the port is not specified, AWS
   *          AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS
   *          endpoints.</p>
   */
  endpoint?: string;
  /**
   * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
   */
  authorizationConfig?: AuthorizationConfig;
}
export declare namespace HttpDataSourceConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpDataSourceConfig) => any;
}
/**
 * <p>Describes an AWS Lambda data source configuration.</p>
 */
export interface LambdaDataSourceConfig {
  /**
   * <p>The ARN for the Lambda function.</p>
   */
  lambdaFunctionArn: string | undefined;
}
export declare namespace LambdaDataSourceConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LambdaDataSourceConfig) => any;
}
/**
 * <p>The Amazon RDS HTTP endpoint configuration.</p>
 */
export interface RdsHttpEndpointConfig {
  /**
   * <p>AWS Region for RDS HTTP endpoint.</p>
   */
  awsRegion?: string;
  /**
   * <p>Amazon RDS cluster ARN.</p>
   */
  dbClusterIdentifier?: string;
  /**
   * <p>Logical database name.</p>
   */
  databaseName?: string;
  /**
   * <p>Logical schema name.</p>
   */
  schema?: string;
  /**
   * <p>AWS secret store ARN for database credentials.</p>
   */
  awsSecretStoreArn?: string;
}
export declare namespace RdsHttpEndpointConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RdsHttpEndpointConfig) => any;
}
export declare enum RelationalDatabaseSourceType {
  RDS_HTTP_ENDPOINT = "RDS_HTTP_ENDPOINT",
}
/**
 * <p>Describes a relational database data source configuration.</p>
 */
export interface RelationalDatabaseDataSourceConfig {
  /**
   * <p>Source type for the relational database.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RDS_HTTP_ENDPOINT</b>: The relational database
   *                source type is an Amazon RDS HTTP endpoint.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType | string;
  /**
   * <p>Amazon RDS HTTP endpoint settings.</p>
   */
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
}
export declare namespace RelationalDatabaseDataSourceConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RelationalDatabaseDataSourceConfig) => any;
}
export declare enum DataSourceType {
  AMAZON_DYNAMODB = "AMAZON_DYNAMODB",
  AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH",
  AWS_LAMBDA = "AWS_LAMBDA",
  HTTP = "HTTP",
  NONE = "NONE",
  RELATIONAL_DATABASE = "RELATIONAL_DATABASE",
}
export interface CreateDataSourceRequest {
  /**
   * <p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>
   */
  apiId: string | undefined;
  /**
   * <p>A user-supplied name for the <code>DataSource</code>.</p>
   */
  name: string | undefined;
  /**
   * <p>A description of the <code>DataSource</code>.</p>
   */
  description?: string;
  /**
   * <p>The type of the <code>DataSource</code>.</p>
   */
  type: DataSourceType | string | undefined;
  /**
   * <p>The AWS IAM service role ARN for the data source. The system assumes this role when
   *          accessing the data source.</p>
   */
  serviceRoleArn?: string;
  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;
  /**
   * <p>AWS Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;
  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;
  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
}
export declare namespace CreateDataSourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDataSourceRequest) => any;
}
/**
 * <p>Describes a data source.</p>
 */
export interface DataSource {
  /**
   * <p>The data source ARN.</p>
   */
  dataSourceArn?: string;
  /**
   * <p>The name of the data source.</p>
   */
  name?: string;
  /**
   * <p>The description of the data source.</p>
   */
  description?: string;
  /**
   * <p>The type of the data source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AMAZON_DYNAMODB</b>: The data source is an Amazon
   *                DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AMAZON_ELASTICSEARCH</b>: The data source is an
   *                Amazon Elasticsearch Service domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AWS_LAMBDA</b>: The data source is an AWS Lambda
   *                function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: There is no data source. This type is
   *                used when you wish to invoke a GraphQL operation without connecting to a data source,
   *                such as performing data transformation with resolvers or triggering a subscription to
   *                be invoked from a mutation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>HTTP</b>: The data source is an HTTP
   *                endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>RELATIONAL_DATABASE</b>: The data source is a
   *                relational database.</p>
   *             </li>
   *          </ul>
   */
  type?: DataSourceType | string;
  /**
   * <p>The AWS IAM service role ARN for the data source. The system assumes this role when
   *          accessing the data source.</p>
   */
  serviceRoleArn?: string;
  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;
  /**
   * <p>AWS Lambda settings.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;
  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: HttpDataSourceConfig;
  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
}
export declare namespace DataSource {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DataSource) => any;
}
export interface CreateDataSourceResponse {
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}
export declare namespace CreateDataSourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDataSourceResponse) => any;
}
export declare enum ConflictDetectionType {
  NONE = "NONE",
  VERSION = "VERSION",
}
export declare enum ConflictHandlerType {
  AUTOMERGE = "AUTOMERGE",
  LAMBDA = "LAMBDA",
  NONE = "NONE",
  OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY",
}
/**
 * <p>The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the
 *          Conflict Handler.</p>
 */
export interface LambdaConflictHandlerConfig {
  /**
   * <p>The Arn for the Lambda function to use as the Conflict Handler.</p>
   */
  lambdaConflictHandlerArn?: string;
}
export declare namespace LambdaConflictHandlerConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LambdaConflictHandlerConfig) => any;
}
/**
 * <p>Describes a Sync configuration for a resolver.</p>
 *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
 *          be performed when the resolver is invoked.</p>
 */
export interface SyncConfig {
  /**
   * <p>The Conflict Resolution strategy to perform in the event of a conflict.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>OPTIMISTIC_CONCURRENCY</b>: Resolve conflicts by
   *                rejecting mutations when versions do not match the latest version at the
   *                server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AUTOMERGE</b>: Resolve conflicts with the
   *                Automerge conflict resolution strategy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>LAMBDA</b>: Resolve conflicts with a Lambda
   *                function supplied in the LambdaConflictHandlerConfig.</p>
   *             </li>
   *          </ul>
   */
  conflictHandler?: ConflictHandlerType | string;
  /**
   * <p>The Conflict Detection strategy to use.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>VERSION</b>: Detect conflicts based on object
   *                versions for this resolver.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: Do not detect conflicts when executing
   *                this resolver.</p>
   *             </li>
   *          </ul>
   */
  conflictDetection?: ConflictDetectionType | string;
  /**
   * <p>The <code>LambdaConflictHandlerConfig</code> when configuring LAMBDA as the Conflict
   *          Handler.</p>
   */
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}
export declare namespace SyncConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SyncConfig) => any;
}
export interface CreateFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The <code>Function</code> name. The function name does not have to be unique.</p>
   */
  name: string | undefined;
  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;
  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;
  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;
  /**
   * <p>The <code>Function</code> response mapping template. </p>
   */
  responseMappingTemplate?: string;
  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value
   *          is 2018-05-29. </p>
   */
  functionVersion: string | undefined;
  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
   *          be performed when the resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;
}
export declare namespace CreateFunctionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateFunctionRequest) => any;
}
/**
 * <p>A function is a reusable entity. Multiple functions can be used to compose the resolver
 *          logic.</p>
 */
export interface FunctionConfiguration {
  /**
   * <p>A unique ID representing the <code>Function</code> object.</p>
   */
  functionId?: string;
  /**
   * <p>The ARN of the <code>Function</code> object.</p>
   */
  functionArn?: string;
  /**
   * <p>The name of the <code>Function</code> object.</p>
   */
  name?: string;
  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;
  /**
   * <p>The name of the <code>DataSource</code>.</p>
   */
  dataSourceName?: string;
  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;
  /**
   * <p>The <code>Function</code> response mapping template.</p>
   */
  responseMappingTemplate?: string;
  /**
   * <p>The version of the request mapping template. Currently only the 2018-05-29 version of
   *          the template is supported.</p>
   */
  functionVersion?: string;
  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
   *          be performed when the resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;
}
export declare namespace FunctionConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FunctionConfiguration) => any;
}
export interface CreateFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}
export declare namespace CreateFunctionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateFunctionResponse) => any;
}
export declare enum FieldLogLevel {
  ALL = "ALL",
  ERROR = "ERROR",
  NONE = "NONE",
}
/**
 * <p>The CloudWatch Logs configuration.</p>
 */
export interface LogConfig {
  /**
   * <p>The field logging level. Values can be NONE, ERROR, or ALL. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NONE</b>: No field-level logs are
   *                captured.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b>: Logs the following information only for
   *                the fields that are in error:</p>
   *                <ul>
   *                   <li>
   *                      <p>The error section in the server response.</p>
   *                   </li>
   *                   <li>
   *                      <p>Field-level errors.</p>
   *                   </li>
   *                   <li>
   *                      <p>The generated request/response functions that got resolved for error
   *                      fields.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ALL</b>: The following information is logged for
   *                all fields in the query:</p>
   *                <ul>
   *                   <li>
   *                      <p>Field-level tracing information.</p>
   *                   </li>
   *                   <li>
   *                      <p>The generated request/response functions that got resolved for each
   *                      field.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  fieldLogLevel: FieldLogLevel | string | undefined;
  /**
   * <p>The service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in
   *          your account. </p>
   */
  cloudWatchLogsRoleArn: string | undefined;
  /**
   * <p>Set to TRUE to exclude sections that contain information such as headers, context, and
   *          evaluated mapping templates, regardless of logging level.</p>
   */
  excludeVerboseContent?: boolean;
}
export declare namespace LogConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LogConfig) => any;
}
export declare enum DefaultAction {
  ALLOW = "ALLOW",
  DENY = "DENY",
}
/**
 * <p>Describes an Amazon Cognito user pool configuration.</p>
 */
export interface UserPoolConfig {
  /**
   * <p>The user pool ID.</p>
   */
  userPoolId: string | undefined;
  /**
   * <p>The AWS Region in which the user pool was created.</p>
   */
  awsRegion: string | undefined;
  /**
   * <p>The action that you want your GraphQL API to take when a request that uses Amazon
   *          Cognito user pool authentication doesn't match the Amazon Cognito user pool
   *          configuration.</p>
   */
  defaultAction: DefaultAction | string | undefined;
  /**
   * <p>A regular expression for validating the incoming Amazon Cognito user pool app client
   *          ID.</p>
   */
  appIdClientRegex?: string;
}
export declare namespace UserPoolConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UserPoolConfig) => any;
}
export interface CreateGraphqlApiRequest {
  /**
   * <p>A user-supplied name for the <code>GraphqlApi</code>.</p>
   */
  name: string | undefined;
  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;
  /**
   * <p>The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType: AuthenticationType | string | undefined;
  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;
  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;
  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: {
    [key: string]: string;
  };
  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  /**
   * <p>A flag indicating whether to enable X-Ray tracing for the
   *          <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;
}
export declare namespace CreateGraphqlApiRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateGraphqlApiRequest) => any;
}
/**
 * <p>Describes a GraphQL API.</p>
 */
export interface GraphqlApi {
  /**
   * <p>The API name.</p>
   */
  name?: string;
  /**
   * <p>The API ID.</p>
   */
  apiId?: string;
  /**
   * <p>The authentication type.</p>
   */
  authenticationType?: AuthenticationType | string;
  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: LogConfig;
  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: UserPoolConfig;
  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;
  /**
   * <p>The ARN.</p>
   */
  arn?: string;
  /**
   * <p>The URIs.</p>
   */
  uris?: {
    [key: string]: string;
  };
  /**
   * <p>The tags.</p>
   */
  tags?: {
    [key: string]: string;
  };
  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  /**
   * <p>A flag representing whether X-Ray tracing is enabled for this
   *          <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;
  /**
   * <p>The ARN of the AWS Web Application Firewall (WAF) ACL associated with this
   *          <code>GraphqlApi</code>, if one exists.</p>
   */
  wafWebAclArn?: string;
}
export declare namespace GraphqlApi {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GraphqlApi) => any;
}
export interface CreateGraphqlApiResponse {
  /**
   * <p>The <code>GraphqlApi</code>.</p>
   */
  graphqlApi?: GraphqlApi;
}
export declare namespace CreateGraphqlApiResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateGraphqlApiResponse) => any;
}
/**
 * <p>The caching configuration for a resolver that has caching enabled.</p>
 */
export interface CachingConfig {
  /**
   * <p>The TTL in seconds for a resolver that has caching enabled.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl?: number;
  /**
   * <p>The caching keys for a resolver that has caching enabled.</p>
   *          <p>Valid values are entries from the <code>$context.arguments</code>,
   *             <code>$context.source</code>, and <code>$context.identity</code> maps.</p>
   */
  cachingKeys?: string[];
}
export declare namespace CachingConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CachingConfig) => any;
}
export declare enum ResolverKind {
  PIPELINE = "PIPELINE",
  UNIT = "UNIT",
}
/**
 * <p>The pipeline configuration for a resolver of kind <code>PIPELINE</code>.</p>
 */
export interface PipelineConfig {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: string[];
}
export declare namespace PipelineConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PipelineConfig) => any;
}
export interface CreateResolverRequest {
  /**
   * <p>The ID for the GraphQL API for which the resolver is being created.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The name of the <code>Type</code>.</p>
   */
  typeName: string | undefined;
  /**
   * <p>The name of the field to attach the resolver to.</p>
   */
  fieldName: string | undefined;
  /**
   * <p>The name of the data source for which the resolver is being created.</p>
   */
  dataSourceName?: string;
  /**
   * <p>The mapping template to be used for requests.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using a Lambda data source. For all
   *          other data sources, VTL request and response mapping templates are required.</p>
   */
  requestMappingTemplate?: string;
  /**
   * <p>The mapping template to be used for responses from the data source.</p>
   */
  responseMappingTemplate?: string;
  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. A UNIT resolver enables you to execute a GraphQL query
   *                against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE
   *                resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                You can use a pipeline resolver to execute a GraphQL query against multiple data
   *                sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;
  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;
  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;
  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;
}
export declare namespace CreateResolverRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateResolverRequest) => any;
}
/**
 * <p>Describes a resolver.</p>
 */
export interface Resolver {
  /**
   * <p>The resolver type name.</p>
   */
  typeName?: string;
  /**
   * <p>The resolver field name.</p>
   */
  fieldName?: string;
  /**
   * <p>The resolver data source name.</p>
   */
  dataSourceName?: string;
  /**
   * <p>The resolver ARN.</p>
   */
  resolverArn?: string;
  /**
   * <p>The request mapping template.</p>
   */
  requestMappingTemplate?: string;
  /**
   * <p>The response mapping template.</p>
   */
  responseMappingTemplate?: string;
  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. A UNIT resolver enables you to execute a GraphQL query
   *                against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE
   *                resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                You can use a pipeline resolver to execute a GraphQL query against multiple data
   *                sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;
  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;
  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;
  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;
}
export declare namespace Resolver {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Resolver) => any;
}
export interface CreateResolverResponse {
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}
export declare namespace CreateResolverResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateResolverResponse) => any;
}
export declare enum TypeDefinitionFormat {
  JSON = "JSON",
  SDL = "SDL",
}
export interface CreateTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  definition: string | undefined;
  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
}
export declare namespace CreateTypeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateTypeRequest) => any;
}
/**
 * <p>Describes a type.</p>
 */
export interface Type {
  /**
   * <p>The type name.</p>
   */
  name?: string;
  /**
   * <p>The type description.</p>
   */
  description?: string;
  /**
   * <p>The type ARN.</p>
   */
  arn?: string;
  /**
   * <p>The type definition.</p>
   */
  definition?: string;
  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format?: TypeDefinitionFormat | string;
}
export declare namespace Type {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Type) => any;
}
export interface CreateTypeResponse {
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}
export declare namespace CreateTypeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateTypeResponse) => any;
}
/**
 * <p>Represents the input of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}
export declare namespace DeleteApiCacheRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteApiCacheRequest) => any;
}
/**
 * <p>Represents the output of a <code>DeleteApiCache</code> operation.</p>
 */
export interface DeleteApiCacheResponse {}
export declare namespace DeleteApiCacheResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteApiCacheResponse) => any;
}
export interface DeleteApiKeyRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The ID for the API key.</p>
   */
  id: string | undefined;
}
export declare namespace DeleteApiKeyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteApiKeyRequest) => any;
}
export interface DeleteApiKeyResponse {}
export declare namespace DeleteApiKeyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteApiKeyResponse) => any;
}
export interface DeleteDataSourceRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The name of the data source.</p>
   */
  name: string | undefined;
}
export declare namespace DeleteDataSourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDataSourceRequest) => any;
}
export interface DeleteDataSourceResponse {}
export declare namespace DeleteDataSourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDataSourceResponse) => any;
}
export interface DeleteFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The <code>Function</code> ID.</p>
   */
  functionId: string | undefined;
}
export declare namespace DeleteFunctionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteFunctionRequest) => any;
}
export interface DeleteFunctionResponse {}
export declare namespace DeleteFunctionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteFunctionResponse) => any;
}
export interface DeleteGraphqlApiRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}
export declare namespace DeleteGraphqlApiRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteGraphqlApiRequest) => any;
}
export interface DeleteGraphqlApiResponse {}
export declare namespace DeleteGraphqlApiResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteGraphqlApiResponse) => any;
}
export interface DeleteResolverRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The name of the resolver type.</p>
   */
  typeName: string | undefined;
  /**
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;
}
export declare namespace DeleteResolverRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteResolverRequest) => any;
}
export interface DeleteResolverResponse {}
export declare namespace DeleteResolverResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteResolverResponse) => any;
}
export interface DeleteTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;
}
export declare namespace DeleteTypeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteTypeRequest) => any;
}
export interface DeleteTypeResponse {}
export declare namespace DeleteTypeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteTypeResponse) => any;
}
/**
 * <p>Represents the input of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}
export declare namespace FlushApiCacheRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FlushApiCacheRequest) => any;
}
/**
 * <p>Represents the output of a <code>FlushApiCache</code> operation.</p>
 */
export interface FlushApiCacheResponse {}
export declare namespace FlushApiCacheResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FlushApiCacheResponse) => any;
}
/**
 * <p>Represents the input of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}
export declare namespace GetApiCacheRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetApiCacheRequest) => any;
}
/**
 * <p>Represents the output of a <code>GetApiCache</code> operation.</p>
 */
export interface GetApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}
export declare namespace GetApiCacheResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetApiCacheResponse) => any;
}
export interface GetDataSourceRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The name of the data source.</p>
   */
  name: string | undefined;
}
export declare namespace GetDataSourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDataSourceRequest) => any;
}
export interface GetDataSourceResponse {
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}
export declare namespace GetDataSourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDataSourceResponse) => any;
}
export interface GetFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The <code>Function</code> ID.</p>
   */
  functionId: string | undefined;
}
export declare namespace GetFunctionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetFunctionRequest) => any;
}
export interface GetFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}
export declare namespace GetFunctionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetFunctionResponse) => any;
}
export interface GetGraphqlApiRequest {
  /**
   * <p>The API ID for the GraphQL API.</p>
   */
  apiId: string | undefined;
}
export declare namespace GetGraphqlApiRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetGraphqlApiRequest) => any;
}
export interface GetGraphqlApiResponse {
  /**
   * <p>The <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}
export declare namespace GetGraphqlApiResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetGraphqlApiResponse) => any;
}
export declare enum OutputType {
  JSON = "JSON",
  SDL = "SDL",
}
export interface GetIntrospectionSchemaRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The schema format: SDL or JSON.</p>
   */
  format: OutputType | string | undefined;
  /**
   * <p>A flag that specifies whether the schema introspection should contain directives.</p>
   */
  includeDirectives?: boolean;
}
export declare namespace GetIntrospectionSchemaRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetIntrospectionSchemaRequest) => any;
}
export interface GetIntrospectionSchemaResponse {
  /**
   * <p>The schema, in GraphQL Schema Definition Language (SDL) format.</p>
   *          <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL
   *             documentation</a>.</p>
   */
  schema?: Uint8Array;
}
export declare namespace GetIntrospectionSchemaResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetIntrospectionSchemaResponse) => any;
}
/**
 * <p>The GraphQL schema is not valid.</p>
 */
export interface GraphQLSchemaException extends __SmithyException, $MetadataBearer {
  name: "GraphQLSchemaException";
  $fault: "client";
  message?: string;
}
export declare namespace GraphQLSchemaException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GraphQLSchemaException) => any;
}
export interface GetResolverRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The resolver type name.</p>
   */
  typeName: string | undefined;
  /**
   * <p>The resolver field name.</p>
   */
  fieldName: string | undefined;
}
export declare namespace GetResolverRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetResolverRequest) => any;
}
export interface GetResolverResponse {
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}
export declare namespace GetResolverResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetResolverResponse) => any;
}
export interface GetSchemaCreationStatusRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
}
export declare namespace GetSchemaCreationStatusRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSchemaCreationStatusRequest) => any;
}
export declare enum SchemaStatus {
  Active = "ACTIVE",
  Deleting = "DELETING",
  Failed = "FAILED",
  NotApplicable = "NOT_APPLICABLE",
  Processing = "PROCESSING",
  Success = "SUCCESS",
}
export interface GetSchemaCreationStatusResponse {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus | string;
  /**
   * <p>Detailed information about the status of the schema creation operation.</p>
   */
  details?: string;
}
export declare namespace GetSchemaCreationStatusResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSchemaCreationStatusResponse) => any;
}
export interface GetTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;
  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
}
export declare namespace GetTypeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetTypeRequest) => any;
}
export interface GetTypeResponse {
  /**
   * <p>The <code>Type</code> object.</p>
   */
  type?: Type;
}
export declare namespace GetTypeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetTypeResponse) => any;
}
export interface ListApiKeysRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListApiKeysRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListApiKeysRequest) => any;
}
export interface ListApiKeysResponse {
  /**
   * <p>The <code>ApiKey</code> objects.</p>
   */
  apiKeys?: ApiKey[];
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListApiKeysResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListApiKeysResponse) => any;
}
export interface ListDataSourcesRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListDataSourcesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDataSourcesRequest) => any;
}
export interface ListDataSourcesResponse {
  /**
   * <p>The <code>DataSource</code> objects.</p>
   */
  dataSources?: DataSource[];
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListDataSourcesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDataSourcesResponse) => any;
}
export interface ListFunctionsRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListFunctionsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListFunctionsRequest) => any;
}
export interface ListFunctionsResponse {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: FunctionConfiguration[];
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListFunctionsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListFunctionsResponse) => any;
}
export interface ListGraphqlApisRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListGraphqlApisRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListGraphqlApisRequest) => any;
}
export interface ListGraphqlApisResponse {
  /**
   * <p>The <code>GraphqlApi</code> objects.</p>
   */
  graphqlApis?: GraphqlApi[];
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListGraphqlApisResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListGraphqlApisResponse) => any;
}
export interface ListResolversRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The type name.</p>
   */
  typeName: string | undefined;
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListResolversRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListResolversRequest) => any;
}
export interface ListResolversResponse {
  /**
   * <p>The <code>Resolver</code> objects.</p>
   */
  resolvers?: Resolver[];
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListResolversResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListResolversResponse) => any;
}
export interface ListResolversByFunctionRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The Function ID.</p>
   */
  functionId: string | undefined;
  /**
   * <p>An identifier that was returned from the previous call to this operation, which you can
   *          use to return the next set of items in the list.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListResolversByFunctionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListResolversByFunctionRequest) => any;
}
export interface ListResolversByFunctionResponse {
  /**
   * <p>The list of resolvers.</p>
   */
  resolvers?: Resolver[];
  /**
   * <p>An identifier that can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListResolversByFunctionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListResolversByFunctionResponse) => any;
}
export interface ListTagsForResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListTypesRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list. </p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results you want the request to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListTypesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTypesRequest) => any;
}
export interface ListTypesResponse {
  /**
   * <p>The <code>Type</code> objects.</p>
   */
  types?: Type[];
  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set
   *          of items in the list.</p>
   */
  nextToken?: string;
}
export declare namespace ListTypesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTypesResponse) => any;
}
export interface StartSchemaCreationRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The schema definition, in GraphQL schema language format.</p>
   */
  definition: Uint8Array | undefined;
}
export declare namespace StartSchemaCreationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartSchemaCreationRequest) => any;
}
export interface StartSchemaCreationResponse {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When
   *          the schema is in the ACTIVE state, you can add data.</p>
   */
  status?: SchemaStatus | string;
}
export declare namespace StartSchemaCreationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartSchemaCreationResponse) => any;
}
export interface TagResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;
  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags:
    | {
        [key: string]: string;
      }
    | undefined;
}
export declare namespace TagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {}
export declare namespace TagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
  /**
   * <p>The <code>GraphqlApi</code> ARN.</p>
   */
  resourceArn: string | undefined;
  /**
   * <p>A list of <code>TagKey</code> objects.</p>
   */
  tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {}
export declare namespace UntagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
/**
 * <p>Represents the input of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheRequest {
  /**
   * <p>The GraphQL API Id.</p>
   */
  apiId: string | undefined;
  /**
   * <p>TTL in seconds for cache entries.</p>
   *          <p>Valid values are between 1 and 3600 seconds.</p>
   */
  ttl: number | undefined;
  /**
   * <p>Caching behavior.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FULL_REQUEST_CACHING</b>: All requests are fully
   *                cached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PER_RESOLVER_CACHING</b>: Individual resolvers
   *                that you specify are cached.</p>
   *             </li>
   *          </ul>
   */
  apiCachingBehavior: ApiCachingBehavior | string | undefined;
  /**
   * <p>The cache instance type. Valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMALL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XLARGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_2X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_4X</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_8X</code> (not available in all regions)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LARGE_12X</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p>
   *          <p>The following legacy instance types are available, but their use is discouraged:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>T2_SMALL</b>: A t2.small instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>T2_MEDIUM</b>: A t2.medium instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_LARGE</b>: A r4.large instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_XLARGE</b>: A r4.xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p>
   *             </li>
   *          </ul>
   */
  type: ApiCacheType | string | undefined;
}
export declare namespace UpdateApiCacheRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateApiCacheRequest) => any;
}
/**
 * <p>Represents the output of a <code>UpdateApiCache</code> operation.</p>
 */
export interface UpdateApiCacheResponse {
  /**
   * <p>The <code>ApiCache</code> object.</p>
   */
  apiCache?: ApiCache;
}
export declare namespace UpdateApiCacheResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateApiCacheResponse) => any;
}
export interface UpdateApiKeyRequest {
  /**
   * <p>The ID for the GraphQL API.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The API key ID.</p>
   */
  id: string | undefined;
  /**
   * <p>A description of the purpose of the API key.</p>
   */
  description?: string;
  /**
   * <p>The time from update time after which the API key expires. The date is represented as
   *          seconds since the epoch. For more information, see .</p>
   */
  expires?: number;
}
export declare namespace UpdateApiKeyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateApiKeyRequest) => any;
}
export interface UpdateApiKeyResponse {
  /**
   * <p>The API key.</p>
   */
  apiKey?: ApiKey;
}
export declare namespace UpdateApiKeyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateApiKeyResponse) => any;
}
export interface UpdateDataSourceRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The new name for the data source.</p>
   */
  name: string | undefined;
  /**
   * <p>The new description for the data source.</p>
   */
  description?: string;
  /**
   * <p>The new data source type.</p>
   */
  type: DataSourceType | string | undefined;
  /**
   * <p>The new service role ARN for the data source.</p>
   */
  serviceRoleArn?: string;
  /**
   * <p>The new Amazon DynamoDB configuration.</p>
   */
  dynamodbConfig?: DynamodbDataSourceConfig;
  /**
   * <p>The new AWS Lambda configuration.</p>
   */
  lambdaConfig?: LambdaDataSourceConfig;
  /**
   * <p>The new Elasticsearch Service configuration.</p>
   */
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  /**
   * <p>The new HTTP endpoint configuration.</p>
   */
  httpConfig?: HttpDataSourceConfig;
  /**
   * <p>The new relational database configuration.</p>
   */
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
}
export declare namespace UpdateDataSourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateDataSourceRequest) => any;
}
export interface UpdateDataSourceResponse {
  /**
   * <p>The updated <code>DataSource</code> object.</p>
   */
  dataSource?: DataSource;
}
export declare namespace UpdateDataSourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateDataSourceResponse) => any;
}
export interface UpdateFunctionRequest {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The <code>Function</code> name.</p>
   */
  name: string | undefined;
  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;
  /**
   * <p>The function ID.</p>
   */
  functionId: string | undefined;
  /**
   * <p>The <code>Function</code>
   *             <code>DataSource</code> name.</p>
   */
  dataSourceName: string | undefined;
  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the
   *          2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate?: string;
  /**
   * <p>The <code>Function</code> request mapping template. </p>
   */
  responseMappingTemplate?: string;
  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value
   *          is 2018-05-29. </p>
   */
  functionVersion: string | undefined;
  /**
   * <p>Describes a Sync configuration for a resolver.</p>
   *          <p>Contains information on which Conflict Detection as well as Resolution strategy should
   *          be performed when the resolver is invoked.</p>
   */
  syncConfig?: SyncConfig;
}
export declare namespace UpdateFunctionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateFunctionRequest) => any;
}
export interface UpdateFunctionResponse {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: FunctionConfiguration;
}
export declare namespace UpdateFunctionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateFunctionResponse) => any;
}
export interface UpdateGraphqlApiRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The new name for the <code>GraphqlApi</code> object.</p>
   */
  name: string | undefined;
  /**
   * <p>The Amazon CloudWatch Logs configuration for the <code>GraphqlApi</code> object.</p>
   */
  logConfig?: LogConfig;
  /**
   * <p>The new authentication type for the <code>GraphqlApi</code> object.</p>
   */
  authenticationType?: AuthenticationType | string;
  /**
   * <p>The new Amazon Cognito user pool configuration for the <code>GraphqlApi</code>
   *          object.</p>
   */
  userPoolConfig?: UserPoolConfig;
  /**
   * <p>The OpenID Connect configuration for the <code>GraphqlApi</code> object.</p>
   */
  openIDConnectConfig?: OpenIDConnectConfig;
  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code>
   *          API.</p>
   */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  /**
   * <p>A flag indicating whether to enable X-Ray tracing for the
   *          <code>GraphqlApi</code>.</p>
   */
  xrayEnabled?: boolean;
}
export declare namespace UpdateGraphqlApiRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateGraphqlApiRequest) => any;
}
export interface UpdateGraphqlApiResponse {
  /**
   * <p>The updated <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: GraphqlApi;
}
export declare namespace UpdateGraphqlApiResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateGraphqlApiResponse) => any;
}
export interface UpdateResolverRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The new type name.</p>
   */
  typeName: string | undefined;
  /**
   * <p>The new field name.</p>
   */
  fieldName: string | undefined;
  /**
   * <p>The new data source name.</p>
   */
  dataSourceName?: string;
  /**
   * <p>The new request mapping template.</p>
   *          <p>A resolver uses a request mapping template to convert a GraphQL expression into a format
   *          that a data source can understand. Mapping templates are written in Apache Velocity
   *          Template Language (VTL).</p>
   *          <p>VTL request mapping templates are optional when using a Lambda data source. For all
   *          other data sources, VTL request and response mapping templates are required.</p>
   */
  requestMappingTemplate?: string;
  /**
   * <p>The new response mapping template.</p>
   */
  responseMappingTemplate?: string;
  /**
   * <p>The resolver type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is
   *                the default resolver type. A UNIT resolver enables you to execute a GraphQL query
   *                against a single data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE
   *                resolver enables you to execute a series of <code>Function</code> in a serial manner.
   *                You can use a pipeline resolver to execute a GraphQL query against multiple data
   *                sources.</p>
   *             </li>
   *          </ul>
   */
  kind?: ResolverKind | string;
  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: PipelineConfig;
  /**
   * <p>The <code>SyncConfig</code> for a resolver attached to a versioned datasource.</p>
   */
  syncConfig?: SyncConfig;
  /**
   * <p>The caching configuration for the resolver.</p>
   */
  cachingConfig?: CachingConfig;
}
export declare namespace UpdateResolverRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateResolverRequest) => any;
}
export interface UpdateResolverResponse {
  /**
   * <p>The updated <code>Resolver</code> object.</p>
   */
  resolver?: Resolver;
}
export declare namespace UpdateResolverResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateResolverResponse) => any;
}
export interface UpdateTypeRequest {
  /**
   * <p>The API ID.</p>
   */
  apiId: string | undefined;
  /**
   * <p>The new type name.</p>
   */
  typeName: string | undefined;
  /**
   * <p>The new definition.</p>
   */
  definition?: string;
  /**
   * <p>The new type format: SDL or JSON.</p>
   */
  format: TypeDefinitionFormat | string | undefined;
}
export declare namespace UpdateTypeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateTypeRequest) => any;
}
export interface UpdateTypeResponse {
  /**
   * <p>The updated <code>Type</code> object.</p>
   */
  type?: Type;
}
export declare namespace UpdateTypeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateTypeResponse) => any;
}
