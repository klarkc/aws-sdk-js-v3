import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface AddProfilePermissionRequest {
    /**
     * <p>The human-readable name of the signing profile.</p>
     */
    profileName: string | undefined;
    /**
     * <p>The version of the signing profile.</p>
     */
    profileVersion?: string;
    /**
     * <p>The AWS Signer action permitted as part of cross-account permissions.</p>
     */
    action: string | undefined;
    /**
     * <p>The AWS principal receiving cross-account permissions. This may be an IAM role or
     * 			another AWS account ID.</p>
     */
    principal: string | undefined;
    /**
     * <p>A unique identifier for the current profile revision.</p>
     */
    revisionId?: string;
    /**
     * <p>A unique identifier for the cross-account permission statement.</p>
     */
    statementId: string | undefined;
}
export declare namespace AddProfilePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddProfilePermissionRequest) => any;
}
export interface AddProfilePermissionResponse {
    /**
     * <p>A unique identifier for the current profile revision.</p>
     */
    revisionId?: string;
}
export declare namespace AddProfilePermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddProfilePermissionResponse) => any;
}
/**
 * <p>The resource encountered a conflicting state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServiceErrorException";
    $fault: "server";
    message?: string;
    code?: string;
}
export declare namespace InternalServiceErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServiceErrorException) => any;
}
/**
 * <p>A specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The client is making a request that exceeds service limits.</p>
 */
export interface ServiceLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceLimitExceededException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace ServiceLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceLimitExceededException) => any;
}
/**
 * <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
/**
 * <p>You signing certificate could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>The request contains invalid parameters for the ARN or tags. This exception also
 * 			occurs when you call a tagging API on a cancelled signing profile.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
export interface CancelSigningProfileRequest {
    /**
     * <p>The name of the signing profile to be canceled.</p>
     */
    profileName: string | undefined;
}
export declare namespace CancelSigningProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSigningProfileRequest) => any;
}
export declare type Category = "AWSIoT";
export interface DescribeSigningJobRequest {
    /**
     * <p>The ID of the signing job on input.</p>
     */
    jobId: string | undefined;
}
export declare namespace DescribeSigningJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSigningJobRequest) => any;
}
export declare type EncryptionAlgorithm = "ECDSA" | "RSA";
export declare type HashAlgorithm = "SHA1" | "SHA256";
/**
 * <p>A signing configuration that overrides the default encryption or hash algorithm of a
 * 			signing job.</p>
 */
export interface SigningConfigurationOverrides {
    /**
     * <p>A specified override of the default encryption algorithm that is used in a code signing
     * 			job.</p>
     */
    encryptionAlgorithm?: EncryptionAlgorithm | string;
    /**
     * <p>A specified override of the default hash algorithm that is used in a code signing
     * 			job.</p>
     */
    hashAlgorithm?: HashAlgorithm | string;
}
export declare namespace SigningConfigurationOverrides {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningConfigurationOverrides) => any;
}
export declare type ImageFormat = "JSON" | "JSONDetached" | "JSONEmbedded";
/**
 * <p>Any overrides that are applied to the signing configuration of a code signing
 * 			platform.</p>
 */
export interface SigningPlatformOverrides {
    /**
     * <p>A signing configuration that overrides the default encryption or hash algorithm of a
     * 			signing job.</p>
     */
    signingConfiguration?: SigningConfigurationOverrides;
    /**
     * <p>A signed image is a JSON object. When overriding the default signing platform
     * 			configuration, a customer can select either of two signing formats,
     * 				<code>JSONEmbedded</code> or <code>JSONDetached</code>. (A third format value,
     * 				<code>JSON</code>, is reserved for future use.) With <code>JSONEmbedded</code>, the
     * 			signing image has the payload embedded in it. With <code>JSONDetached</code>, the
     * 			payload is not be embedded in the signing image.</p>
     */
    signingImageFormat?: ImageFormat | string;
}
export declare namespace SigningPlatformOverrides {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningPlatformOverrides) => any;
}
/**
 * <p>Revocation information for a signing job.</p>
 */
export interface SigningJobRevocationRecord {
    /**
     * <p>A caller-supplied reason for revocation.</p>
     */
    reason?: string;
    /**
     * <p>The time of revocation.</p>
     */
    revokedAt?: Date;
    /**
     * <p>The identity of the revoker.</p>
     */
    revokedBy?: string;
}
export declare namespace SigningJobRevocationRecord {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningJobRevocationRecord) => any;
}
/**
 * <p>The S3 bucket name and key where code signing saved your signed code image.</p>
 */
export interface S3SignedObject {
    /**
     * <p>Name of the S3 bucket.</p>
     */
    bucketName?: string;
    /**
     * <p>Key name that uniquely identifies a signed code image in your bucket.</p>
     */
    key?: string;
}
export declare namespace S3SignedObject {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3SignedObject) => any;
}
/**
 * <p>Points to an <code>S3SignedObject</code> object that contains information about your
 * 			signed code image.</p>
 */
export interface SignedObject {
    /**
     * <p>The <code>S3SignedObject</code>.</p>
     */
    s3?: S3SignedObject;
}
export declare namespace SignedObject {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SignedObject) => any;
}
/**
 * <p>The ACM certificate that is used to sign your code.</p>
 */
export interface SigningMaterial {
    /**
     * <p>The Amazon Resource Name (ARN) of the certificates that is used to sign your
     * 			code.</p>
     */
    certificateArn: string | undefined;
}
export declare namespace SigningMaterial {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningMaterial) => any;
}
/**
 * <p>Information about the S3 bucket where you saved your unsigned code.</p>
 */
export interface S3Source {
    /**
     * <p>Name of the S3 bucket.</p>
     */
    bucketName: string | undefined;
    /**
     * <p>Key name of the bucket object that contains your unsigned code.</p>
     */
    key: string | undefined;
    /**
     * <p>Version of your source image in your version enabled S3 bucket.</p>
     */
    version: string | undefined;
}
export declare namespace S3Source {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Source) => any;
}
/**
 * <p>An <code>S3Source</code> object that contains information about the S3 bucket where
 * 			you saved your unsigned code.</p>
 */
export interface Source {
    /**
     * <p>The <code>S3Source</code> object.</p>
     */
    s3?: S3Source;
}
export declare namespace Source {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Source) => any;
}
export declare type SigningStatus = "Failed" | "InProgress" | "Succeeded";
export interface DescribeSigningJobResponse {
    /**
     * <p>The ID of the signing job on output.</p>
     */
    jobId?: string;
    /**
     * <p>The object that contains the name of your S3 bucket or your raw code.</p>
     */
    source?: Source;
    /**
     * <p>The Amazon Resource Name (ARN) of your code signing certificate.</p>
     */
    signingMaterial?: SigningMaterial;
    /**
     * <p>The microcontroller platform to which your signed code image will be
     * 			distributed.</p>
     */
    platformId?: string;
    /**
     * <p>A human-readable name for the signing platform associated with the signing job.</p>
     */
    platformDisplayName?: string;
    /**
     * <p>The name of the profile that initiated the signing operation.</p>
     */
    profileName?: string;
    /**
     * <p>The version of the signing profile used to initiate the signing job.</p>
     */
    profileVersion?: string;
    /**
     * <p>A list of any overrides that were applied to the signing operation.</p>
     */
    overrides?: SigningPlatformOverrides;
    /**
     * <p>Map of user-assigned key-value pairs used during signing. These values contain any
     * 			information that you specified for use in your signing job. </p>
     */
    signingParameters?: {
        [key: string]: string;
    };
    /**
     * <p>Date and time that the signing job was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>Date and time that the signing job was completed.</p>
     */
    completedAt?: Date;
    /**
     * <p>Thr expiration timestamp for the signature generated by the signing job.</p>
     */
    signatureExpiresAt?: Date;
    /**
     * <p>The IAM principal that requested the signing job.</p>
     */
    requestedBy?: string;
    /**
     * <p>Status of the signing job.</p>
     */
    status?: SigningStatus | string;
    /**
     * <p>String value that contains the status reason.</p>
     */
    statusReason?: string;
    /**
     * <p>A revocation record if the signature generated by the signing job has been revoked.
     * 			Contains a timestamp and the ID of the IAM entity that revoked the signature.</p>
     */
    revocationRecord?: SigningJobRevocationRecord;
    /**
     * <p>Name of the S3 bucket where the signed code image is saved by code signing.</p>
     */
    signedObject?: SignedObject;
    /**
     * <p>The AWS account ID of the job owner.</p>
     */
    jobOwner?: string;
    /**
     * <p>The IAM entity that initiated the signing job.</p>
     */
    jobInvoker?: string;
}
export declare namespace DescribeSigningJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSigningJobResponse) => any;
}
/**
 * <p>The name and prefix of the S3 bucket where code signing saves your signed objects.</p>
 */
export interface S3Destination {
    /**
     * <p>Name of the S3 bucket.</p>
     */
    bucketName?: string;
    /**
     * <p>An Amazon S3 prefix that you can use to limit responses to those that begin with the
     * 			specified prefix.</p>
     */
    prefix?: string;
}
export declare namespace S3Destination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Destination) => any;
}
/**
 * <p>Points to an <code>S3Destination</code> object that contains information about your S3
 * 			bucket.</p>
 */
export interface Destination {
    /**
     * <p>The <code>S3Destination</code> object.</p>
     */
    s3?: S3Destination;
}
export declare namespace Destination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Destination) => any;
}
/**
 * <p>The encryption algorithm options that are available to a code signing job.</p>
 */
export interface EncryptionAlgorithmOptions {
    /**
     * <p>The set of accepted encryption algorithms that are allowed in a code signing job.</p>
     */
    allowedValues: (EncryptionAlgorithm | string)[] | undefined;
    /**
     * <p>The default encryption algorithm that is used by a code signing job.</p>
     */
    defaultValue: EncryptionAlgorithm | string | undefined;
}
export declare namespace EncryptionAlgorithmOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EncryptionAlgorithmOptions) => any;
}
export interface GetSigningPlatformRequest {
    /**
     * <p>The ID of the target signing platform.</p>
     */
    platformId: string | undefined;
}
export declare namespace GetSigningPlatformRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSigningPlatformRequest) => any;
}
/**
 * <p>The hash algorithms that are available to a code signing job.</p>
 */
export interface HashAlgorithmOptions {
    /**
     * <p>The set of accepted hash algorithms allowed in a code signing job.</p>
     */
    allowedValues: (HashAlgorithm | string)[] | undefined;
    /**
     * <p>The default hash algorithm that is used in a code signing job.</p>
     */
    defaultValue: HashAlgorithm | string | undefined;
}
export declare namespace HashAlgorithmOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HashAlgorithmOptions) => any;
}
/**
 * <p>The configuration of a code signing operation.</p>
 */
export interface SigningConfiguration {
    /**
     * <p>The encryption algorithm options that are available for a code signing job.</p>
     */
    encryptionAlgorithmOptions: EncryptionAlgorithmOptions | undefined;
    /**
     * <p>The hash algorithm options that are available for a code signing job.</p>
     */
    hashAlgorithmOptions: HashAlgorithmOptions | undefined;
}
export declare namespace SigningConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningConfiguration) => any;
}
/**
 * <p>The image format of a code signing platform or profile.</p>
 */
export interface SigningImageFormat {
    /**
     * <p>The supported formats of a code signing image.</p>
     */
    supportedFormats: (ImageFormat | string)[] | undefined;
    /**
     * <p>The default format of a code signing image.</p>
     */
    defaultFormat: ImageFormat | string | undefined;
}
export declare namespace SigningImageFormat {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningImageFormat) => any;
}
export interface GetSigningPlatformResponse {
    /**
     * <p>The ID of the target signing platform.</p>
     */
    platformId?: string;
    /**
     * <p>The display name of the target signing platform.</p>
     */
    displayName?: string;
    /**
     * <p>A list of partner entities that use the target signing platform.</p>
     */
    partner?: string;
    /**
     * <p>The validation template that is used by the target signing platform.</p>
     */
    target?: string;
    /**
     * <p>The category type of the target signing platform.</p>
     */
    category?: Category | string;
    /**
     * <p>A list of configurations applied to the target platform at signing.</p>
     */
    signingConfiguration?: SigningConfiguration;
    /**
     * <p>The format of the target platform's signing image.</p>
     */
    signingImageFormat?: SigningImageFormat;
    /**
     * <p>The maximum size (in MB) of the payload that can be signed by the target
     * 			platform.</p>
     */
    maxSizeInMB?: number;
    /**
     * <p>A flag indicating whether signatures generated for the signing platform can be
     * 			revoked.</p>
     */
    revocationSupported?: boolean;
}
export declare namespace GetSigningPlatformResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSigningPlatformResponse) => any;
}
export interface GetSigningProfileRequest {
    /**
     * <p>The name of the target signing profile.</p>
     */
    profileName: string | undefined;
    /**
     * <p>The AWS account ID of the profile owner.</p>
     */
    profileOwner?: string;
}
export declare namespace GetSigningProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSigningProfileRequest) => any;
}
/**
 * <p>Revocation information for a signing profile.</p>
 */
export interface SigningProfileRevocationRecord {
    /**
     * <p>The time when revocation becomes effective.</p>
     */
    revocationEffectiveFrom?: Date;
    /**
     * <p>The time when the signing profile was revoked.</p>
     */
    revokedAt?: Date;
    /**
     * <p>The identity of the revoker.</p>
     */
    revokedBy?: string;
}
export declare namespace SigningProfileRevocationRecord {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningProfileRevocationRecord) => any;
}
export declare type ValidityType = "DAYS" | "MONTHS" | "YEARS";
/**
 * <p>The validity period for a signing job.</p>
 */
export interface SignatureValidityPeriod {
    /**
     * <p>The numerical value of the time unit for signature validity.</p>
     */
    value?: number;
    /**
     * <p>The time unit for signature
     * 			validity.</p>
     */
    type?: ValidityType | string;
}
export declare namespace SignatureValidityPeriod {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SignatureValidityPeriod) => any;
}
export declare type SigningProfileStatus = "Active" | "Canceled" | "Revoked";
export interface GetSigningProfileResponse {
    /**
     * <p>The name of the target signing profile.</p>
     */
    profileName?: string;
    /**
     * <p>The current version of the signing profile.</p>
     */
    profileVersion?: string;
    /**
     * <p>The signing profile ARN, including the profile version.</p>
     */
    profileVersionArn?: string;
    /**
     * <p>Revocation information for a signing profile.</p>
     */
    revocationRecord?: SigningProfileRevocationRecord;
    /**
     * <p>The ARN of the certificate that the target profile uses for signing operations.</p>
     */
    signingMaterial?: SigningMaterial;
    /**
     * <p>The ID of the platform that is used by the target signing profile.</p>
     */
    platformId?: string;
    /**
     * <p>A human-readable name for the signing platform associated with the signing
     * 			profile.</p>
     */
    platformDisplayName?: string;
    /**
     * <p>The validity period for a signing job.</p>
     */
    signatureValidityPeriod?: SignatureValidityPeriod;
    /**
     * <p>A list of overrides applied by the target signing profile for signing
     * 			operations.</p>
     */
    overrides?: SigningPlatformOverrides;
    /**
     * <p>A map of key-value pairs for signing operations that is attached to the target signing
     * 			profile.</p>
     */
    signingParameters?: {
        [key: string]: string;
    };
    /**
     * <p>The status of the target signing profile.</p>
     */
    status?: SigningProfileStatus | string;
    /**
     * <p>Reason for the status of the target signing profile.</p>
     */
    statusReason?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
     */
    arn?: string;
    /**
     * <p>A list of tags associated with the signing profile.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetSigningProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSigningProfileResponse) => any;
}
export interface ListProfilePermissionsRequest {
    /**
     * <p>Name of the signing profile containing the cross-account permissions.</p>
     */
    profileName: string | undefined;
    /**
     * <p>String for specifying the next set of paginated results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProfilePermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProfilePermissionsRequest) => any;
}
/**
 * <p>A cross-account permission for a signing profile.</p>
 */
export interface Permission {
    /**
     * <p>An AWS Signer action permitted as part of cross-account permissions.</p>
     */
    action?: string;
    /**
     * <p>The AWS principal that has been granted a cross-account permission.</p>
     */
    principal?: string;
    /**
     * <p>A unique identifier for a cross-account permission statement.</p>
     */
    statementId?: string;
    /**
     * <p>The signing profile version that a permission applies to.</p>
     */
    profileVersion?: string;
}
export declare namespace Permission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Permission) => any;
}
export interface ListProfilePermissionsResponse {
    /**
     * <p>The identifier for the current revision of profile permissions.</p>
     */
    revisionId?: string;
    /**
     * <p>Total size of the policy associated with the Signing Profile in bytes.</p>
     */
    policySizeBytes?: number;
    /**
     * <p>List of permissions associated with the Signing Profile.</p>
     */
    permissions?: Permission[];
    /**
     * <p>String for specifying the next set of paginated results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProfilePermissionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProfilePermissionsResponse) => any;
}
export interface ListSigningJobsRequest {
    /**
     * <p>A status value with which to filter your results.</p>
     */
    status?: SigningStatus | string;
    /**
     * <p>The ID of microcontroller platform that you specified for the distribution of your
     * 			code image.</p>
     */
    platformId?: string;
    /**
     * <p>The IAM principal that requested the signing job.</p>
     */
    requestedBy?: string;
    /**
     * <p>Specifies the maximum number of items to return in the response. Use this parameter
     * 			when paginating results. If additional items exist beyond the number you specify, the
     * 				<code>nextToken</code> element is set in the response. Use the
     * 				<code>nextToken</code> value in a subsequent request to retrieve additional items.
     * 		</p>
     */
    maxResults?: number;
    /**
     * <p>String for specifying the next set of paginated results to return. After you receive a
     * 			response with truncated results, use this parameter in a subsequent request. Set it to
     * 			the value of <code>nextToken</code> from the response that you just received.</p>
     */
    nextToken?: string;
    /**
     * <p>Filters results to return only signing jobs with revoked signatures.</p>
     */
    isRevoked?: boolean;
    /**
     * <p>Filters results to return only signing jobs with signatures expiring before a
     * 			specified timestamp.</p>
     */
    signatureExpiresBefore?: Date;
    /**
     * <p>Filters results to return only signing jobs with signatures expiring after a specified
     * 			timestamp.</p>
     */
    signatureExpiresAfter?: Date;
    /**
     * <p>Filters results to return only signing jobs initiated by a specified IAM
     * 			entity.</p>
     */
    jobInvoker?: string;
}
export declare namespace ListSigningJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSigningJobsRequest) => any;
}
/**
 * <p>Contains information about a signing job.</p>
 */
export interface SigningJob {
    /**
     * <p>The ID of the signing job.</p>
     */
    jobId?: string;
    /**
     * <p>A <code>Source</code> that contains information about a signing job's code image
     * 			source.</p>
     */
    source?: Source;
    /**
     * <p>A <code>SignedObject</code> structure that contains information about a signing job's
     * 			signed code image.</p>
     */
    signedObject?: SignedObject;
    /**
     * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of
     * 			the certificate used for the signing job.</p>
     */
    signingMaterial?: SigningMaterial;
    /**
     * <p>The date and time that the signing job was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The status of the signing job.</p>
     */
    status?: SigningStatus | string;
    /**
     * <p>Indicates whether the signing job is revoked.</p>
     */
    isRevoked?: boolean;
    /**
     * <p>The name of the signing profile that created a signing job.</p>
     */
    profileName?: string;
    /**
     * <p>The version of the signing profile that created a signing job.</p>
     */
    profileVersion?: string;
    /**
     * <p>The unique identifier for a signing platform.</p>
     */
    platformId?: string;
    /**
     * <p>The name of a signing platform.</p>
     */
    platformDisplayName?: string;
    /**
     * <p>The time when the signature of a signing job expires.</p>
     */
    signatureExpiresAt?: Date;
    /**
     * <p>The AWS account ID of the job owner.</p>
     */
    jobOwner?: string;
    /**
     * <p>The AWS account ID of the job invoker.</p>
     */
    jobInvoker?: string;
}
export declare namespace SigningJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningJob) => any;
}
export interface ListSigningJobsResponse {
    /**
     * <p>A list of your signing jobs.</p>
     */
    jobs?: SigningJob[];
    /**
     * <p>String for specifying the next set of paginated results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSigningJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSigningJobsResponse) => any;
}
export interface ListSigningPlatformsRequest {
    /**
     * <p>The category type of a signing platform.</p>
     */
    category?: string;
    /**
     * <p>Any partner entities connected to a signing platform.</p>
     */
    partner?: string;
    /**
     * <p>The validation template that is used by the target signing platform.</p>
     */
    target?: string;
    /**
     * <p>The maximum number of results to be returned by this operation.</p>
     */
    maxResults?: number;
    /**
     * <p>Value for specifying the next set of paginated results to return. After you receive a
     * 			response with truncated results, use this parameter in a subsequent request. Set it to
     * 			the value of <code>nextToken</code> from the response that you just received.</p>
     */
    nextToken?: string;
}
export declare namespace ListSigningPlatformsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSigningPlatformsRequest) => any;
}
/**
 * <p>Contains information about the signing configurations and parameters that are used to
 * 			perform a code signing job.</p>
 */
export interface SigningPlatform {
    /**
     * <p>The ID of a code signing; platform.</p>
     */
    platformId?: string;
    /**
     * <p>The display name of a code signing platform.</p>
     */
    displayName?: string;
    /**
     * <p>Any partner entities linked to a code signing platform.</p>
     */
    partner?: string;
    /**
     * <p>The types of targets that can be signed by a code signing platform.</p>
     */
    target?: string;
    /**
     * <p>The category of a code signing platform.</p>
     */
    category?: Category | string;
    /**
     * <p>The configuration of a code signing platform. This includes the designated hash algorithm
     * 			and encryption algorithm of a signing platform.</p>
     */
    signingConfiguration?: SigningConfiguration;
    /**
     * <p>The image format of a code signing platform or profile.</p>
     */
    signingImageFormat?: SigningImageFormat;
    /**
     * <p>The maximum size (in MB) of code that can be signed by a code signing platform.</p>
     */
    maxSizeInMB?: number;
    /**
     * <p>Indicates whether revocation is supported for the platform.</p>
     */
    revocationSupported?: boolean;
}
export declare namespace SigningPlatform {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningPlatform) => any;
}
export interface ListSigningPlatformsResponse {
    /**
     * <p>A list of all platforms that match the request parameters.</p>
     */
    platforms?: SigningPlatform[];
    /**
     * <p>Value for specifying the next set of paginated results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListSigningPlatformsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSigningPlatformsResponse) => any;
}
export interface ListSigningProfilesRequest {
    /**
     * <p>Designates whether to include profiles with the status of
     * 			<code>CANCELED</code>.</p>
     */
    includeCanceled?: boolean;
    /**
     * <p>The maximum number of profiles to be returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Value for specifying the next set of paginated results to return. After you receive a
     * 			response with truncated results, use this parameter in a subsequent request. Set it to
     * 			the value of <code>nextToken</code> from the response that you just received.</p>
     */
    nextToken?: string;
    /**
     * <p>Filters results to return only signing jobs initiated for a specified signing
     * 			platform.</p>
     */
    platformId?: string;
    /**
     * <p>Filters results to return only signing jobs with statuses in the specified
     * 			list.</p>
     */
    statuses?: (SigningProfileStatus | string)[];
}
export declare namespace ListSigningProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSigningProfilesRequest) => any;
}
/**
 * <p>Contains information about the ACM certificates and code signing configuration parameters
 * 			that can be used by a given code signing user.</p>
 */
export interface SigningProfile {
    /**
     * <p>The name of the signing profile.</p>
     */
    profileName?: string;
    /**
     * <p>The version of a signing profile.</p>
     */
    profileVersion?: string;
    /**
     * <p>The ARN of a signing profile, including the profile version.</p>
     */
    profileVersionArn?: string;
    /**
     * <p>The ACM certificate that is available for use by a signing profile.</p>
     */
    signingMaterial?: SigningMaterial;
    /**
     * <p>The validity period for a signing job created using this signing profile.</p>
     */
    signatureValidityPeriod?: SignatureValidityPeriod;
    /**
     * <p>The ID of a platform that is available for use by a signing profile.</p>
     */
    platformId?: string;
    /**
     * <p>The name of the signing platform.</p>
     */
    platformDisplayName?: string;
    /**
     * <p>The parameters that are available for use by a code signing user.</p>
     */
    signingParameters?: {
        [key: string]: string;
    };
    /**
     * <p>The status of a code signing profile.</p>
     */
    status?: SigningProfileStatus | string;
    /**
     * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
     */
    arn?: string;
    /**
     * <p>A list of tags associated with the signing profile.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace SigningProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SigningProfile) => any;
}
export interface ListSigningProfilesResponse {
    /**
     * <p>A list of profiles that are available in the AWS account. This includes profiles with
     * 			the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set
     * 			to <code>true</code>.</p>
     */
    profiles?: SigningProfile[];
    /**
     * <p>Value for specifying the next set of paginated results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListSigningProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSigningProfilesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
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
     * <p>A list of tags associated with the signing profile.</p>
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
 * <p>The signing profile was not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
export interface PutSigningProfileRequest {
    /**
     * <p>The name of the signing profile to be created.</p>
     */
    profileName: string | undefined;
    /**
     * <p>The AWS Certificate Manager certificate that will be used to sign code with the new signing
     * 			profile.</p>
     */
    signingMaterial?: SigningMaterial;
    /**
     * <p>The default validity period override for any signature generated using this signing
     * 			profile. If unspecified, the default is 135 months.</p>
     */
    signatureValidityPeriod?: SignatureValidityPeriod;
    /**
     * <p>The ID of the signing platform to be created.</p>
     */
    platformId: string | undefined;
    /**
     * <p>A subfield of <code>platform</code>. This specifies any different configuration
     * 			options that you want to apply to the chosen platform (such as a different
     * 				<code>hash-algorithm</code> or <code>signing-algorithm</code>).</p>
     */
    overrides?: SigningPlatformOverrides;
    /**
     * <p>Map of key-value pairs for signing. These can include any information that you want to
     * 			use during signing.</p>
     */
    signingParameters?: {
        [key: string]: string;
    };
    /**
     * <p>Tags to be associated with the signing profile that is being created.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace PutSigningProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutSigningProfileRequest) => any;
}
export interface PutSigningProfileResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the signing profile created.</p>
     */
    arn?: string;
    /**
     * <p>The version of the signing profile being created.</p>
     */
    profileVersion?: string;
    /**
     * <p>The signing profile ARN, including the profile version.</p>
     */
    profileVersionArn?: string;
}
export declare namespace PutSigningProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutSigningProfileResponse) => any;
}
export interface RemoveProfilePermissionRequest {
    /**
     * <p>A human-readable name for the signing profile with permissions to be removed.</p>
     */
    profileName: string | undefined;
    /**
     * <p>An identifier for the current revision of the signing profile permissions.</p>
     */
    revisionId: string | undefined;
    /**
     * <p>A unique identifier for the cross-account permissions statement.</p>
     */
    statementId: string | undefined;
}
export declare namespace RemoveProfilePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveProfilePermissionRequest) => any;
}
export interface RemoveProfilePermissionResponse {
    /**
     * <p>An identifier for the current revision of the profile permissions.</p>
     */
    revisionId?: string;
}
export declare namespace RemoveProfilePermissionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveProfilePermissionResponse) => any;
}
export interface RevokeSignatureRequest {
    /**
     * <p>ID of the signing job to be revoked.</p>
     */
    jobId: string | undefined;
    /**
     * <p>AWS account ID of the job owner.</p>
     */
    jobOwner?: string;
    /**
     * <p>The reason for revoking the signing job.</p>
     */
    reason: string | undefined;
}
export declare namespace RevokeSignatureRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RevokeSignatureRequest) => any;
}
export interface RevokeSigningProfileRequest {
    /**
     * <p>The name of the signing profile to be revoked.</p>
     */
    profileName: string | undefined;
    /**
     * <p>The version of the signing profile to be revoked.</p>
     */
    profileVersion: string | undefined;
    /**
     * <p>The reason for revoking a signing profile.</p>
     */
    reason: string | undefined;
    /**
     * <p>A timestamp for when revocation of a Signing Profile should become effective.
     * 			Signatures generated using the signing profile after this timestamp are not
     * 			trusted.</p>
     */
    effectiveTime: Date | undefined;
}
export declare namespace RevokeSigningProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RevokeSigningProfileRequest) => any;
}
export interface StartSigningJobRequest {
    /**
     * <p>The S3 bucket that contains the object to sign or a BLOB that contains your raw
     * 			code.</p>
     */
    source: Source | undefined;
    /**
     * <p>The S3 bucket in which to save your signed object. The destination contains the name
     * 			of your bucket and an optional prefix.</p>
     */
    destination: Destination | undefined;
    /**
     * <p>The name of the signing profile.</p>
     */
    profileName: string | undefined;
    /**
     * <p>String that identifies the signing request. All calls after the first that use this
     * 			token return the same response as the first call.</p>
     */
    clientRequestToken?: string;
    /**
     * <p>The AWS account ID of the signing profile owner.</p>
     */
    profileOwner?: string;
}
export declare namespace StartSigningJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartSigningJobRequest) => any;
}
export interface StartSigningJobResponse {
    /**
     * <p>The ID of your signing job.</p>
     */
    jobId?: string;
    /**
     * <p>The AWS account ID of the signing job owner.</p>
     */
    jobOwner?: string;
}
export declare namespace StartSigningJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartSigningJobResponse) => any;
}
/**
 * @deprecated
 *
 * <p>The request was denied due to request throttling.</p>
 *         <p>Instead of this error, <code>TooManyRequestsException</code> should be used.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    message?: string;
    code?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>One or more tags to be associated with the signing profile.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the signing profile.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>A list of tag keys to be removed from the signing profile.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
