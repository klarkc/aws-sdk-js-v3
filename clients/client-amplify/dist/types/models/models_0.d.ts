import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p> A request contains unexpected data. </p>
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
export declare enum Stage {
  BETA = "BETA",
  DEVELOPMENT = "DEVELOPMENT",
  EXPERIMENTAL = "EXPERIMENTAL",
  PRODUCTION = "PRODUCTION",
  PULL_REQUEST = "PULL_REQUEST",
}
/**
 * <p> Describes the automated branch creation configuration. </p>
 */
export interface AutoBranchCreationConfig {
  /**
   * <p> Describes the current stage for the autocreated branch. </p>
   */
  stage?: Stage | string;
  /**
   * <p> The framework for the autocreated branch. </p>
   */
  framework?: string;
  /**
   * <p> Enables auto building for the autocreated branch. </p>
   */
  enableAutoBuild?: boolean;
  /**
   * <p> The environment variables for the autocreated branch. </p>
   */
  environmentVariables?: {
    [key: string]: string;
  };
  /**
   * <p> The basic authorization credentials for the autocreated branch. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> Enables basic authorization for the autocreated branch. </p>
   */
  enableBasicAuth?: boolean;
  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;
  /**
   * <p> The build specification (build spec) for the autocreated branch. </p>
   */
  buildSpec?: string;
  /**
   * <p> Enables pull request previews for the autocreated branch. </p>
   */
  enablePullRequestPreview?: boolean;
  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;
}
export declare namespace AutoBranchCreationConfig {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AutoBranchCreationConfig) => any;
}
/**
 * <p> Describes a custom rewrite or redirect rule. </p>
 */
export interface CustomRule {
  /**
   * <p> The source pattern for a URL rewrite or redirect rule. </p>
   */
  source: string | undefined;
  /**
   * <p> The target pattern for a URL rewrite or redirect rule. </p>
   */
  target: string | undefined;
  /**
   * <p> The status code for a URL rewrite or redirect rule. </p>
   *
   *         <dl>
   *             <dt>200</dt>
   *             <dd>
   *                     <p>Represents a 200 rewrite rule.</p>
   *                 </dd>
   *             <dt>301</dt>
   *             <dd>
   *                     <p>Represents a 301 (moved pemanently) redirect rule. This and all future requests should be directed to the target URL. </p>
   *                 </dd>
   *             <dt>302</dt>
   *             <dd>
   *                     <p>Represents a 302 temporary redirect rule.</p>
   *                 </dd>
   *             <dt>404</dt>
   *             <dd>
   *                     <p>Represents a 404 redirect rule.</p>
   *                 </dd>
   *             <dt>404-200</dt>
   *             <dd>
   *                     <p>Represents a 404 rewrite rule.</p>
   *                 </dd>
   *          </dl>
   */
  status?: string;
  /**
   * <p> The condition for a URL rewrite or redirect rule, such as a country code. </p>
   */
  condition?: string;
}
export declare namespace CustomRule {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CustomRule) => any;
}
export declare enum Platform {
  WEB = "WEB",
}
/**
 * <p> The request structure used to create apps in Amplify. </p>
 */
export interface CreateAppRequest {
  /**
   * <p> The name for an Amplify app. </p>
   */
  name: string | undefined;
  /**
   * <p> The description for an Amplify app. </p>
   */
  description?: string;
  /**
   * <p> The repository for an Amplify app. </p>
   */
  repository?: string;
  /**
   * <p> The platform or framework for an Amplify app. </p>
   */
  platform?: Platform | string;
  /**
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;
  /**
   * <p> The OAuth token for a third-party source control system for an Amplify app. The OAuth
   *             token is used to create a webhook and a read-only deploy key. The OAuth token is not
   *             stored. </p>
   */
  oauthToken?: string;
  /**
   * <p> The personal access token for a third-party source control system for an Amplify app.
   *             The personal access token is used to create a webhook and a read-only deploy key. The
   *             token is not stored. </p>
   */
  accessToken?: string;
  /**
   * <p> The environment variables map for an Amplify app. </p>
   */
  environmentVariables?: {
    [key: string]: string;
  };
  /**
   * <p> Enables the auto building of branches for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;
  /**
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;
  /**
   * <p> Enables basic authorization for an Amplify app. This will apply to all branches that
   *             are part of this app. </p>
   */
  enableBasicAuth?: boolean;
  /**
   * <p> The credentials for basic authorization for an Amplify app. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> The custom rewrite and redirect rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];
  /**
   * <p> The tag for an Amplify app. </p>
   */
  tags?: {
    [key: string]: string;
  };
  /**
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;
  /**
   * <p>The custom HTTP headers for an Amplify app.</p>
   */
  customHeaders?: string;
  /**
   * <p> Enables automated branch creation for an Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;
  /**
   * <p> The automated branch creation glob patterns for an Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];
  /**
   * <p> The automated branch creation configuration for an Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;
}
export declare namespace CreateAppRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppRequest) => any;
}
/**
 * <p> Describes the information about a production branch for an Amplify app. </p>
 */
export interface ProductionBranch {
  /**
   * <p> The last deploy time of the production branch. </p>
   */
  lastDeployTime?: Date;
  /**
   * <p> The status of the production branch. </p>
   */
  status?: string;
  /**
   * <p> The thumbnail URL for the production branch. </p>
   */
  thumbnailUrl?: string;
  /**
   * <p> The branch name for the production branch. </p>
   */
  branchName?: string;
}
export declare namespace ProductionBranch {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ProductionBranch) => any;
}
/**
 * <p> Represents the different branches of a repository for building, deploying, and
 *             hosting an Amplify app. </p>
 */
export interface App {
  /**
   * <p> The unique ID of the Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The Amazon Resource Name (ARN) of the Amplify app. </p>
   */
  appArn: string | undefined;
  /**
   * <p> The name for the Amplify app. </p>
   */
  name: string | undefined;
  /**
   * <p> The tag for the Amplify app. </p>
   */
  tags?: {
    [key: string]: string;
  };
  /**
   * <p> The description for the Amplify app. </p>
   */
  description: string | undefined;
  /**
   * <p> The repository for the Amplify app. </p>
   */
  repository: string | undefined;
  /**
   * <p> The platform for the Amplify app. </p>
   */
  platform: Platform | string | undefined;
  /**
   * <p> Creates a date and time for the Amplify app. </p>
   */
  createTime: Date | undefined;
  /**
   * <p> Updates the date and time for the Amplify app. </p>
   */
  updateTime: Date | undefined;
  /**
   * <p> The AWS Identity and Access Management (IAM) service role for the Amazon Resource
   *             Name (ARN) of the Amplify app. </p>
   */
  iamServiceRoleArn?: string;
  /**
   * <p> The environment variables for the Amplify app. </p>
   */
  environmentVariables:
    | {
        [key: string]: string;
      }
    | undefined;
  /**
   * <p> The default domain for the Amplify app. </p>
   */
  defaultDomain: string | undefined;
  /**
   * <p> Enables the auto-building of branches for the Amplify app. </p>
   */
  enableBranchAutoBuild: boolean | undefined;
  /**
   * <p> Automatically disconnect a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;
  /**
   * <p> Enables basic authorization for the Amplify app's branches. </p>
   */
  enableBasicAuth: boolean | undefined;
  /**
   * <p> The basic authorization credentials for branches for the Amplify app. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> Describes the custom redirect and rewrite rules for the Amplify app. </p>
   */
  customRules?: CustomRule[];
  /**
   * <p> Describes the information about a production branch of the Amplify app. </p>
   */
  productionBranch?: ProductionBranch;
  /**
   * <p> Describes the content of the build specification (build spec) for the Amplify app.
   *         </p>
   */
  buildSpec?: string;
  /**
   * <p>Describes the custom HTTP headers for the Amplify app.</p>
   */
  customHeaders?: string;
  /**
   * <p> Enables automated branch creation for the Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;
  /**
   * <p> Describes the automated branch creation glob patterns for the Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];
  /**
   * <p> Describes the automated branch creation configuration for the Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;
}
export declare namespace App {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: App) => any;
}
export interface CreateAppResult {
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}
export declare namespace CreateAppResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppResult) => any;
}
/**
 * <p> An operation failed because a dependent service threw an exception. </p>
 */
export interface DependentServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "DependentServiceFailureException";
  $fault: "server";
  message?: string;
}
export declare namespace DependentServiceFailureException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DependentServiceFailureException) => any;
}
/**
 * <p> The service failed to perform an operation due to an internal issue. </p>
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
 * <p> A resource could not be created because service quotas were exceeded. </p>
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
 * <p> An operation failed due to a lack of access. </p>
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
/**
 * <p> The request structure for the backend environment create request. </p>
 */
export interface CreateBackendEnvironmentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;
  /**
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;
  /**
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;
}
export declare namespace CreateBackendEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateBackendEnvironmentRequest) => any;
}
/**
 * <p> Describes the backend environment for an Amplify app. </p>
 */
export interface BackendEnvironment {
  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn: string | undefined;
  /**
   * <p> The name for a backend environment that is part of an Amplify app. </p>
   */
  environmentName: string | undefined;
  /**
   * <p> The AWS CloudFormation stack name of a backend environment. </p>
   */
  stackName?: string;
  /**
   * <p> The name of deployment artifacts. </p>
   */
  deploymentArtifacts?: string;
  /**
   * <p> The creation date and time for a backend environment that is part of an Amplify app.
   *         </p>
   */
  createTime: Date | undefined;
  /**
   * <p> The last updated date and time for a backend environment that is part of an Amplify
   *             app. </p>
   */
  updateTime: Date | undefined;
}
export declare namespace BackendEnvironment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BackendEnvironment) => any;
}
/**
 * <p> The result structure for the create backend environment request. </p>
 */
export interface CreateBackendEnvironmentResult {
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}
export declare namespace CreateBackendEnvironmentResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateBackendEnvironmentResult) => any;
}
/**
 * <p> An entity was not found during an operation. </p>
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
 * <p> The request structure for the create branch request. </p>
 */
export interface CreateBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The description for the branch. </p>
   */
  description?: string;
  /**
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage | string;
  /**
   * <p> The framework for the branch. </p>
   */
  framework?: string;
  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;
  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;
  /**
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: {
    [key: string]: string;
  };
  /**
   * <p> The basic authorization credentials for the branch. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;
  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;
  /**
   * <p> The tag for the branch. </p>
   */
  tags?: {
    [key: string]: string;
  };
  /**
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;
  /**
   * <p> The content Time To Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;
  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;
  /**
   * <p> Enables pull request previews for this branch. </p>
   */
  enablePullRequestPreview?: boolean;
  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;
  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}
export declare namespace CreateBranchRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateBranchRequest) => any;
}
/**
 * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
 */
export interface Branch {
  /**
   * <p> The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. </p>
   */
  branchArn: string | undefined;
  /**
   * <p> The name for the branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The description for the branch that is part of an Amplify app. </p>
   */
  description: string | undefined;
  /**
   * <p> The tag for the branch of an Amplify app. </p>
   */
  tags?: {
    [key: string]: string;
  };
  /**
   * <p> The current stage for the branch that is part of an Amplify app. </p>
   */
  stage: Stage | string | undefined;
  /**
   * <p> The display name for the branch. This is used as the default domain prefix. </p>
   */
  displayName: string | undefined;
  /**
   * <p> Enables notifications for a branch that is part of an Amplify app. </p>
   */
  enableNotification: boolean | undefined;
  /**
   * <p> The creation date and time for a branch that is part of an Amplify app. </p>
   */
  createTime: Date | undefined;
  /**
   * <p> The last updated date and time for a branch that is part of an Amplify app. </p>
   */
  updateTime: Date | undefined;
  /**
   * <p> The environment variables specific to a branch of an Amplify app. </p>
   */
  environmentVariables:
    | {
        [key: string]: string;
      }
    | undefined;
  /**
   * <p> Enables auto-building on push for a branch of an Amplify app. </p>
   */
  enableAutoBuild: boolean | undefined;
  /**
   * <p> The custom domains for a branch of an Amplify app. </p>
   */
  customDomains: string[] | undefined;
  /**
   * <p> The framework for a branch of an Amplify app. </p>
   */
  framework: string | undefined;
  /**
   * <p> The ID of the active job for a branch of an Amplify app. </p>
   */
  activeJobId: string | undefined;
  /**
   * <p> The total number of jobs that are part of an Amplify app. </p>
   */
  totalNumberOfJobs: string | undefined;
  /**
   * <p> Enables basic authorization for a branch of an Amplify app. </p>
   */
  enableBasicAuth: boolean | undefined;
  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;
  /**
   * <p> The thumbnail URL for the branch of an Amplify app. </p>
   */
  thumbnailUrl?: string;
  /**
   * <p> The basic authorization credentials for a branch of an Amplify app. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> The build specification (build spec) content for the branch of an Amplify app.
   *         </p>
   */
  buildSpec?: string;
  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl: string | undefined;
  /**
   * <p> A list of custom resources that are linked to this branch. </p>
   */
  associatedResources?: string[];
  /**
   * <p> Enables pull request previews for the branch. </p>
   */
  enablePullRequestPreview: boolean | undefined;
  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;
  /**
   * <p> The destination branch if the branch is a pull request branch. </p>
   */
  destinationBranch?: string;
  /**
   * <p> The source branch if the branch is a pull request branch. </p>
   */
  sourceBranch?: string;
  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}
export declare namespace Branch {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Branch) => any;
}
/**
 * <p> The result structure for create branch request. </p>
 */
export interface CreateBranchResult {
  /**
   * <p> Describes the branch for an Amplify app, which maps to a third-party repository
   *             branch. </p>
   */
  branch: Branch | undefined;
}
export declare namespace CreateBranchResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateBranchResult) => any;
}
/**
 * <p> The request structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;
  /**
   * <p> An optional file map that contains the file name as the key and the file content md5
   *             hash as the value. If this argument is provided, the service will generate a unique
   *             upload URL per file. Otherwise, the service will only generate a single upload URL for
   *             the zipped files. </p>
   */
  fileMap?: {
    [key: string]: string;
  };
}
export declare namespace CreateDeploymentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDeploymentRequest) => any;
}
/**
 * <p> The result structure for the create a new deployment request. </p>
 */
export interface CreateDeploymentResult {
  /**
   * <p> The job ID for this deployment. will supply to start deployment api. </p>
   */
  jobId?: string;
  /**
   * <p> When the <code>fileMap</code> argument is provided in the request,
   *                 <code>fileUploadUrls</code> will contain a map of file names to upload URLs. </p>
   */
  fileUploadUrls:
    | {
        [key: string]: string;
      }
    | undefined;
  /**
   * <p> When the <code>fileMap</code> argument is not provided in the request, this
   *                 <code>zipUploadUrl</code> is returned. </p>
   */
  zipUploadUrl: string | undefined;
}
export declare namespace CreateDeploymentResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDeploymentResult) => any;
}
/**
 * <p> Describes the settings for the subdomain. </p>
 */
export interface SubDomainSetting {
  /**
   * <p> The prefix setting for the subdomain. </p>
   */
  prefix: string | undefined;
  /**
   * <p> The branch name setting for the subdomain. </p>
   */
  branchName: string | undefined;
}
export declare namespace SubDomainSetting {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SubDomainSetting) => any;
}
/**
 * <p> The request structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The domain name for the domain association. </p>
   */
  domainName: string | undefined;
  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;
  /**
   * <p> The setting for the subdomain. </p>
   */
  subDomainSettings: SubDomainSetting[] | undefined;
  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];
  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
}
export declare namespace CreateDomainAssociationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDomainAssociationRequest) => any;
}
export declare enum DomainStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_DEPLOYMENT = "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE = "REQUESTING_CERTIFICATE",
  UPDATING = "UPDATING",
}
/**
 * <p> The subdomain for the domain association. </p>
 */
export interface SubDomain {
  /**
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSetting: SubDomainSetting | undefined;
  /**
   * <p> The verified status of the subdomain </p>
   */
  verified: boolean | undefined;
  /**
   * <p> The DNS record for the subdomain. </p>
   */
  dnsRecord: string | undefined;
}
export declare namespace SubDomain {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SubDomain) => any;
}
/**
 * <p> Describes a domain association that associates a custom domain with an Amplify app.
 *         </p>
 */
export interface DomainAssociation {
  /**
   * <p> The Amazon Resource Name (ARN) for the domain association. </p>
   */
  domainAssociationArn: string | undefined;
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain: boolean | undefined;
  /**
   * <p> Sets branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];
  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
  /**
   * <p> The current status of the domain association. </p>
   */
  domainStatus: DomainStatus | string | undefined;
  /**
   * <p> The reason for the current status of the domain association. </p>
   */
  statusReason: string | undefined;
  /**
   * <p> The DNS record for certificate verification. </p>
   */
  certificateVerificationDNSRecord?: string;
  /**
   * <p> The subdomains for the domain association. </p>
   */
  subDomains: SubDomain[] | undefined;
}
export declare namespace DomainAssociation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DomainAssociation) => any;
}
/**
 * <p> The result structure for the create domain association request. </p>
 */
export interface CreateDomainAssociationResult {
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}
export declare namespace CreateDomainAssociationResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDomainAssociationResult) => any;
}
/**
 * <p> The request structure for the create webhook request. </p>
 */
export interface CreateWebhookRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The description for a webhook. </p>
   */
  description?: string;
}
export declare namespace CreateWebhookRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateWebhookRequest) => any;
}
/**
 * <p> Describes a webhook that connects repository events to an Amplify app. </p>
 */
export interface Webhook {
  /**
   * <p> The Amazon Resource Name (ARN) for the webhook. </p>
   */
  webhookArn: string | undefined;
  /**
   * <p> The ID of the webhook. </p>
   */
  webhookId: string | undefined;
  /**
   * <p> The URL of the webhook. </p>
   */
  webhookUrl: string | undefined;
  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The description for a webhook. </p>
   */
  description: string | undefined;
  /**
   * <p> The create date and time for a webhook. </p>
   */
  createTime: Date | undefined;
  /**
   * <p> Updates the date and time for a webhook. </p>
   */
  updateTime: Date | undefined;
}
export declare namespace Webhook {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Webhook) => any;
}
/**
 * <p> The result structure for the create webhook request. </p>
 */
export interface CreateWebhookResult {
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}
export declare namespace CreateWebhookResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateWebhookResult) => any;
}
/**
 * <p> Describes the request structure for the delete app request. </p>
 */
export interface DeleteAppRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}
export declare namespace DeleteAppRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAppRequest) => any;
}
/**
 * <p> The result structure for the delete app request. </p>
 */
export interface DeleteAppResult {
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}
export declare namespace DeleteAppResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAppResult) => any;
}
/**
 * <p> The request structure for the delete backend environment request. </p>
 */
export interface DeleteBackendEnvironmentRequest {
  /**
   * <p> The unique ID of an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name of a backend environment of an Amplify app. </p>
   */
  environmentName: string | undefined;
}
export declare namespace DeleteBackendEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteBackendEnvironmentRequest) => any;
}
/**
 * <p> The result structure of the delete backend environment result. </p>
 */
export interface DeleteBackendEnvironmentResult {
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}
export declare namespace DeleteBackendEnvironmentResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteBackendEnvironmentResult) => any;
}
/**
 * <p> The request structure for the delete branch request. </p>
 */
export interface DeleteBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}
export declare namespace DeleteBranchRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteBranchRequest) => any;
}
/**
 * <p> The result structure for the delete branch request. </p>
 */
export interface DeleteBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}
export declare namespace DeleteBranchResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteBranchResult) => any;
}
/**
 * <p> The request structure for the delete domain association request. </p>
 */
export interface DeleteDomainAssociationRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}
export declare namespace DeleteDomainAssociationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDomainAssociationRequest) => any;
}
export interface DeleteDomainAssociationResult {
  /**
   * <p> Describes a domain association that associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}
export declare namespace DeleteDomainAssociationResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDomainAssociationResult) => any;
}
/**
 * <p> The request structure for the delete job request. </p>
 */
export interface DeleteJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
}
export declare namespace DeleteJobRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteJobRequest) => any;
}
export declare enum JobType {
  MANUAL = "MANUAL",
  RELEASE = "RELEASE",
  RETRY = "RETRY",
  WEB_HOOK = "WEB_HOOK",
}
export declare enum JobStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PROVISIONING = "PROVISIONING",
  RUNNING = "RUNNING",
  SUCCEED = "SUCCEED",
}
/**
 * <p> Describes the summary for an execution job for an Amplify app. </p>
 */
export interface JobSummary {
  /**
   * <p> The Amazon Resource Name (ARN) for the job. </p>
   */
  jobArn: string | undefined;
  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId: string | undefined;
  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage: string | undefined;
  /**
   * <p> The commit date and time for the job. </p>
   */
  commitTime: Date | undefined;
  /**
   * <p> The start date and time for the job. </p>
   */
  startTime: Date | undefined;
  /**
   * <p> The current status for the job. </p>
   */
  status: JobStatus | string | undefined;
  /**
   * <p> The end date and time for the job. </p>
   */
  endTime?: Date;
  /**
   * <p> The type for the job. If the value is <code>RELEASE</code>, the job was manually
   *             released from its source by using the <code>StartJob</code> API. If the value is
   *                 <code>RETRY</code>, the job was manually retried using the <code>StartJob</code>
   *             API. If the value is <code>WEB_HOOK</code>, the job was automatically triggered by
   *             webhooks. </p>
   */
  jobType: JobType | string | undefined;
}
export declare namespace JobSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: JobSummary) => any;
}
/**
 * <p> The result structure for the delete job request. </p>
 */
export interface DeleteJobResult {
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  jobSummary: JobSummary | undefined;
}
export declare namespace DeleteJobResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteJobResult) => any;
}
/**
 * <p> The request structure for the delete webhook request. </p>
 */
export interface DeleteWebhookRequest {
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}
export declare namespace DeleteWebhookRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteWebhookRequest) => any;
}
/**
 * <p> The result structure for the delete webhook request. </p>
 */
export interface DeleteWebhookResult {
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}
export declare namespace DeleteWebhookResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteWebhookResult) => any;
}
/**
 * <p> The request structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsRequest {
  /**
   * <p> The time at which the logs should start. The time range specified is inclusive of the
   *             start time. </p>
   */
  startTime?: Date;
  /**
   * <p> The time at which the logs should end. The time range specified is inclusive of the
   *             end time. </p>
   */
  endTime?: Date;
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}
export declare namespace GenerateAccessLogsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GenerateAccessLogsRequest) => any;
}
/**
 * <p> The result structure for the generate access logs request. </p>
 */
export interface GenerateAccessLogsResult {
  /**
   * <p> The pre-signed URL for the requested access logs. </p>
   */
  logUrl?: string;
}
export declare namespace GenerateAccessLogsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GenerateAccessLogsResult) => any;
}
/**
 * <p> The request structure for the get app request. </p>
 */
export interface GetAppRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
}
export declare namespace GetAppRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppRequest) => any;
}
export interface GetAppResult {
  /**
   * <p> Represents the different branches of a repository for building, deploying, and
   *             hosting an Amplify app. </p>
   */
  app: App | undefined;
}
export declare namespace GetAppResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppResult) => any;
}
/**
 * <p> Returns the request structure for the get artifact request. </p>
 */
export interface GetArtifactUrlRequest {
  /**
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;
}
export declare namespace GetArtifactUrlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetArtifactUrlRequest) => any;
}
/**
 * <p> Returns the result structure for the get artifact request. </p>
 */
export interface GetArtifactUrlResult {
  /**
   * <p> The unique ID for an artifact. </p>
   */
  artifactId: string | undefined;
  /**
   * <p> The presigned URL for the artifact. </p>
   */
  artifactUrl: string | undefined;
}
export declare namespace GetArtifactUrlResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetArtifactUrlResult) => any;
}
/**
 * <p> The request structure for the get backend environment request. </p>
 */
export interface GetBackendEnvironmentRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the backend environment. </p>
   */
  environmentName: string | undefined;
}
export declare namespace GetBackendEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetBackendEnvironmentRequest) => any;
}
/**
 * <p> The result structure for the get backend environment result. </p>
 */
export interface GetBackendEnvironmentResult {
  /**
   * <p> Describes the backend environment for an Amplify app. </p>
   */
  backendEnvironment: BackendEnvironment | undefined;
}
export declare namespace GetBackendEnvironmentResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetBackendEnvironmentResult) => any;
}
/**
 * <p> The request structure for the get branch request. </p>
 */
export interface GetBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
}
export declare namespace GetBranchRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetBranchRequest) => any;
}
export interface GetBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}
export declare namespace GetBranchResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetBranchResult) => any;
}
/**
 * <p> The request structure for the get domain association request. </p>
 */
export interface GetDomainAssociationRequest {
  /**
   * <p> The unique id for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
}
export declare namespace GetDomainAssociationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDomainAssociationRequest) => any;
}
/**
 * <p> The result structure for the get domain association request. </p>
 */
export interface GetDomainAssociationResult {
  /**
   * <p> Describes the structure of a domain association, which associates a custom domain
   *             with an Amplify app. </p>
   */
  domainAssociation: DomainAssociation | undefined;
}
export declare namespace GetDomainAssociationResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDomainAssociationResult) => any;
}
/**
 * <p> The request structure for the get job request. </p>
 */
export interface GetJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The unique ID for the job. </p>
   */
  jobId: string | undefined;
}
export declare namespace GetJobRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetJobRequest) => any;
}
/**
 * <p> Describes an execution step, for an execution job, for an Amplify app. </p>
 */
export interface Step {
  /**
   * <p> The name of the execution step. </p>
   */
  stepName: string | undefined;
  /**
   * <p> The start date and time of the execution step. </p>
   */
  startTime: Date | undefined;
  /**
   * <p> The status of the execution step. </p>
   */
  status: JobStatus | string | undefined;
  /**
   * <p> The end date and time of the execution step. </p>
   */
  endTime: Date | undefined;
  /**
   * <p> The URL to the logs for the execution step. </p>
   */
  logUrl?: string;
  /**
   * <p> The URL to the artifact for the execution step. </p>
   */
  artifactsUrl?: string;
  /**
   * <p> The URL to the test artifact for the execution step. </p>
   */
  testArtifactsUrl?: string;
  /**
   * <p> The URL to the test configuration for the execution step. </p>
   */
  testConfigUrl?: string;
  /**
   * <p> The list of screenshot URLs for the execution step, if relevant. </p>
   */
  screenshots?: {
    [key: string]: string;
  };
  /**
   * <p> The reason for the current step status. </p>
   */
  statusReason?: string;
  /**
   * <p> The context for the current step. Includes a build image if the step is build.
   *         </p>
   */
  context?: string;
}
export declare namespace Step {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Step) => any;
}
/**
 * <p> Describes an execution job for an Amplify app. </p>
 */
export interface Job {
  /**
   * <p> Describes the summary for an execution job for an Amplify app. </p>
   */
  summary: JobSummary | undefined;
  /**
   * <p> The execution steps for an execution job, for an Amplify app. </p>
   */
  steps: Step[] | undefined;
}
export declare namespace Job {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Job) => any;
}
export interface GetJobResult {
  /**
   * <p> Describes an execution job for an Amplify app. </p>
   */
  job: Job | undefined;
}
export declare namespace GetJobResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetJobResult) => any;
}
/**
 * <p> The request structure for the get webhook request. </p>
 */
export interface GetWebhookRequest {
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
}
export declare namespace GetWebhookRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetWebhookRequest) => any;
}
/**
 * <p> The result structure for the get webhook request. </p>
 */
export interface GetWebhookResult {
  /**
   * <p> Describes the structure of a webhook. </p>
   */
  webhook: Webhook | undefined;
}
export declare namespace GetWebhookResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetWebhookResult) => any;
}
/**
 * <p> The request structure for the list apps request. </p>
 */
export interface ListAppsRequest {
  /**
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListAppsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppsRequest) => any;
}
/**
 * <p> The result structure for an Amplify app list request. </p>
 */
export interface ListAppsResult {
  /**
   * <p> A list of Amplify apps. </p>
   */
  apps: App[] | undefined;
  /**
   * <p> A pagination token. Set to null to start listing apps from start. If non-null, the
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;
}
export declare namespace ListAppsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppsResult) => any;
}
/**
 * <p> Describes the request structure for the list artifacts request. </p>
 */
export interface ListArtifactsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name of a branch that is part of an Amplify app. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The unique ID for a job. </p>
   */
  jobId: string | undefined;
  /**
   * <p> A pagination token. Set to null to start listing artifacts from start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more artifacts.
   *         </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListArtifactsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListArtifactsRequest) => any;
}
/**
 * <p> Describes an artifact. </p>
 */
export interface Artifact {
  /**
   * <p> The file name for the artifact. </p>
   */
  artifactFileName: string | undefined;
  /**
   * <p> The unique ID for the artifact. </p>
   */
  artifactId: string | undefined;
}
export declare namespace Artifact {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Artifact) => any;
}
/**
 * <p> The result structure for the list artifacts request. </p>
 */
export interface ListArtifactsResult {
  /**
   * <p> A list of artifacts. </p>
   */
  artifacts: Artifact[] | undefined;
  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}
export declare namespace ListArtifactsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListArtifactsResult) => any;
}
/**
 * <p> The request structure for the list backend environments request. </p>
 */
export interface ListBackendEnvironmentsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name of the backend environment </p>
   */
  environmentName?: string;
  /**
   * <p> A pagination token. Set to null to start listing backend environments from the start.
   *             If a non-null pagination token is returned in a result, pass its value in here to list
   *             more backend environments. </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListBackendEnvironmentsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListBackendEnvironmentsRequest) => any;
}
/**
 * <p> The result structure for the list backend environments result. </p>
 */
export interface ListBackendEnvironmentsResult {
  /**
   * <p> The list of backend environments for an Amplify app. </p>
   */
  backendEnvironments: BackendEnvironment[] | undefined;
  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}
export declare namespace ListBackendEnvironmentsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListBackendEnvironmentsResult) => any;
}
/**
 * <p> The request structure for the list branches request. </p>
 */
export interface ListBranchesRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> A pagination token. Set to null to start listing branches from the start. If a
   *             non-null pagination token is returned in a result, pass its value in here to list more
   *             branches. </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListBranchesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListBranchesRequest) => any;
}
/**
 * <p> The result structure for the list branches request. </p>
 */
export interface ListBranchesResult {
  /**
   * <p> A list of branches for an Amplify app. </p>
   */
  branches: Branch[] | undefined;
  /**
   * <p> A pagination token. If a non-null pagination token is returned in a result, pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}
export declare namespace ListBranchesResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListBranchesResult) => any;
}
/**
 * <p> The request structure for the list domain associations request. </p>
 */
export interface ListDomainAssociationsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> A pagination token. Set to null to start listing apps from the start. If non-null, a
   *             pagination token is returned in a result. Pass its value in here to list more projects.
   *         </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListDomainAssociationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDomainAssociationsRequest) => any;
}
/**
 * <p> The result structure for the list domain association request. </p>
 */
export interface ListDomainAssociationsResult {
  /**
   * <p> A list of domain associations. </p>
   */
  domainAssociations: DomainAssociation[] | undefined;
  /**
   * <p> A pagination token. If non-null, a pagination token is returned in a result. Pass its
   *             value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}
export declare namespace ListDomainAssociationsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDomainAssociationsResult) => any;
}
/**
 * <p> The request structure for the list jobs request. </p>
 */
export interface ListJobsRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for a branch. </p>
   */
  branchName: string | undefined;
  /**
   * <p> A pagination token. Set to null to start listing steps from the start. If a non-null
   *             pagination token is returned in a result, pass its value in here to list more steps.
   *         </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListJobsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListJobsRequest) => any;
}
/**
 * <p> The maximum number of records to list in a single response. </p>
 */
export interface ListJobsResult {
  /**
   * <p> The result structure for the list job result request. </p>
   */
  jobSummaries: JobSummary[] | undefined;
  /**
   * <p> A pagination token. If non-null the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}
export declare namespace ListJobsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListJobsResult) => any;
}
/**
 * <p> The request structure to use to list tags for a resource. </p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to list tags. </p>
   */
  resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
/**
 * <p> The response for the list tags for resource request. </p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A list of tags for the specified The Amazon Resource Name (ARN). </p>
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
/**
 * <p> An operation failed due to a non-existent resource. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}
export declare namespace ResourceNotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p> The request structure for the list webhooks request. </p>
 */
export interface ListWebhooksRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> A pagination token. Set to null to start listing webhooks from the start. If
   *             non-null,the pagination token is returned in a result. Pass its value in here to list
   *             more webhooks. </p>
   */
  nextToken?: string;
  /**
   * <p> The maximum number of records to list in a single response. </p>
   */
  maxResults?: number;
}
export declare namespace ListWebhooksRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListWebhooksRequest) => any;
}
/**
 * <p> The result structure for the list webhooks request. </p>
 */
export interface ListWebhooksResult {
  /**
   * <p> A list of webhooks. </p>
   */
  webhooks: Webhook[] | undefined;
  /**
   * <p> A pagination token. If non-null, the pagination token is returned in a result. Pass
   *             its value in another request to retrieve more entries. </p>
   */
  nextToken?: string;
}
export declare namespace ListWebhooksResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListWebhooksResult) => any;
}
/**
 * <p> The request structure for the start a deployment request. </p>
 */
export interface StartDeploymentRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The job ID for this deployment, generated by the create deployment request. </p>
   */
  jobId?: string;
  /**
   * <p> The source URL for this deployment, used when calling start deployment without create
   *             deployment. The source URL can be any HTTP GET URL that is publicly accessible and
   *             downloads a single .zip file. </p>
   */
  sourceUrl?: string;
}
export declare namespace StartDeploymentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartDeploymentRequest) => any;
}
/**
 * <p> The result structure for the start a deployment request. </p>
 */
export interface StartDeploymentResult {
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}
export declare namespace StartDeploymentResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartDeploymentResult) => any;
}
/**
 * <p> The request structure for the start job request. </p>
 */
export interface StartJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The branch name for the job. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The unique ID for an existing job. This is required if the value of
   *                 <code>jobType</code> is <code>RETRY</code>. </p>
   */
  jobId?: string;
  /**
   * <p> Describes the type for the job. The job type <code>RELEASE</code> starts a new job
   *             with the latest change from the specified branch. This value is available only for apps
   *             that are connected to a repository. The job type <code>RETRY</code> retries an existing
   *             job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also
   *             required. </p>
   */
  jobType: JobType | string | undefined;
  /**
   * <p> A descriptive reason for starting this job. </p>
   */
  jobReason?: string;
  /**
   * <p> The commit ID from a third-party repository provider for the job. </p>
   */
  commitId?: string;
  /**
   * <p> The commit message from a third-party repository provider for the job. </p>
   */
  commitMessage?: string;
  /**
   * <p> The commit date and time for the job. </p>
   */
  commitTime?: Date;
}
export declare namespace StartJobRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartJobRequest) => any;
}
/**
 * <p> The result structure for the run job request. </p>
 */
export interface StartJobResult {
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}
export declare namespace StartJobResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartJobResult) => any;
}
/**
 * <p> The request structure for the stop job request. </p>
 */
export interface StopJobRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch, for the job. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The unique id for the job. </p>
   */
  jobId: string | undefined;
}
export declare namespace StopJobRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StopJobRequest) => any;
}
/**
 * <p> The result structure for the stop job request. </p>
 */
export interface StopJobResult {
  /**
   * <p> The summary for the job. </p>
   */
  jobSummary: JobSummary | undefined;
}
export declare namespace StopJobResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StopJobResult) => any;
}
/**
 * <p> The request structure to tag a resource with a tag key and value. </p>
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to tag a resource. </p>
   */
  resourceArn: string | undefined;
  /**
   * <p> The tags used to tag the resource. </p>
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
/**
 * <p> The response for the tag resource request. </p>
 */
export interface TagResourceResponse {}
export declare namespace TagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
/**
 * <p> The request structure for the untag resource request. </p>
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) to use to untag a resource. </p>
   */
  resourceArn: string | undefined;
  /**
   * <p> The tag keys to use to untag a resource. </p>
   */
  tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
/**
 * <p> The response for the untag resource request. </p>
 */
export interface UntagResourceResponse {}
export declare namespace UntagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
/**
 * <p> The request structure for the update app request. </p>
 */
export interface UpdateAppRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for an Amplify app. </p>
   */
  name?: string;
  /**
   * <p> The description for an Amplify app. </p>
   */
  description?: string;
  /**
   * <p> The platform for an Amplify app. </p>
   */
  platform?: Platform | string;
  /**
   * <p> The AWS Identity and Access Management (IAM) service role for an Amplify app. </p>
   */
  iamServiceRoleArn?: string;
  /**
   * <p> The environment variables for an Amplify app. </p>
   */
  environmentVariables?: {
    [key: string]: string;
  };
  /**
   * <p> Enables branch auto-building for an Amplify app. </p>
   */
  enableBranchAutoBuild?: boolean;
  /**
   * <p> Automatically disconnects a branch in the Amplify Console when you delete a branch
   *             from your Git repository. </p>
   */
  enableBranchAutoDeletion?: boolean;
  /**
   * <p> Enables basic authorization for an Amplify app. </p>
   */
  enableBasicAuth?: boolean;
  /**
   * <p> The basic authorization credentials for an Amplify app. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> The custom redirect and rewrite rules for an Amplify app. </p>
   */
  customRules?: CustomRule[];
  /**
   * <p> The build specification (build spec) for an Amplify app. </p>
   */
  buildSpec?: string;
  /**
   * <p>The custom HTTP headers for an Amplify app.</p>
   */
  customHeaders?: string;
  /**
   * <p> Enables automated branch creation for an Amplify app. </p>
   */
  enableAutoBranchCreation?: boolean;
  /**
   * <p> Describes the automated branch creation glob patterns for an Amplify app. </p>
   */
  autoBranchCreationPatterns?: string[];
  /**
   * <p> The automated branch creation configuration for an Amplify app. </p>
   */
  autoBranchCreationConfig?: AutoBranchCreationConfig;
  /**
   * <p> The name of the repository for an Amplify app </p>
   */
  repository?: string;
  /**
   * <p> The OAuth token for a third-party source control system for an Amplify app. The token
   *             is used to create a webhook and a read-only deploy key. The OAuth token is not stored.
   *         </p>
   */
  oauthToken?: string;
  /**
   * <p> The personal access token for a third-party source control system for an Amplify app.
   *             The token is used to create webhook and a read-only deploy key. The token is not stored.
   *         </p>
   */
  accessToken?: string;
}
export declare namespace UpdateAppRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAppRequest) => any;
}
/**
 * <p> The result structure for an Amplify app update request. </p>
 */
export interface UpdateAppResult {
  /**
   * <p> Represents the updated Amplify app. </p>
   */
  app: App | undefined;
}
export declare namespace UpdateAppResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAppResult) => any;
}
/**
 * <p> The request structure for the update branch request. </p>
 */
export interface UpdateBranchRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name for the branch. </p>
   */
  branchName: string | undefined;
  /**
   * <p> The description for the branch. </p>
   */
  description?: string;
  /**
   * <p> The framework for the branch. </p>
   */
  framework?: string;
  /**
   * <p> Describes the current stage for the branch. </p>
   */
  stage?: Stage | string;
  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;
  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;
  /**
   * <p> The environment variables for the branch. </p>
   */
  environmentVariables?: {
    [key: string]: string;
  };
  /**
   * <p> The basic authorization credentials for the branch. </p>
   */
  basicAuthCredentials?: string;
  /**
   * <p> Enables basic authorization for the branch. </p>
   */
  enableBasicAuth?: boolean;
  /**
   * <p>Enables performance mode for the branch.</p>
   *         <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
   */
  enablePerformanceMode?: boolean;
  /**
   * <p> The build specification (build spec) for the branch. </p>
   */
  buildSpec?: string;
  /**
   * <p> The content Time to Live (TTL) for the website in seconds. </p>
   */
  ttl?: string;
  /**
   * <p> The display name for a branch. This is used as the default domain prefix. </p>
   */
  displayName?: string;
  /**
   * <p> Enables pull request previews for this branch. </p>
   */
  enablePullRequestPreview?: boolean;
  /**
   * <p> The Amplify environment name for the pull request. </p>
   */
  pullRequestEnvironmentName?: string;
  /**
   * <p> The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify
   *             app. </p>
   */
  backendEnvironmentArn?: string;
}
export declare namespace UpdateBranchRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateBranchRequest) => any;
}
/**
 * <p> The result structure for the update branch request. </p>
 */
export interface UpdateBranchResult {
  /**
   * <p> The branch for an Amplify app, which maps to a third-party repository branch. </p>
   */
  branch: Branch | undefined;
}
export declare namespace UpdateBranchResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateBranchResult) => any;
}
/**
 * <p> The request structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationRequest {
  /**
   * <p> The unique ID for an Amplify app. </p>
   */
  appId: string | undefined;
  /**
   * <p> The name of the domain. </p>
   */
  domainName: string | undefined;
  /**
   * <p> Enables the automated creation of subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;
  /**
   * <p> Describes the settings for the subdomain. </p>
   */
  subDomainSettings: SubDomainSetting[] | undefined;
  /**
   * <p> Sets the branch patterns for automatic subdomain creation. </p>
   */
  autoSubDomainCreationPatterns?: string[];
  /**
   * <p> The required AWS Identity and Access Management (IAM) service role for the Amazon
   *             Resource Name (ARN) for automatically creating subdomains. </p>
   */
  autoSubDomainIAMRole?: string;
}
export declare namespace UpdateDomainAssociationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateDomainAssociationRequest) => any;
}
/**
 * <p> The result structure for the update domain association request. </p>
 */
export interface UpdateDomainAssociationResult {
  /**
   * <p> Describes a domain association, which associates a custom domain with an Amplify app.
   *         </p>
   */
  domainAssociation: DomainAssociation | undefined;
}
export declare namespace UpdateDomainAssociationResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateDomainAssociationResult) => any;
}
/**
 * <p> The request structure for the update webhook request. </p>
 */
export interface UpdateWebhookRequest {
  /**
   * <p> The unique ID for a webhook. </p>
   */
  webhookId: string | undefined;
  /**
   * <p> The name for a branch that is part of an Amplify app. </p>
   */
  branchName?: string;
  /**
   * <p> The description for a webhook. </p>
   */
  description?: string;
}
export declare namespace UpdateWebhookRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateWebhookRequest) => any;
}
/**
 * <p> The result structure for the update webhook request. </p>
 */
export interface UpdateWebhookResult {
  /**
   * <p> Describes a webhook that connects repository events to an Amplify app. </p>
   */
  webhook: Webhook | undefined;
}
export declare namespace UpdateWebhookResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateWebhookResult) => any;
}
