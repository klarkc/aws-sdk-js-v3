/// <reference types="node" />
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";
/**
 * <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum HashAlgorithm {
    MD5 = "MD5",
    SHA1 = "SHA-1",
    SHA256 = "SHA-256",
    SHA512 = "SHA-512"
}
/**
 * <p>
 *         Contains details about a package version asset.
 *        </p>
 */
export interface AssetSummary {
    /**
     * <p>
     *          The name of the asset.
     *        </p>
     */
    name: string | undefined;
    /**
     * <p>
     *       The size of the asset.
     *     </p>
     */
    size?: number;
    /**
     * <p>
     *       The hashes of the asset.
     *     </p>
     */
    hashes?: {
        [key: string]: string;
    };
}
export declare namespace AssetSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssetSummary) => any;
}
export interface AssociateExternalConnectionRequest {
    /**
     * <p>The name of the domain that contains the repository.</p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The name of the repository to which the external connection is added.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       The name of the external connection to add to the repository. The following values are supported:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>public:npmjs</code> - for the npm public repository.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>public:pypi</code> - for the Python Package Index.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>public:maven-central</code> - for Maven Central.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>public:maven-googleandroid</code> - for the Google Android repository.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>public:maven-gradleplugins</code> - for the Gradle plugins repository.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>public:maven-commonsware</code> - for the CommonsWare Android repository.
     *         </p>
     *             </li>
     *          </ul>
     */
    externalConnection: string | undefined;
}
export declare namespace AssociateExternalConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateExternalConnectionRequest) => any;
}
export declare enum PackageFormat {
    MAVEN = "maven",
    NPM = "npm",
    NUGET = "nuget",
    PYPI = "pypi"
}
export declare enum ExternalConnectionStatus {
    AVAILABLE = "Available"
}
/**
 * <p>
 *         Contains information about the external connection of a repository.
 *       </p>
 */
export interface RepositoryExternalConnectionInfo {
    /**
     * <p> The name of the external connection associated with a repository. </p>
     */
    externalConnectionName?: string;
    /**
     * <p>
     *         The package format associated with a repository's external connection. The valid package formats are:
     *       </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    packageFormat?: PackageFormat | string;
    /**
     * <p>
     *         The status of the external connection of a repository. There is one valid value, <code>Available</code>.
     *       </p>
     */
    status?: ExternalConnectionStatus | string;
}
export declare namespace RepositoryExternalConnectionInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryExternalConnectionInfo) => any;
}
/**
 * <p>
 *         Information about an upstream repository.
 *       </p>
 */
export interface UpstreamRepositoryInfo {
    /**
     * <p> The name of an upstream repository. </p>
     */
    repositoryName?: string;
}
export declare namespace UpstreamRepositoryInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpstreamRepositoryInfo) => any;
}
/**
 * <p> The details of a repository stored in AWS CodeArtifact. A CodeArtifact repository contains a set of
 *       package versions, each of which maps to a set of assets. Repositories are polyglot—a single
 *       repository can contain packages of any supported type. Each repository exposes endpoints for
 *       fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI
 *         (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per AWS
 *       account. </p>
 */
export interface RepositoryDescription {
    /**
     * <p>
     *         The name of the repository.
     *        </p>
     */
    name?: string;
    /**
     * <p> The 12-digit account number of the AWS account that manages the repository. </p>
     */
    administratorAccount?: string;
    /**
     * <p>
     *         The name of the domain that contains the repository.
     *        </p>
     */
    domainName?: string;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain that contains the repository. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the repository. </p>
     */
    arn?: string;
    /**
     * <p>
     *       A text description of the repository.
     *     </p>
     */
    description?: string;
    /**
     * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
     *         in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more
     *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
     */
    upstreams?: UpstreamRepositoryInfo[];
    /**
     * <p>
     *       An array of external connections associated with the repository.
     *     </p>
     */
    externalConnections?: RepositoryExternalConnectionInfo[];
}
export declare namespace RepositoryDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryDescription) => any;
}
export interface AssociateExternalConnectionResult {
    /**
     * <p>
     *         Information about the connected repository after processing the request.
     *        </p>
     */
    repository?: RepositoryDescription;
}
export declare namespace AssociateExternalConnectionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateExternalConnectionResult) => any;
}
export declare enum ResourceType {
    ASSET = "asset",
    DOMAIN = "domain",
    PACKAGE = "package",
    PACKAGE_VERSION = "package-version",
    REPOSITORY = "repository"
}
/**
 * <p>
 *         The operation did not succeed because prerequisites are not met.
 *       </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message: string | undefined;
    /**
     * <p>
     *       The ID of the resource.
     *     </p>
     */
    resourceId?: string;
    /**
     * <p>
     *       The type of AWS resource.
     *     </p>
     */
    resourceType?: ResourceType | string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p> The operation did not succeed because of an error that occurred inside AWS CodeArtifact. </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message: string | undefined;
    /**
     * <p>
     *       The ID of the resource.
     *     </p>
     */
    resourceId?: string;
    /**
     * <p>
     *       The type of AWS resource.
     *     </p>
     */
    resourceType?: ResourceType | string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    message: string | undefined;
    /**
     * <p>
     *       The ID of the resource.
     *     </p>
     */
    resourceId?: string;
    /**
     * <p>
     *       The type of AWS resource.
     *     </p>
     */
    resourceType?: ResourceType | string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
/**
 * <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    message: string | undefined;
    /**
     * <p>
     *       The time period, in seconds, to wait before retrying the request.
     *     </p>
     */
    retryAfterSeconds?: number;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export declare enum ValidationExceptionReason {
    CANNOT_PARSE = "CANNOT_PARSE",
    ENCRYPTION_KEY_ERROR = "ENCRYPTION_KEY_ERROR",
    FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
    OTHER = "OTHER",
    UNKNOWN_OPERATION = "UNKNOWN_OPERATION"
}
/**
 * <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message: string | undefined;
    /**
     * <p>
     *
     *     </p>
     */
    reason?: ValidationExceptionReason | string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface CopyPackageVersionsRequest {
    /**
     * <p>
     *         The name of the domain that contains the source and destination repositories.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *          The name of the repository that contains the package versions to copy.
     *        </p>
     */
    sourceRepository: string | undefined;
    /**
     * <p>
     *       The name of the repository into which package versions are copied.
     *     </p>
     */
    destinationRepository: string | undefined;
    /**
     * <p>
     *       The format of the package that is copied. The valid package types are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package that is copied.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *         The versions of the package to copy.
     *       </p>
     *          <note>
     *             <p>
     *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
     *       </p>
     *          </note>
     */
    versions?: string[];
    /**
     * <p>
     *        A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation
     *       succeeds if the specified versions in the source repository match the specified package version revision.
     *     </p>
     *          <note>
     *             <p>
     *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
     *       </p>
     *          </note>
     */
    versionRevisions?: {
        [key: string]: string;
    };
    /**
     * <p>
     *        Set to true to overwrite a package version that already exists in the destination repository.
     *        If set to false and the package version already exists in the destination repository,
     *        the package version is returned in the <code>failedVersions</code> field of the response with
     *        an <code>ALREADY_EXISTS</code> error code.
     *      </p>
     */
    allowOverwrite?: boolean;
    /**
     * <p> Set to true to copy packages from repositories that are upstream from the source
     *       repository to the destination repository. The default setting is false. For more information,
     *       see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with
     *         upstream repositories</a>. </p>
     */
    includeFromUpstream?: boolean;
}
export declare namespace CopyPackageVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyPackageVersionsRequest) => any;
}
export declare enum PackageVersionErrorCode {
    ALREADY_EXISTS = "ALREADY_EXISTS",
    MISMATCHED_REVISION = "MISMATCHED_REVISION",
    MISMATCHED_STATUS = "MISMATCHED_STATUS",
    NOT_ALLOWED = "NOT_ALLOWED",
    NOT_FOUND = "NOT_FOUND",
    SKIPPED = "SKIPPED"
}
/**
 * <p>
 *        An error associated with package.
 *    </p>
 */
export interface PackageVersionError {
    /**
     * <p> The error code associated with the error. Valid error codes are: </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ALREADY_EXISTS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_REVISION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_STATUS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_ALLOWED</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_FOUND</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SKIPPED</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    errorCode?: PackageVersionErrorCode | string;
    /**
     * <p>
     *          The error message associated with the error.
     *      </p>
     */
    errorMessage?: string;
}
export declare namespace PackageVersionError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageVersionError) => any;
}
export declare enum PackageVersionStatus {
    ARCHIVED = "Archived",
    DELETED = "Deleted",
    DISPOSED = "Disposed",
    PUBLISHED = "Published",
    UNFINISHED = "Unfinished",
    UNLISTED = "Unlisted"
}
/**
 * <p>
 *       Contains the revision and status of a package version.
 *     </p>
 */
export interface SuccessfulPackageVersionInfo {
    /**
     * <p>
     *       The revision of a package version.
     *     </p>
     */
    revision?: string;
    /**
     * <p>
     *       The status of a package version. Valid statuses are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Published</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unfinished</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unlisted</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Archived</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Disposed</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status?: PackageVersionStatus | string;
}
export declare namespace SuccessfulPackageVersionInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuccessfulPackageVersionInfo) => any;
}
export interface CopyPackageVersionsResult {
    /**
     * <p>
     *       A list of the package versions that were successfully copied to your repository.
     *     </p>
     */
    successfulVersions?: {
        [key: string]: SuccessfulPackageVersionInfo;
    };
    /**
     * <p>
     *       A map of package versions that failed to copy and their error codes. The possible error codes are in
     *       the <code>PackageVersionError</code> data type. They are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ALREADY_EXISTS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_REVISION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_STATUS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_ALLOWED</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_FOUND</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SKIPPED</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    failedVersions?: {
        [key: string]: PackageVersionError;
    };
}
export declare namespace CopyPackageVersionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyPackageVersionsResult) => any;
}
/**
 * <p>A tag is a key-value pair that can be used to manage, search for, or filter resources in AWS CodeArtifact.</p>
 */
export interface Tag {
    /**
     * <p>The tag key.</p>
     */
    key: string | undefined;
    /**
     * <p>The tag value.</p>
     */
    value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface CreateDomainRequest {
    /**
     * <p> The name of the domain to create. All domain names in an AWS Region that are in the
     *       same AWS account must be unique. The domain name is used as the prefix in DNS hostnames. Do
     *       not use sensitive information in a domain name because it is publicly discoverable. </p>
     */
    domain: string | undefined;
    /**
     * <p> The encryption key for the domain. This is used to encrypt content stored in a domain.
     *       An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key
     *       alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have
     *         <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption
     *       key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>AWS Key Management Service API Reference</i>
     *       and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">AWS KMS API Permissions
     *         Reference</a> in the <i>AWS Key Management Service Developer Guide</i>. </p>
     *          <important>
     *             <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your
     *         domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric
     *           keys</a> in the <i>AWS Key Management Service Developer Guide</i>. </p>
     *          </important>
     */
    encryptionKey?: string;
    /**
     * <p>One or more tag key-value pairs for the domain.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDomainRequest) => any;
}
export declare enum DomainStatus {
    ACTIVE = "Active",
    DELETED = "Deleted"
}
/**
 * <p>
 *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
 *        add one or more repositories.
 *       </p>
 */
export interface DomainDescription {
    /**
     * <p>
     *          The name of the domain.
     *        </p>
     */
    name?: string;
    /**
     * <p> The AWS account ID that owns the domain. </p>
     */
    owner?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the domain. </p>
     */
    arn?: string;
    /**
     * <p> The current status of a domain. The valid values are </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Active</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Deleted</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status?: DomainStatus | string;
    /**
     * <p>
     *       A timestamp that represents the date and time the domain was created.
     *     </p>
     */
    createdTime?: Date;
    /**
     * <p> The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain. </p>
     */
    encryptionKey?: string;
    /**
     * <p>
     *       The number of repositories in the domain.
     *     </p>
     */
    repositoryCount?: number;
    /**
     * <p>
     *       The total size of all assets in the domain.
     *     </p>
     */
    assetSizeBytes?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket that is used to store package assets in the domain.</p>
     */
    s3BucketArn?: string;
}
export declare namespace DomainDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainDescription) => any;
}
export interface CreateDomainResult {
    /**
     * <p>
     *         Contains information about the created domain after processing the request.
     *       </p>
     */
    domain?: DomainDescription;
}
export declare namespace CreateDomainResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDomainResult) => any;
}
/**
 * <p>
 *        Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a>
 *        and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>.
 *      </p>
 */
export interface UpstreamRepository {
    /**
     * <p> The name of an upstream repository. </p>
     */
    repositoryName: string | undefined;
}
export declare namespace UpstreamRepository {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpstreamRepository) => any;
}
export interface CreateRepositoryRequest {
    /**
     * <p>
     *         The name of the domain that contains the created repository.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p> The name of the repository to create. </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       A description of the created repository.
     *     </p>
     */
    description?: string;
    /**
     * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
     *         in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more
     *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
     */
    upstreams?: UpstreamRepository[];
    /**
     * <p>One or more tag key-value pairs for the repository.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateRepositoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRepositoryRequest) => any;
}
export interface CreateRepositoryResult {
    /**
     * <p>
     *         Information about the created repository after processing the request.
     *       </p>
     */
    repository?: RepositoryDescription;
}
export declare namespace CreateRepositoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRepositoryResult) => any;
}
export interface DeleteDomainRequest {
    /**
     * <p>
     *          The name of the domain to delete.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
}
export declare namespace DeleteDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDomainRequest) => any;
}
export interface DeleteDomainResult {
    /**
     * <p>
     *         Contains information about the deleted domain after processing the request.
     *        </p>
     */
    domain?: DomainDescription;
}
export declare namespace DeleteDomainResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDomainResult) => any;
}
export interface DeleteDomainPermissionsPolicyRequest {
    /**
     * <p>
     *         The name of the domain associated with the resource policy to be deleted.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *         The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which
     *         prevents others from overwriting your changes to the domain's resource policy.
     *       </p>
     */
    policyRevision?: string;
}
export declare namespace DeleteDomainPermissionsPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDomainPermissionsPolicyRequest) => any;
}
/**
 * <p>
 *         An AWS CodeArtifact resource policy that contains a resource ARN, document details, and a revision.
 *       </p>
 */
export interface ResourcePolicy {
    /**
     * <p>
     *         The ARN of the resource associated with the resource policy
     *       </p>
     */
    resourceArn?: string;
    /**
     * <p>
     *         The current revision of the resource policy.
     *       </p>
     */
    revision?: string;
    /**
     * <p>
     *       The resource policy formatted in JSON.
     *     </p>
     */
    document?: string;
}
export declare namespace ResourcePolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourcePolicy) => any;
}
export interface DeleteDomainPermissionsPolicyResult {
    /**
     * <p>
     *         Information about the deleted resource policy after processing the request.
     *       </p>
     */
    policy?: ResourcePolicy;
}
export declare namespace DeleteDomainPermissionsPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDomainPermissionsPolicyResult) => any;
}
export interface DeletePackageVersionsRequest {
    /**
     * <p>
     *         The name of the domain that contains the package to delete.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *         The name of the repository that contains the package versions to delete.
     *       </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *         The format of the package versions to delete. The valid values are:
     *       </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *         The name of the package with the versions to delete.
     *       </p>
     */
    package: string | undefined;
    /**
     * <p>
     *         An array of strings that specify the versions of the package to delete.
     *       </p>
     */
    versions: string[] | undefined;
    /**
     * <p>
     *         The expected status of the package version to delete. Valid values are:
     *       </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Published</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unfinished</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unlisted</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Archived</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Disposed</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    expectedStatus?: PackageVersionStatus | string;
}
export declare namespace DeletePackageVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackageVersionsRequest) => any;
}
export interface DeletePackageVersionsResult {
    /**
     * <p>
     *        A list of the package versions that were successfully deleted.
     *      </p>
     */
    successfulVersions?: {
        [key: string]: SuccessfulPackageVersionInfo;
    };
    /**
     * <p>
     *        A <code>PackageVersionError</code> object that contains a map of errors codes for the
     *        deleted package that failed. The possible error codes are:
     *      </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ALREADY_EXISTS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_REVISION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_STATUS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_ALLOWED</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_FOUND</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SKIPPED</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    failedVersions?: {
        [key: string]: PackageVersionError;
    };
}
export declare namespace DeletePackageVersionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackageVersionsResult) => any;
}
export interface DeleteRepositoryRequest {
    /**
     * <p>
     *          The name of the domain that contains the repository to delete.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p> The name of the repository to delete. </p>
     */
    repository: string | undefined;
}
export declare namespace DeleteRepositoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRepositoryRequest) => any;
}
export interface DeleteRepositoryResult {
    /**
     * <p>
     *         Information about the deleted repository after processing the request.
     *        </p>
     */
    repository?: RepositoryDescription;
}
export declare namespace DeleteRepositoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRepositoryResult) => any;
}
export interface DeleteRepositoryPermissionsPolicyRequest {
    /**
     * <p>
     *         The name of the domain that contains the repository associated with the resource policy to be deleted.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The name of the repository that is associated with the resource policy to be deleted
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which
     *       prevents others from accidentally overwriting your changes to the repository's resource policy.
     *     </p>
     */
    policyRevision?: string;
}
export declare namespace DeleteRepositoryPermissionsPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRepositoryPermissionsPolicyRequest) => any;
}
export interface DeleteRepositoryPermissionsPolicyResult {
    /**
     * <p>
     *       Information about the deleted policy after processing the request.
     *     </p>
     */
    policy?: ResourcePolicy;
}
export declare namespace DeleteRepositoryPermissionsPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRepositoryPermissionsPolicyResult) => any;
}
export interface DescribeDomainRequest {
    /**
     * <p>
     *          A string that specifies the name of the requested domain.
     *      </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
}
export declare namespace DescribeDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainRequest) => any;
}
export interface DescribeDomainResult {
    /**
     * <p>
     *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
     *        add one or more repositories.
     *       </p>
     */
    domain?: DomainDescription;
}
export declare namespace DescribeDomainResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainResult) => any;
}
export interface DescribePackageVersionRequest {
    /**
     * <p>
     *       The name of the domain that contains the repository that contains the package version.
     *     </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p> The name of the repository that contains the package version. </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       A format that specifies the type of the requested package version. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p> The name of the requested package version. </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       A string that contains the package version (for example, <code>3.5.2</code>).
     *     </p>
     */
    packageVersion: string | undefined;
}
export declare namespace DescribePackageVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackageVersionRequest) => any;
}
/**
 * <p>
 *         Details of the license data.
 *       </p>
 */
export interface LicenseInfo {
    /**
     * <p>
     *         Name of the license.
     *       </p>
     */
    name?: string;
    /**
     * <p>
     *         The URL for license data.
     *       </p>
     */
    url?: string;
}
export declare namespace LicenseInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseInfo) => any;
}
/**
 * <p>
 *       Details about a package version.
 *     </p>
 */
export interface PackageVersionDescription {
    /**
     * <p>
     *       The format of the package version. The valid package formats are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the requested package.
     *     </p>
     */
    packageName?: string;
    /**
     * <p>
     *       The name of the package that is displayed. The <code>displayName</code> varies depending
     *       on the package version's format. For example, if an npm package is named <code>ui</code>,
     *       is in the namespace <code>vue</code>, and has the format <code>npm</code>, then
     *       the <code>displayName</code> is <code>@vue/ui</code>.
     *     </p>
     */
    displayName?: string;
    /**
     * <p>
     *       The version of the package.
     *     </p>
     */
    version?: string;
    /**
     * <p>
     *       A summary of the package version. The summary is extracted from the package. The information in and
     *       detail level of the summary depends on the package version's format.
     *     </p>
     */
    summary?: string;
    /**
     * <p>
     *       The homepage associated with the package.
     *     </p>
     */
    homePage?: string;
    /**
     * <p>
     *       The repository for the source code in the package version, or the source code used to build it.
     *     </p>
     */
    sourceCodeRepository?: string;
    /**
     * <p>
     *       A timestamp that contains the date and time the package version was published.
     *     </p>
     */
    publishedTime?: Date;
    /**
     * <p>
     *       Information about licenses associated with the package version.
     *     </p>
     */
    licenses?: LicenseInfo[];
    /**
     * <p>
     *       The revision of the package version.
     *     </p>
     */
    revision?: string;
    /**
     * <p>
     *       A string that contains the status of the package version. It can be one of the following:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Published</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unfinished</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unlisted</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Archived</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Disposed</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status?: PackageVersionStatus | string;
}
export declare namespace PackageVersionDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageVersionDescription) => any;
}
export interface DescribePackageVersionResult {
    /**
     * <p>
     *       A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
     *       object that contains information about the requested package version.
     *     </p>
     */
    packageVersion: PackageVersionDescription | undefined;
}
export declare namespace DescribePackageVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackageVersionResult) => any;
}
export interface DescribeRepositoryRequest {
    /**
     * <p>
     *          The name of the domain that contains the repository to describe.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *         A string that specifies the name of the requested repository.
     *        </p>
     */
    repository: string | undefined;
}
export declare namespace DescribeRepositoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRepositoryRequest) => any;
}
export interface DescribeRepositoryResult {
    /**
     * <p>
     *          A <code>RepositoryDescription</code> object that contains the requested repository information.
     *        </p>
     */
    repository?: RepositoryDescription;
}
export declare namespace DescribeRepositoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRepositoryResult) => any;
}
export interface DisassociateExternalConnectionRequest {
    /**
     * <p>The name of the domain that contains the repository from which to remove the external
     *       repository. </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>The name of the repository from which the external connection will be removed. </p>
     */
    repository: string | undefined;
    /**
     * <p>The name of the external connection to be removed from the repository. </p>
     */
    externalConnection: string | undefined;
}
export declare namespace DisassociateExternalConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateExternalConnectionRequest) => any;
}
export interface DisassociateExternalConnectionResult {
    /**
     * <p>
     *       The repository associated with the removed external connection.
     *     </p>
     */
    repository?: RepositoryDescription;
}
export declare namespace DisassociateExternalConnectionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateExternalConnectionResult) => any;
}
export interface DisposePackageVersionsRequest {
    /**
     * <p>
     *       The name of the domain that contains the repository you want to dispose.
     *     </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The name of the repository that contains the package versions you want to dispose.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       A format that specifies the type of package versions you want to dispose. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package with the versions you want to dispose.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       The versions of the package you want to dispose.
     *     </p>
     */
    versions: string[] | undefined;
    /**
     * <p>
     *       The revisions of the package versions you want to dispose.
     *     </p>
     */
    versionRevisions?: {
        [key: string]: string;
    };
    /**
     * <p>
     *       The expected status of the package version to dispose. Valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Published</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unfinished</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unlisted</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Archived</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Disposed</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    expectedStatus?: PackageVersionStatus | string;
}
export declare namespace DisposePackageVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisposePackageVersionsRequest) => any;
}
export interface DisposePackageVersionsResult {
    /**
     * <p>
     *       A list of the package versions that were successfully disposed.
     *     </p>
     */
    successfulVersions?: {
        [key: string]: SuccessfulPackageVersionInfo;
    };
    /**
     * <p>
     *       A <code>PackageVersionError</code> object that contains a map of errors codes for the
     *       disposed package versions that failed. The possible error codes are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ALREADY_EXISTS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_REVISION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MISMATCHED_STATUS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_ALLOWED</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOT_FOUND</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SKIPPED</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    failedVersions?: {
        [key: string]: PackageVersionError;
    };
}
export declare namespace DisposePackageVersionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisposePackageVersionsResult) => any;
}
export interface GetAuthorizationTokenRequest {
    /**
     * <p>
     *         The name of the domain that is in scope for the generated authorization token.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>The time, in seconds, that the generated authorization token is valid. Valid values are
     *     <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours).
     *     A value of <code>0</code> will set the expiration of the authorization token to the same expiration of
     *     the user's role's temporary credentials.</p>
     */
    durationSeconds?: number;
}
export declare namespace GetAuthorizationTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAuthorizationTokenRequest) => any;
}
export interface GetAuthorizationTokenResult {
    /**
     * <p>
     *         The returned authentication token.
     *        </p>
     */
    authorizationToken?: string;
    /**
     * <p>
     *       A timestamp that specifies the date and time the authorization token expires.
     *     </p>
     */
    expiration?: Date;
}
export declare namespace GetAuthorizationTokenResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAuthorizationTokenResult) => any;
}
export interface GetDomainPermissionsPolicyRequest {
    /**
     * <p>
     *         The name of the domain to which the resource policy is attached.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
}
export declare namespace GetDomainPermissionsPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDomainPermissionsPolicyRequest) => any;
}
export interface GetDomainPermissionsPolicyResult {
    /**
     * <p>
     *         The returned resource policy.
     *       </p>
     */
    policy?: ResourcePolicy;
}
export declare namespace GetDomainPermissionsPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDomainPermissionsPolicyResult) => any;
}
export interface GetPackageVersionAssetRequest {
    /**
     * <p>
     *       The name of the domain that contains the repository that contains the package version with the requested asset.
     *     </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The repository that contains the package version with the requested asset.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       A format that specifies the type of the package version with the requested asset file. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package that contains the requested asset.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       A string that contains the package version (for example, <code>3.5.2</code>).
     *     </p>
     */
    packageVersion: string | undefined;
    /**
     * <p>
     *       The name of the requested asset.
     *     </p>
     */
    asset: string | undefined;
    /**
     * <p>
     *         The name of the package version revision that contains the requested asset.
     *     </p>
     */
    packageVersionRevision?: string;
}
export declare namespace GetPackageVersionAssetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPackageVersionAssetRequest) => any;
}
export interface GetPackageVersionAssetResult {
    /**
     * <p> The binary file, or asset, that is downloaded.</p>
     */
    asset?: Readable | ReadableStream | Blob;
    /**
     * <p>
     *       The name of the asset that is downloaded.
     *     </p>
     */
    assetName?: string;
    /**
     * <p>
     *       A string that contains the package version (for example, <code>3.5.2</code>).
     *     </p>
     */
    packageVersion?: string;
    /**
     * <p>
     *       The name of the package version revision that contains the downloaded asset.
     *     </p>
     */
    packageVersionRevision?: string;
}
export declare namespace GetPackageVersionAssetResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPackageVersionAssetResult) => any;
}
export interface GetPackageVersionReadmeRequest {
    /**
     * <p>
     *       The name of the domain that contains the repository that contains the package version with the requested readme file.
     *     </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The repository that contains the package with the requested readme file.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       A format that specifies the type of the package version with the requested readme file. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package version that contains the requested readme file.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       A string that contains the package version (for example, <code>3.5.2</code>).
     *     </p>
     */
    packageVersion: string | undefined;
}
export declare namespace GetPackageVersionReadmeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPackageVersionReadmeRequest) => any;
}
export interface GetPackageVersionReadmeResult {
    /**
     * <p>
     *       The format of the package with the requested readme file. Valid format types are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package that contains the returned readme file.
     *     </p>
     */
    package?: string;
    /**
     * <p>
     *       The version of the package with the requested readme file.
     *     </p>
     */
    version?: string;
    /**
     * <p>
     *       The current revision associated with the package version.
     *     </p>
     */
    versionRevision?: string;
    /**
     * <p>
     *       The text of the returned readme file.
     *     </p>
     */
    readme?: string;
}
export declare namespace GetPackageVersionReadmeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPackageVersionReadmeResult) => any;
}
export interface GetRepositoryEndpointRequest {
    /**
     * <p>
     *          The name of the domain that contains the repository.
     *      </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain that contains the repository. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *          The name of the repository.
     *      </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       Returns which endpoint of a repository to return. A repository has one endpoint for each
     *       package format:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
}
export declare namespace GetRepositoryEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRepositoryEndpointRequest) => any;
}
export interface GetRepositoryEndpointResult {
    /**
     * <p>
     *          A string that specifies the URL of the returned endpoint.
     *      </p>
     */
    repositoryEndpoint?: string;
}
export declare namespace GetRepositoryEndpointResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRepositoryEndpointResult) => any;
}
export interface GetRepositoryPermissionsPolicyRequest {
    /**
     * <p>
     *         The name of the domain containing the repository whose associated resource policy is to be retrieved.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *         The name of the repository whose associated resource policy is to be retrieved.
     *       </p>
     */
    repository: string | undefined;
}
export declare namespace GetRepositoryPermissionsPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRepositoryPermissionsPolicyRequest) => any;
}
export interface GetRepositoryPermissionsPolicyResult {
    /**
     * <p>
     *         The returned resource policy.
     *       </p>
     */
    policy?: ResourcePolicy;
}
export declare namespace GetRepositoryPermissionsPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRepositoryPermissionsPolicyResult) => any;
}
export interface ListDomainsRequest {
    /**
     * <p>
     *         The maximum number of results to return per page.
     *        </p>
     */
    maxResults?: number;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListDomainsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainsRequest) => any;
}
/**
 * <p> Information about a domain, including its name, Amazon Resource Name (ARN), and status.
 *       The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code>
 *       objects. </p>
 */
export interface DomainSummary {
    /**
     * <p>
     *       The name of the domain.
     *     </p>
     */
    name?: string;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    owner?: string;
    /**
     * <p>
     *       The ARN of the domain.
     *     </p>
     */
    arn?: string;
    /**
     * <p>
     *       A string that contains the status of the domain. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Active</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Deleted</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status?: DomainStatus | string;
    /**
     * <p>
     *       A timestamp that contains the date and time the domain was created.
     *     </p>
     */
    createdTime?: Date;
    /**
     * <p>
     *       The key used to encrypt the domain.
     *     </p>
     */
    encryptionKey?: string;
}
export declare namespace DomainSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainSummary) => any;
}
export interface ListDomainsResult {
    /**
     * <p>
     *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainSummary.html">DomainSummary</a> objects.
     *      </p>
     */
    domains?: DomainSummary[];
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListDomainsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainsResult) => any;
}
export interface ListPackagesRequest {
    /**
     * <p>
     *         The name of the domain that contains the repository that contains the requested list of packages.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *          The name of the repository from which packages are to be listed.
     *        </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       The format of the packages. The valid package types are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       A prefix used to filter returned packages. Only packages with names that start with
     *       <code>packagePrefix</code> are returned.
     *     </p>
     */
    packagePrefix?: string;
    /**
     * <p>
     *         The maximum number of results to return per page.
     *        </p>
     */
    maxResults?: number;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListPackagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagesRequest) => any;
}
/**
 * <p>
 *       Details about a package, including its format, namespace, and name. The
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html">ListPackages</a>
 *       operation returns a list of <code>PackageSummary</code> objects.
 *     </p>
 */
export interface PackageSummary {
    /**
     * <p>
     *       The format of the package. Valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package.
     *     </p>
     */
    package?: string;
}
export declare namespace PackageSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageSummary) => any;
}
export interface ListPackagesResult {
    /**
     * <p>
     *         The list of returned <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a>
     *         objects.
     *        </p>
     */
    packages?: PackageSummary[];
    /**
     * <p>
     *         If there are additional results, this is the token for the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListPackagesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagesResult) => any;
}
export interface ListPackageVersionAssetsRequest {
    /**
     * <p>
     *          The name of the domain that contains the repository associated with the package version assets.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The name of the repository that contains the package that contains the returned package version assets.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       The format of the package that contains the returned package version assets. The valid package types are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *          The name of the package that contains the returned package version assets.
     *        </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       A string that contains the package version (for example, <code>3.5.2</code>).
     *     </p>
     */
    packageVersion: string | undefined;
    /**
     * <p>
     *         The maximum number of results to return per page.
     *        </p>
     */
    maxResults?: number;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListPackageVersionAssetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackageVersionAssetsRequest) => any;
}
export interface ListPackageVersionAssetsResult {
    /**
     * <p>
     *       The format of the package that contains the returned package version assets.
     *     </p>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package that contains the returned package version assets.
     *     </p>
     */
    package?: string;
    /**
     * <p>
     *       The version of the package associated with the returned assets.
     *     </p>
     */
    version?: string;
    /**
     * <p>
     *       The current revision associated with the package version.
     *     </p>
     */
    versionRevision?: string;
    /**
     * <p>
     *         If there are additional results, this is the token for the next set of results.
     *        </p>
     */
    nextToken?: string;
    /**
     * <p>
     *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects.
     *     </p>
     */
    assets?: AssetSummary[];
}
export declare namespace ListPackageVersionAssetsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackageVersionAssetsResult) => any;
}
export interface ListPackageVersionDependenciesRequest {
    /**
     * <p>
     *       The name of the domain that contains the repository that contains the requested package version dependencies.
     *     </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The name of the repository that contains the requested package version.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       The format of the package with the requested dependencies. The valid package types are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package versions' package.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       A string that contains the package version (for example, <code>3.5.2</code>).
     *     </p>
     */
    packageVersion: string | undefined;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListPackageVersionDependenciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackageVersionDependenciesRequest) => any;
}
/**
 * <p>
 *         Details about a package dependency.
 *       </p>
 */
export interface PackageDependency {
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *         The name of the package that this package depends on.
     *        </p>
     */
    package?: string;
    /**
     * <p> The type of a package dependency. The possible values depend on the package type.
     *       Example types are <code>compile</code>, <code>runtime</code>, and <code>test</code> for Maven
     *       packages, and <code>dev</code>, <code>prod</code>, and <code>optional</code> for npm packages. </p>
     */
    dependencyType?: string;
    /**
     * <p>
     *         The required version, or version range, of the package that this package depends on. The version format
     *         is specific to the package type. For example, the following are possible valid required versions: <code>1.2.3</code>,
     *         <code>^2.3.4</code>, or <code>4.x</code>.
     *       </p>
     */
    versionRequirement?: string;
}
export declare namespace PackageDependency {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageDependency) => any;
}
export interface ListPackageVersionDependenciesResult {
    /**
     * <p>
     *       A format that specifies the type of the package that contains the returned dependencies. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package that contains the returned package versions dependencies.
     *     </p>
     */
    package?: string;
    /**
     * <p>
     *       The version of the package that is specified in the request.
     *     </p>
     */
    version?: string;
    /**
     * <p>
     *       The current revision associated with the package version.
     *     </p>
     */
    versionRevision?: string;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
    /**
     * <p>
     *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects.
     *     </p>
     */
    dependencies?: PackageDependency[];
}
export declare namespace ListPackageVersionDependenciesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackageVersionDependenciesResult) => any;
}
export declare enum PackageVersionSortType {
    PUBLISHED_TIME = "PUBLISHED_TIME"
}
export interface ListPackageVersionsRequest {
    /**
     * <p>
     *          The name of the domain that contains the repository that contains the returned package versions.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *          The name of the repository that contains the package.
     *        </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       The format of the returned packages. The valid package types are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>: A Node Package Manager (npm) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>: A Python Package Index (PyPI) package.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
     *         </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package for which you want to return a list of package versions.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       A string that specifies the status of the package versions to include in the returned list. It can be one of the following:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Published</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unfinished</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unlisted</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Archived</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Disposed</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status?: PackageVersionStatus | string;
    /**
     * <p>
     *       How to sort the returned list of package versions.
     *     </p>
     */
    sortBy?: PackageVersionSortType | string;
    /**
     * <p>
     *         The maximum number of results to return per page.
     *        </p>
     */
    maxResults?: number;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListPackageVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackageVersionsRequest) => any;
}
/**
 * <p>
 *        Details about a package version, including its status, version, and revision. The
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>
 *        operation returns a list of <code>PackageVersionSummary</code> objects.
 *      </p>
 */
export interface PackageVersionSummary {
    /**
     * <p>
     *         Information about a package version.
     *        </p>
     */
    version: string | undefined;
    /**
     * <p>
     *       The revision associated with a package version.
     *     </p>
     */
    revision?: string;
    /**
     * <p>
     *       A string that contains the status of the package version. It can be one of the following:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Published</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unfinished</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Unlisted</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Archived</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Disposed</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status: PackageVersionStatus | string | undefined;
}
export declare namespace PackageVersionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageVersionSummary) => any;
}
export interface ListPackageVersionsResult {
    /**
     * <p>
     *       The default package version to display. This depends on the package format:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           For Maven and PyPI packages, it's the most recently published package version.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           For npm packages, it's the version referenced by the
     *           <code>latest</code> tag. If the  <code>latest</code> tag is not set, it's the most recently published package version.
     *         </p>
     *             </li>
     *          </ul>
     */
    defaultDisplayVersion?: string;
    /**
     * <p>
     *       A format of the package. Valid package format values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format?: PackageFormat | string;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *          The name of the package.
     *        </p>
     */
    package?: string;
    /**
     * <p>
     *         The returned list of
     *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
     *         objects.
     *        </p>
     */
    versions?: PackageVersionSummary[];
    /**
     * <p>
     *         If there are additional results, this is the token for the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListPackageVersionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackageVersionsResult) => any;
}
export interface ListRepositoriesRequest {
    /**
     * <p> A prefix used to filter returned repositories. Only repositories with names that start
     *       with <code>repositoryPrefix</code> are returned.</p>
     */
    repositoryPrefix?: string;
    /**
     * <p>
     *         The maximum number of results to return per page.
     *        </p>
     */
    maxResults?: number;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListRepositoriesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesRequest) => any;
}
/**
 * <p> Details about a repository, including its Amazon Resource Name (ARN), description, and
 *       domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of
 *         <code>RepositorySummary</code> objects. </p>
 */
export interface RepositorySummary {
    /**
     * <p>
     *          The name of the repository.
     *       </p>
     */
    name?: string;
    /**
     * <p>
     *          The AWS account ID that manages the repository.
     *       </p>
     */
    administratorAccount?: string;
    /**
     * <p>
     *          The name of the domain that contains the repository.
     *       </p>
     */
    domainName?: string;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p> The ARN of the repository. </p>
     */
    arn?: string;
    /**
     * <p>
     *       The description of the repository.
     *     </p>
     */
    description?: string;
}
export declare namespace RepositorySummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositorySummary) => any;
}
export interface ListRepositoriesResult {
    /**
     * <p>
     *         The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
     *         objects.
     *        </p>
     */
    repositories?: RepositorySummary[];
    /**
     * <p>
     *         If there are additional results, this is the token for the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListRepositoriesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesResult) => any;
}
export interface ListRepositoriesInDomainRequest {
    /**
     * <p>
     *          The name of the domain that contains the returned list of repositories.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *          Filter the list of repositories to only include those that are managed by the AWS account ID.
     *        </p>
     */
    administratorAccount?: string;
    /**
     * <p>
     *       A prefix used to filter returned repositories. Only repositories with names that start with
     *       <code>repositoryPrefix</code> are returned.
     *     </p>
     */
    repositoryPrefix?: string;
    /**
     * <p>
     *         The maximum number of results to return per page.
     *        </p>
     */
    maxResults?: number;
    /**
     * <p>
     *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListRepositoriesInDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesInDomainRequest) => any;
}
export interface ListRepositoriesInDomainResult {
    /**
     * <p>
     *        The returned list of repositories.
     *      </p>
     */
    repositories?: RepositorySummary[];
    /**
     * <p>
     *         If there are additional results, this is the token for the next set of results.
     *        </p>
     */
    nextToken?: string;
}
export declare namespace ListRepositoriesInDomainResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoriesInDomainResult) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResult {
    /**
     * <p>A list of tag key and value pairs associated with the specified resource.</p>
     */
    tags?: Tag[];
}
export declare namespace ListTagsForResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResult) => any;
}
export interface PutDomainPermissionsPolicyRequest {
    /**
     * <p>
     *         The name of the domain on which to set the resource policy.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *         The current revision of the resource policy to be set. This revision is used for optimistic locking, which
     *         prevents others from overwriting your changes to the domain's resource policy.
     *       </p>
     */
    policyRevision?: string;
    /**
     * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
     *       policy on the provided domain. </p>
     */
    policyDocument: string | undefined;
}
export declare namespace PutDomainPermissionsPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutDomainPermissionsPolicyRequest) => any;
}
export interface PutDomainPermissionsPolicyResult {
    /**
     * <p> The resource policy that was set after processing the request. </p>
     */
    policy?: ResourcePolicy;
}
export declare namespace PutDomainPermissionsPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutDomainPermissionsPolicyResult) => any;
}
export interface PutRepositoryPermissionsPolicyRequest {
    /**
     * <p>
     *         The name of the domain containing the repository to set the resource policy on.
     *       </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p> The name of the repository to set the resource policy on. </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *         Sets the revision of the resource policy that specifies permissions to access the repository.
     *         This revision is used for optimistic locking, which prevents others from overwriting your
     *         changes to the repository's resource policy.
     *       </p>
     */
    policyRevision?: string;
    /**
     * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
     *       policy on the provided repository. </p>
     */
    policyDocument: string | undefined;
}
export declare namespace PutRepositoryPermissionsPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRepositoryPermissionsPolicyRequest) => any;
}
export interface PutRepositoryPermissionsPolicyResult {
    /**
     * <p> The resource policy that was set after processing the request. </p>
     */
    policy?: ResourcePolicy;
}
export declare namespace PutRepositoryPermissionsPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRepositoryPermissionsPolicyResult) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tags you want to modify or add to the resource.</p>
     */
    tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResult {
}
export declare namespace TagResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResult) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tag key for each tag that you want to remove from the resource.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResult {
}
export declare namespace UntagResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResult) => any;
}
export interface UpdatePackageVersionsStatusRequest {
    /**
     * <p>
     *       The name of the domain that contains the repository that contains the package versions with a status to be updated.
     *     </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *       The repository that contains the package versions with the status you want to update.
     *     </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *       A format that specifies the type of the package with the statuses to update. The valid values are:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    format: PackageFormat | string | undefined;
    /**
     * <p>
     *       The namespace of the package. The package component that specifies its
     *       namespace depends on its type. For example:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *           The namespace of a Maven package is its <code>groupId</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           The namespace of an npm package is its <code>scope</code>.
     *         </p>
     *             </li>
     *             <li>
     *                <p>
     *           A Python package does not contain a corresponding component, so
     *           Python packages do not have a namespace.
     *         </p>
     *             </li>
     *          </ul>
     */
    namespace?: string;
    /**
     * <p>
     *       The name of the package with the version statuses to update.
     *     </p>
     */
    package: string | undefined;
    /**
     * <p>
     *       An array of strings that specify the versions of the package with the statuses to update.
     *     </p>
     */
    versions: string[] | undefined;
    /**
     * <p> A map of package versions and package version revisions. The map <code>key</code> is the
     *       package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the
     *       package version revision. </p>
     */
    versionRevisions?: {
        [key: string]: string;
    };
    /**
     * <p> The package version’s expected status before it is updated. If
     *         <code>expectedStatus</code> is provided, the package version's status is updated only if its
     *       status at the time <code>UpdatePackageVersionsStatus</code> is called matches
     *         <code>expectedStatus</code>. </p>
     */
    expectedStatus?: PackageVersionStatus | string;
    /**
     * <p>
     *       The status you want to change the package version status to.
     *     </p>
     */
    targetStatus: PackageVersionStatus | string | undefined;
}
export declare namespace UpdatePackageVersionsStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePackageVersionsStatusRequest) => any;
}
export interface UpdatePackageVersionsStatusResult {
    /**
     * <p>
     *       A list of <code>PackageVersionError</code> objects, one for each package version with
     *       a status that failed to update.
     *     </p>
     */
    successfulVersions?: {
        [key: string]: SuccessfulPackageVersionInfo;
    };
    /**
     * <p> A list of <code>SuccessfulPackageVersionInfo</code> objects, one for each package version
     *       with a status that successfully updated. </p>
     */
    failedVersions?: {
        [key: string]: PackageVersionError;
    };
}
export declare namespace UpdatePackageVersionsStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePackageVersionsStatusResult) => any;
}
export interface UpdateRepositoryRequest {
    /**
     * <p>
     *          The name of the domain associated with the repository to update.
     *        </p>
     */
    domain: string | undefined;
    /**
     * <p>
     *         The 12-digit account number of the AWS account that owns the domain. It does not include
     *         dashes or spaces.
     *       </p>
     */
    domainOwner?: string;
    /**
     * <p>
     *          The name of the repository to update.
     *        </p>
     */
    repository: string | undefined;
    /**
     * <p>
     *          An updated repository description.
     *        </p>
     */
    description?: string;
    /**
     * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
     *         in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more
     *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
     */
    upstreams?: UpstreamRepository[];
}
export declare namespace UpdateRepositoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRepositoryRequest) => any;
}
export interface UpdateRepositoryResult {
    /**
     * <p>
     *          The updated repository.
     *        </p>
     */
    repository?: RepositoryDescription;
}
export declare namespace UpdateRepositoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRepositoryResult) => any;
}
