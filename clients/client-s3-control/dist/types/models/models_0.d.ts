import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The container for abort incomplete multipart upload</p>
 */
export interface AbortIncompleteMultipartUpload {
    /**
     * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to
     *          the Outposts bucket.</p>
     */
    DaysAfterInitiation?: number;
}
export declare namespace AbortIncompleteMultipartUpload {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AbortIncompleteMultipartUpload) => any;
}
export declare enum NetworkOrigin {
    Internet = "Internet",
    VPC = "VPC"
}
/**
 * <p>The virtual private cloud (VPC) configuration for an access point.</p>
 */
export interface VpcConfiguration {
    /**
     * <p>If this field is specified, this access point will only allow connections from the specified VPC ID.</p>
     */
    VpcId: string | undefined;
}
export declare namespace VpcConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcConfiguration) => any;
}
/**
 * <p>An access point used to access a bucket.</p>
 */
export interface AccessPoint {
    /**
     * <p>The name of this access point.</p>
     */
    Name: string | undefined;
    /**
     * <p>Indicates whether this access point allows access from the public internet. If
     *             <code>VpcConfiguration</code> is specified for this access point, then
     *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
     *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
     *          the access point allows access from the public internet, subject to the access point and bucket access
     *          policies.</p>
     */
    NetworkOrigin: NetworkOrigin | string | undefined;
    /**
     * <p>The virtual private cloud (VPC) configuration for this access point, if one exists.</p>
     *          <note>
     *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other AWS services.</p>
     *          </note>
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * <p>The name of the bucket associated with this access point.</p>
     */
    Bucket: string | undefined;
    /**
     * <p>The ARN for the access point.</p>
     */
    AccessPointArn?: string;
}
export declare namespace AccessPoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessPoint) => any;
}
/**
 * <p>A container for the activity metrics.</p>
 */
export interface ActivityMetrics {
    /**
     * <p>A container for whether the activity metrics are enabled.</p>
     */
    IsEnabled?: boolean;
}
export declare namespace ActivityMetrics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActivityMetrics) => any;
}
/**
 * <p></p>
 */
export interface SelectionCriteria {
    /**
     * <p>A container for the delimiter of the selection criteria being used.</p>
     */
    Delimiter?: string;
    /**
     * <p>The max depth of the selection criteria</p>
     */
    MaxDepth?: number;
    /**
     * <p>The minimum number of storage bytes percentage whose metrics will be selected.</p>
     *          <note>
     *             <p>You must choose a value greater than or equal to <code>1.0</code>.</p>
     *          </note>
     */
    MinStorageBytesPercentage?: number;
}
export declare namespace SelectionCriteria {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SelectionCriteria) => any;
}
/**
 * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
 */
export interface PrefixLevelStorageMetrics {
    /**
     * <p>A container for whether prefix-level storage metrics are enabled.</p>
     */
    IsEnabled?: boolean;
    /**
     * <p></p>
     */
    SelectionCriteria?: SelectionCriteria;
}
export declare namespace PrefixLevelStorageMetrics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrefixLevelStorageMetrics) => any;
}
/**
 * <p>A container for the prefix-level configuration.</p>
 */
export interface PrefixLevel {
    /**
     * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
     */
    StorageMetrics: PrefixLevelStorageMetrics | undefined;
}
export declare namespace PrefixLevel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrefixLevel) => any;
}
/**
 * <p>A container for the bucket-level configuration.</p>
 */
export interface BucketLevel {
    /**
     * <p>A container for the bucket-level activity metrics for Amazon S3 Storage Lens</p>
     */
    ActivityMetrics?: ActivityMetrics;
    /**
     * <p>A container for the bucket-level prefix-level metrics for S3 Storage Lens</p>
     */
    PrefixLevel?: PrefixLevel;
}
export declare namespace BucketLevel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BucketLevel) => any;
}
/**
 * <p>A container for the account level Amazon S3 Storage Lens configuration.</p>
 */
export interface AccountLevel {
    /**
     * <p>A container for the S3 Storage Lens activity metrics.</p>
     */
    ActivityMetrics?: ActivityMetrics;
    /**
     * <p>A container for the S3 Storage Lens bucket-level configuration.</p>
     */
    BucketLevel: BucketLevel | undefined;
}
export declare namespace AccountLevel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountLevel) => any;
}
/**
 * <p>AWS Lambda function used to transform objects through an Object Lambda Access Point.</p>
 */
export interface AwsLambdaTransformation {
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Lambda function.</p>
     */
    FunctionArn: string | undefined;
    /**
     * <p>Additional JSON that provides supplemental data to the Lambda function used to transform objects.</p>
     */
    FunctionPayload?: string;
}
export declare namespace AwsLambdaTransformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AwsLambdaTransformation) => any;
}
/**
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account.
 *          You can enable the configuration options in any combination. For more information about
 *          when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This is not supported for Amazon S3 on Outposts.</p>
 */
export interface PublicAccessBlockConfiguration {
    /**
     * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in
     *       this account. Setting this element to <code>TRUE</code> causes the following behavior:</p>
     *          <ul>
     *             <li>
     *                <p>PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.</p>
     *             </li>
     *             <li>
     *                <p>PUT Object calls fail if the request includes a public ACL.</p>
     *             </li>
     *             <li>
     *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
     *             </li>
     *          </ul>
     *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
     *          <p>This is not supported for Amazon S3 on Outposts.</p>
     */
    BlockPublicAcls?: boolean;
    /**
     * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this
     *          element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this
     *          account and any objects that they contain. </p>
     *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
     *          prevent new public ACLs from being set.</p>
     *          <p>This is not supported for Amazon S3 on Outposts.</p>
     */
    IgnorePublicAcls?: boolean;
    /**
     * <p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
     *          Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket
     *          policy if the specified bucket policy allows public access. </p>
     *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
     *          <p>This is not supported for Amazon S3 on Outposts.</p>
     */
    BlockPublicPolicy?: boolean;
    /**
     * <p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account.
     *          Setting this element to <code>TRUE</code> restricts access to buckets with public policies
     *          to only AWS service principals and authorized users within this account.</p>
     *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that public
     *          and cross-account access within any public bucket policy, including non-public delegation to
     *          specific accounts, is blocked.</p>
     *          <p>This is not supported for Amazon S3 on Outposts.</p>
     */
    RestrictPublicBuckets?: boolean;
}
export declare namespace PublicAccessBlockConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublicAccessBlockConfiguration) => any;
}
export interface CreateAccessPointRequest {
    /**
     * <p>The AWS account ID for the owner of the bucket for which you want to create an access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name you want to assign to this access point.</p>
     */
    Name: string | undefined;
    /**
     * <p>The name of the bucket that you want to associate this access point with.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
    /**
     * <p>If you include this field, Amazon S3 restricts access to this access point to requests from the
     *          specified virtual private cloud (VPC).</p>
     *          <note>
     *             <p>This is required for creating an access point for Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * <p>
     *         The <code>PublicAccessBlock</code> configuration that you want to apply to the access point.
     *       </p>
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}
export declare namespace CreateAccessPointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAccessPointRequest) => any;
}
export interface CreateAccessPointResult {
    /**
     * <p>The ARN of the access point.</p>
     *          <note>
     *             <p>This is only supported by Amazon S3 on Outposts.</p>
     *          </note>
     */
    AccessPointArn?: string;
}
export declare namespace CreateAccessPointResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAccessPointResult) => any;
}
export declare enum ObjectLambdaAllowedFeature {
    GetObjectPartNumber = "GetObject-PartNumber",
    GetObjectRange = "GetObject-Range"
}
export declare enum ObjectLambdaTransformationConfigurationAction {
    GetObject = "GetObject"
}
/**
 * <p>A container for AwsLambdaTransformation.</p>
 */
export declare type ObjectLambdaContentTransformation = ObjectLambdaContentTransformation.AwsLambdaMember | ObjectLambdaContentTransformation.$UnknownMember;
export declare namespace ObjectLambdaContentTransformation {
    /**
     * <p>A container for an AWS Lambda function.</p>
     */
    interface AwsLambdaMember {
        AwsLambda: AwsLambdaTransformation;
        $unknown?: never;
    }
    interface $UnknownMember {
        AwsLambda?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        AwsLambda: (value: AwsLambdaTransformation) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: ObjectLambdaContentTransformation, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ObjectLambdaContentTransformation) => any;
}
/**
 * <p>A configuration used when creating an Object Lambda Access Point transformation.</p>
 */
export interface ObjectLambdaTransformationConfiguration {
    /**
     * <p>A container for the action of an Object Lambda Access Point configuration. Valid input is <code>GetObject</code>.</p>
     */
    Actions: (ObjectLambdaTransformationConfigurationAction | string)[] | undefined;
    /**
     * <p>A container for the content transformation of an Object Lambda Access Point configuration.</p>
     */
    ContentTransformation: ObjectLambdaContentTransformation | undefined;
}
export declare namespace ObjectLambdaTransformationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ObjectLambdaTransformationConfiguration) => any;
}
/**
 * <p>A configuration used when creating an Object Lambda Access Point.</p>
 */
export interface ObjectLambdaConfiguration {
    /**
     * <p>Standard access point associated with the Object Lambda Access Point.</p>
     */
    SupportingAccessPoint: string | undefined;
    /**
     * <p>A container for whether the CloudWatch metrics configuration is enabled.</p>
     */
    CloudWatchMetricsEnabled?: boolean;
    /**
     * <p>A container for allowed features. Valid inputs are <code>GetObject-Range</code>
     *            and <code>GetObject-PartNumber</code>.</p>
     */
    AllowedFeatures?: (ObjectLambdaAllowedFeature | string)[];
    /**
     * <p>A container for transformation configurations for an Object Lambda Access Point.</p>
     */
    TransformationConfigurations: ObjectLambdaTransformationConfiguration[] | undefined;
}
export declare namespace ObjectLambdaConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ObjectLambdaConfiguration) => any;
}
export interface CreateAccessPointForObjectLambdaRequest {
    /**
     * <p>The AWS account ID for owner of the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name you want to assign to this Object Lambda Access Point.</p>
     */
    Name: string | undefined;
    /**
     * <p>Object Lambda Access Point configuration as a JSON document.</p>
     */
    Configuration: ObjectLambdaConfiguration | undefined;
}
export declare namespace CreateAccessPointForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAccessPointForObjectLambdaRequest) => any;
}
export interface CreateAccessPointForObjectLambdaResult {
    /**
     * <p>Specifies the ARN for the Object Lambda Access Point.</p>
     */
    ObjectLambdaAccessPointArn?: string;
}
export declare namespace CreateAccessPointForObjectLambdaResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAccessPointForObjectLambdaResult) => any;
}
/**
 * <p>The requested Outposts bucket name is not available. The bucket namespace is shared by
 *          all users of the AWS Outposts in this Region. Select a different name and try
 *          again.</p>
 */
export interface BucketAlreadyExists extends __SmithyException, $MetadataBearer {
    name: "BucketAlreadyExists";
    $fault: "client";
}
export declare namespace BucketAlreadyExists {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BucketAlreadyExists) => any;
}
/**
 * <p>The Outposts bucket you tried to create already exists, and you own it. </p>
 */
export interface BucketAlreadyOwnedByYou extends __SmithyException, $MetadataBearer {
    name: "BucketAlreadyOwnedByYou";
    $fault: "client";
}
export declare namespace BucketAlreadyOwnedByYou {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BucketAlreadyOwnedByYou) => any;
}
export declare type BucketCannedACL = "authenticated-read" | "private" | "public-read" | "public-read-write";
export declare type BucketLocationConstraint = "EU" | "ap-northeast-1" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "cn-north-1" | "eu-central-1" | "eu-west-1" | "sa-east-1" | "us-west-1" | "us-west-2";
/**
 * <p>The container for the bucket configuration.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 */
export interface CreateBucketConfiguration {
    /**
     * <p>Specifies the Region where the bucket will be created.
     *          If you are creating a bucket on the US East (N. Virginia) Region (us-east-1),
     *          you do not need to specify the location.
     *       </p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    LocationConstraint?: BucketLocationConstraint | string;
}
export declare namespace CreateBucketConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBucketConfiguration) => any;
}
export interface CreateBucketRequest {
    /**
     * <p>The canned ACL to apply to the bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    ACL?: BucketCannedACL | string;
    /**
     * <p>The name of the bucket.</p>
     */
    Bucket: string | undefined;
    /**
     * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    GrantFullControl?: string;
    /**
     * <p>Allows grantee to list the objects in the bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    GrantRead?: string;
    /**
     * <p>Allows grantee to read the bucket ACL.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    GrantReadACP?: string;
    /**
     * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    GrantWrite?: string;
    /**
     * <p>Allows grantee to write the ACL for the applicable bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    GrantWriteACP?: string;
    /**
     * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    ObjectLockEnabledForBucket?: boolean;
    /**
     * <p>The ID of the Outposts where the bucket is being created.</p>
     *          <note>
     *             <p>This is required by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    OutpostId?: string;
    /**
     * <p>The configuration information for the bucket.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    CreateBucketConfiguration?: CreateBucketConfiguration;
}
export declare namespace CreateBucketRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBucketRequest) => any;
}
export interface CreateBucketResult {
    /**
     * <p>The location of the bucket.</p>
     */
    Location?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    BucketArn?: string;
}
export declare namespace CreateBucketResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBucketResult) => any;
}
/**
 * <p></p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    Message?: string;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
/**
 * <p>Contains the information required to locate a manifest object.</p>
 */
export interface JobManifestLocation {
    /**
     * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
     *          <important>
     *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
     *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
     *             XML related object key constraints</a>.</p>
     *          </important>
     */
    ObjectArn: string | undefined;
    /**
     * <p>The optional version ID to identify a specific version of the manifest object.</p>
     */
    ObjectVersionId?: string;
    /**
     * <p>The ETag for the specified manifest object.</p>
     */
    ETag: string | undefined;
}
export declare namespace JobManifestLocation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobManifestLocation) => any;
}
export declare enum JobManifestFieldName {
    Bucket = "Bucket",
    Ignore = "Ignore",
    Key = "Key",
    VersionId = "VersionId"
}
export declare enum JobManifestFormat {
    S3BatchOperations_CSV_20180820 = "S3BatchOperations_CSV_20180820",
    S3InventoryReport_CSV_20161130 = "S3InventoryReport_CSV_20161130"
}
/**
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
 */
export interface JobManifestSpec {
    /**
     * <p>Indicates which of the available formats the specified manifest uses.</p>
     */
    Format: JobManifestFormat | string | undefined;
    /**
     * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code> format, this element describes which columns contain the required data.</p>
     */
    Fields?: (JobManifestFieldName | string)[];
}
export declare namespace JobManifestSpec {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobManifestSpec) => any;
}
/**
 * <p>Contains the configuration information for a job's manifest.</p>
 */
export interface JobManifest {
    /**
     * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
     */
    Spec: JobManifestSpec | undefined;
    /**
     * <p>Contains the information required to locate the specified job's manifest.</p>
     */
    Location: JobManifestLocation | undefined;
}
export declare namespace JobManifest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobManifest) => any;
}
/**
 * <p>Contains the configuration parameters for a <code>Lambda Invoke</code> operation.</p>
 */
export interface LambdaInvokeOperation {
    /**
     * <p>The Amazon Resource Name (ARN) for the AWS Lambda function that the specified job will invoke on every object in the manifest.</p>
     */
    FunctionArn?: string;
}
export declare namespace LambdaInvokeOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LambdaInvokeOperation) => any;
}
/**
 * <p>Contains no configuration parameters because the DELETE Object tagging API only accepts the bucket name and key name as parameters, which are defined in the job's manifest.</p>
 */
export interface S3DeleteObjectTaggingOperation {
}
export declare namespace S3DeleteObjectTaggingOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3DeleteObjectTaggingOperation) => any;
}
export declare enum S3GlacierJobTier {
    BULK = "BULK",
    STANDARD = "STANDARD"
}
/**
 * <p>Contains the configuration parameters for an S3 Initiate Restore Object job.
 *          S3 Batch Operations passes every object to the underlying POST Object restore API. For
 *          more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.</p>
 */
export interface S3InitiateRestoreObjectOperation {
    /**
     * <p>This argument specifies how long the S3 Glacier or S3 Glacier Deep Archive object remains available in Amazon S3.
     *          S3 Initiate Restore Object jobs that
     *          target S3 Glacier and S3 Glacier Deep Archive objects require <code>ExpirationInDays</code> set to 1
     *          or greater.</p>
     *          <p>Conversely, do <i>not</i> set <code>ExpirationInDays</code> when
     *          creating S3 Initiate Restore Object jobs that target
     *          S3 Intelligent-Tiering Archive Access and Deep Archive Access tier objects. Objects in
     *          S3 Intelligent-Tiering archive access tiers are not subject to restore expiry, so
     *          specifying <code>ExpirationInDays</code> results in restore request failure.</p>
     *          <p>S3 Batch Operations jobs can operate either on S3 Glacier and S3 Glacier Deep Archive storage class
     *          objects or on S3 Intelligent-Tiering Archive Access and Deep Archive Access storage tier
     *          objects, but not both types in the same job. If you need to restore objects of both types
     *          you <i>must</i> create separate Batch Operations jobs. </p>
     */
    ExpirationInDays?: number;
    /**
     * <p>S3 Batch Operations supports <code>STANDARD</code> and <code>BULK</code> retrieval tiers,
     *          but not the <code>EXPEDITED</code> retrieval tier.</p>
     */
    GlacierJobTier?: S3GlacierJobTier | string;
}
export declare namespace S3InitiateRestoreObjectOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3InitiateRestoreObjectOperation) => any;
}
export declare enum S3GranteeTypeIdentifier {
    CANONICAL = "id",
    EMAIL_ADDRESS = "emailAddress",
    GROUP = "uri"
}
/**
 * <p></p>
 */
export interface S3Grantee {
    /**
     * <p></p>
     */
    TypeIdentifier?: S3GranteeTypeIdentifier | string;
    /**
     * <p></p>
     */
    Identifier?: string;
    /**
     * <p></p>
     */
    DisplayName?: string;
}
export declare namespace S3Grantee {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Grantee) => any;
}
export declare enum S3Permission {
    FULL_CONTROL = "FULL_CONTROL",
    READ = "READ",
    READ_ACP = "READ_ACP",
    WRITE = "WRITE",
    WRITE_ACP = "WRITE_ACP"
}
/**
 * <p></p>
 */
export interface S3Grant {
    /**
     * <p></p>
     */
    Grantee?: S3Grantee;
    /**
     * <p></p>
     */
    Permission?: S3Permission | string;
}
export declare namespace S3Grant {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Grant) => any;
}
/**
 * <p></p>
 */
export interface S3ObjectOwner {
    /**
     * <p></p>
     */
    ID?: string;
    /**
     * <p></p>
     */
    DisplayName?: string;
}
export declare namespace S3ObjectOwner {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3ObjectOwner) => any;
}
/**
 * <p></p>
 */
export interface S3AccessControlList {
    /**
     * <p></p>
     */
    Owner: S3ObjectOwner | undefined;
    /**
     * <p></p>
     */
    Grants?: S3Grant[];
}
export declare namespace S3AccessControlList {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3AccessControlList) => any;
}
export declare enum S3CannedAccessControlList {
    AUTHENTICATED_READ = "authenticated-read",
    AWS_EXEC_READ = "aws-exec-read",
    BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control",
    BUCKET_OWNER_READ = "bucket-owner-read",
    PRIVATE = "private",
    PUBLIC_READ = "public-read",
    PUBLIC_READ_WRITE = "public-read-write"
}
/**
 * <p></p>
 */
export interface S3AccessControlPolicy {
    /**
     * <p></p>
     */
    AccessControlList?: S3AccessControlList;
    /**
     * <p></p>
     */
    CannedAccessControlList?: S3CannedAccessControlList | string;
}
export declare namespace S3AccessControlPolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3AccessControlPolicy) => any;
}
/**
 * <p>Contains the configuration parameters for a Set Object ACL operation. S3 Batch Operations passes every object to the underlying PUT Object acl API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>.</p>
 */
export interface S3SetObjectAclOperation {
    /**
     * <p></p>
     */
    AccessControlPolicy?: S3AccessControlPolicy;
}
export declare namespace S3SetObjectAclOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3SetObjectAclOperation) => any;
}
export declare enum S3MetadataDirective {
    COPY = "COPY",
    REPLACE = "REPLACE"
}
export declare enum S3SSEAlgorithm {
    AES256 = "AES256",
    KMS = "KMS"
}
/**
 * <p></p>
 */
export interface S3ObjectMetadata {
    /**
     * <p></p>
     */
    CacheControl?: string;
    /**
     * <p></p>
     */
    ContentDisposition?: string;
    /**
     * <p></p>
     */
    ContentEncoding?: string;
    /**
     * <p></p>
     */
    ContentLanguage?: string;
    /**
     * <p></p>
     */
    UserMetadata?: {
        [key: string]: string;
    };
    /**
     * <p></p>
     */
    ContentLength?: number;
    /**
     * <p></p>
     */
    ContentMD5?: string;
    /**
     * <p></p>
     */
    ContentType?: string;
    /**
     * <p></p>
     */
    HttpExpiresDate?: Date;
    /**
     * <p></p>
     */
    RequesterCharged?: boolean;
    /**
     * <p></p>
     */
    SSEAlgorithm?: S3SSEAlgorithm | string;
}
export declare namespace S3ObjectMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3ObjectMetadata) => any;
}
/**
 * <p></p>
 */
export interface S3Tag {
    /**
     * <p></p>
     */
    Key: string | undefined;
    /**
     * <p></p>
     */
    Value: string | undefined;
}
export declare namespace S3Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Tag) => any;
}
export declare enum S3ObjectLockLegalHoldStatus {
    OFF = "OFF",
    ON = "ON"
}
export declare enum S3ObjectLockMode {
    COMPLIANCE = "COMPLIANCE",
    GOVERNANCE = "GOVERNANCE"
}
export declare enum S3StorageClass {
    DEEP_ARCHIVE = "DEEP_ARCHIVE",
    GLACIER = "GLACIER",
    INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
    ONEZONE_IA = "ONEZONE_IA",
    STANDARD = "STANDARD",
    STANDARD_IA = "STANDARD_IA"
}
/**
 * <p>Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every object to the underlying PUT Copy object
 *          API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.</p>
 */
export interface S3CopyObjectOperation {
    /**
     * <p>Specifies the destination bucket ARN for the batch copy operation.
     *          For example, to copy objects to a bucket named "destinationBucket",
     *          set the TargetResource to "arn:aws:s3:::destinationBucket".</p>
     */
    TargetResource?: string;
    /**
     * <p></p>
     */
    CannedAccessControlList?: S3CannedAccessControlList | string;
    /**
     * <p></p>
     */
    AccessControlGrants?: S3Grant[];
    /**
     * <p></p>
     */
    MetadataDirective?: S3MetadataDirective | string;
    /**
     * <p></p>
     */
    ModifiedSinceConstraint?: Date;
    /**
     * <p></p>
     */
    NewObjectMetadata?: S3ObjectMetadata;
    /**
     * <p></p>
     */
    NewObjectTagging?: S3Tag[];
    /**
     * <p>Specifies an optional metadata property for website redirects,
     *             <code>x-amz-website-redirect-location</code>. Allows webpage redirects if the object is
     *          accessed through a website endpoint.</p>
     */
    RedirectLocation?: string;
    /**
     * <p></p>
     */
    RequesterPays?: boolean;
    /**
     * <p></p>
     */
    StorageClass?: S3StorageClass | string;
    /**
     * <p></p>
     */
    UnModifiedSinceConstraint?: Date;
    /**
     * <p></p>
     */
    SSEAwsKmsKeyId?: string;
    /**
     * <p>Specifies the folder prefix into which you would like the objects to be copied. For
     *          example, to copy objects into a folder named "Folder1" in the destination bucket, set the
     *          TargetKeyPrefix to "Folder1/".</p>
     */
    TargetKeyPrefix?: string;
    /**
     * <p>The legal hold status to be applied to all objects in the Batch Operations job.</p>
     */
    ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus | string;
    /**
     * <p>The retention mode to be applied to all objects in the Batch Operations job.</p>
     */
    ObjectLockMode?: S3ObjectLockMode | string;
    /**
     * <p>The date when the applied object retention configuration expires on all objects in
     *          the Batch Operations job.</p>
     */
    ObjectLockRetainUntilDate?: Date;
    /**
     * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
     *          server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code>
     *          causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
     *          <p>Specifying this header with an <i>object</i> action doesn’t affect
     *          <i>bucket-level</i> settings for S3 Bucket Key.</p>
     */
    BucketKeyEnabled?: boolean;
}
export declare namespace S3CopyObjectOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3CopyObjectOperation) => any;
}
/**
 * <p>Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations
 *          job.</p>
 */
export interface S3ObjectLockLegalHold {
    /**
     * <p>The Object Lock legal hold status to be applied to all objects in the Batch Operations job.</p>
     */
    Status: S3ObjectLockLegalHoldStatus | string | undefined;
}
export declare namespace S3ObjectLockLegalHold {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3ObjectLockLegalHold) => any;
}
/**
 * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
 *          S3 Batch Operations job passes every object to the underlying
 *             <code>PutObjectLegalHold</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using
 *             S3 Object Lock legal hold with S3 Batch Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3SetObjectLegalHoldOperation {
    /**
     * <p>Contains the Object Lock legal hold status to be applied to all objects in the Batch Operations job.</p>
     */
    LegalHold: S3ObjectLockLegalHold | undefined;
}
export declare namespace S3SetObjectLegalHoldOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3SetObjectLegalHoldOperation) => any;
}
export declare enum S3ObjectLockRetentionMode {
    COMPLIANCE = "COMPLIANCE",
    GOVERNANCE = "GOVERNANCE"
}
/**
 * <p>Contains the S3 Object Lock retention mode to be applied to all objects in the
 *          S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code>
 *          data types in your operation, you will remove the retention from your objects. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3Retention {
    /**
     * <p>The date when the applied Object Lock retention will expire on all objects set by the Batch Operations job.</p>
     */
    RetainUntilDate?: Date;
    /**
     * <p>The Object Lock retention mode to be applied to all objects in the Batch Operations job.</p>
     */
    Mode?: S3ObjectLockRetentionMode | string;
}
export declare namespace S3Retention {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Retention) => any;
}
/**
 * <p>Contains the configuration parameters for the Object Lock retention action for an
 *          S3 Batch Operations job. Batch Operations passes every object to the underlying
 *             <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using
 *             S3 Object Lock retention with S3 Batch Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface S3SetObjectRetentionOperation {
    /**
     * <p>Indicates if the action should be applied to objects in the Batch Operations job even if they have Object Lock <code>
     *          GOVERNANCE</code> type in place.</p>
     */
    BypassGovernanceRetention?: boolean;
    /**
     * <p>Contains the Object Lock retention mode to be applied to all objects in the Batch Operations
     *          job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
     *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
     */
    Retention: S3Retention | undefined;
}
export declare namespace S3SetObjectRetentionOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3SetObjectRetentionOperation) => any;
}
/**
 * <p>Contains the configuration parameters for a Set Object Tagging operation. S3 Batch Operations passes every object to the underlying PUT Object tagging API.
 *          For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>.</p>
 */
export interface S3SetObjectTaggingOperation {
    /**
     * <p></p>
     */
    TagSet?: S3Tag[];
}
export declare namespace S3SetObjectTaggingOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3SetObjectTaggingOperation) => any;
}
/**
 * <p>The operation that you want this job to perform on every object listed in the manifest.
 *          For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface JobOperation {
    /**
     * <p>Directs the specified job to invoke an AWS Lambda function on every object in the manifest.</p>
     */
    LambdaInvoke?: LambdaInvokeOperation;
    /**
     * <p>Directs the specified job to run a PUT Copy object call on every object in the manifest.</p>
     */
    S3PutObjectCopy?: S3CopyObjectOperation;
    /**
     * <p>Directs the specified job to run a PUT Object acl call on every object in the manifest.</p>
     */
    S3PutObjectAcl?: S3SetObjectAclOperation;
    /**
     * <p>Directs the specified job to run a PUT Object tagging call on every object in the manifest.</p>
     */
    S3PutObjectTagging?: S3SetObjectTaggingOperation;
    /**
     * <p>Directs the specified job to execute a DELETE Object tagging call on every object in the manifest.</p>
     */
    S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;
    /**
     * <p>Directs the specified job to initiate restore requests for every archived object in the manifest.</p>
     */
    S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;
    /**
     * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
     *          S3 Batch Operations job passes every object to the underlying
     *             <code>PutObjectLegalHold</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using
     *             S3 Object Lock legal hold with S3 Batch Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     */
    S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;
    /**
     * <p>Contains the configuration parameters for the Object Lock retention action for an
     *          S3 Batch Operations job. Batch Operations passes every object to the underlying
     *             <code>PutObjectRetention</code> API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using
     *             S3 Object Lock retention with S3 Batch Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     */
    S3PutObjectRetention?: S3SetObjectRetentionOperation;
}
export declare namespace JobOperation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobOperation) => any;
}
export declare enum JobReportFormat {
    Report_CSV_20180820 = "Report_CSV_20180820"
}
export declare enum JobReportScope {
    AllTasks = "AllTasks",
    FailedTasksOnly = "FailedTasksOnly"
}
/**
 * <p>Contains the configuration parameters for a job-completion report.</p>
 */
export interface JobReport {
    /**
     * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.</p>
     */
    Bucket?: string;
    /**
     * <p>The format of the specified job-completion report.</p>
     */
    Format?: JobReportFormat | string;
    /**
     * <p>Indicates whether the specified job will generate a job-completion report.</p>
     */
    Enabled: boolean | undefined;
    /**
     * <p>An optional prefix to describe where in the specified bucket the job-completion report
     *          will be stored. Amazon S3 stores the job-completion report at
     *             <code><prefix>/job-<job-id>/report.json</code>.</p>
     */
    Prefix?: string;
    /**
     * <p>Indicates whether the job-completion report will include details of all tasks or only failed tasks.</p>
     */
    ReportScope?: JobReportScope | string;
}
export declare namespace JobReport {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobReport) => any;
}
export interface CreateJobRequest {
    /**
     * <p>The AWS account ID that creates the job.</p>
     */
    AccountId?: string;
    /**
     * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.</p>
     */
    ConfirmationRequired?: boolean;
    /**
     * <p>The action that you want this job to perform on every object listed in the manifest.
     *          For more information about the available actions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-actions.html">Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     */
    Operation: JobOperation | undefined;
    /**
     * <p>Configuration parameters for the optional job-completion report.</p>
     */
    Report: JobReport | undefined;
    /**
     * <p>An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.</p>
     */
    ClientRequestToken?: string;
    /**
     * <p>Configuration parameters for the manifest.</p>
     */
    Manifest: JobManifest | undefined;
    /**
     * <p>A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.</p>
     */
    Description?: string;
    /**
     * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
     */
    Priority: number | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
     *          that Batch Operations will use to run this job's action on every object in the
     *          manifest.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. </p>
     */
    Tags?: S3Tag[];
}
export declare namespace CreateJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateJobRequest) => any;
}
export interface CreateJobResult {
    /**
     * <p>The ID for this job. Amazon S3 generates this ID automatically and returns it after a
     *          successful <code>Create Job</code> request.</p>
     */
    JobId?: string;
}
export declare namespace CreateJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateJobResult) => any;
}
/**
 * <p></p>
 */
export interface IdempotencyException extends __SmithyException, $MetadataBearer {
    name: "IdempotencyException";
    $fault: "client";
    Message?: string;
}
export declare namespace IdempotencyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdempotencyException) => any;
}
/**
 * <p></p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
    name: "InternalServiceException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServiceException) => any;
}
/**
 * <p></p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
export interface DeleteAccessPointRequest {
    /**
     * <p>The account ID for the account that owns the specified access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point you want to delete.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
     */
    Name: string | undefined;
}
export declare namespace DeleteAccessPointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessPointRequest) => any;
}
export interface DeleteAccessPointForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point you want to delete.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteAccessPointForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessPointForObjectLambdaRequest) => any;
}
export interface DeleteAccessPointPolicyRequest {
    /**
     * <p>The account ID for the account that owns the specified access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point whose policy you want to delete.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
     */
    Name: string | undefined;
}
export declare namespace DeleteAccessPointPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessPointPolicyRequest) => any;
}
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point you want to delete the policy for.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteAccessPointPolicyForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessPointPolicyForObjectLambdaRequest) => any;
}
export interface DeleteBucketRequest {
    /**
     * <p>The account ID that owns the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket being deleted.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace DeleteBucketRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteBucketRequest) => any;
}
export interface DeleteBucketLifecycleConfigurationRequest {
    /**
     * <p>The account ID of the lifecycle configuration to delete.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace DeleteBucketLifecycleConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteBucketLifecycleConfigurationRequest) => any;
}
export interface DeleteBucketPolicyRequest {
    /**
     * <p>The account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace DeleteBucketPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteBucketPolicyRequest) => any;
}
export interface DeleteBucketTaggingRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket tag set to be removed.</p>
     */
    AccountId?: string;
    /**
     * <p>The bucket ARN that has the tag set to be removed.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace DeleteBucketTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteBucketTaggingRequest) => any;
}
export interface DeleteJobTaggingRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID for the S3 Batch Operations job whose tags you want to delete.</p>
     */
    JobId: string | undefined;
}
export declare namespace DeleteJobTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteJobTaggingRequest) => any;
}
export interface DeleteJobTaggingResult {
}
export declare namespace DeleteJobTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteJobTaggingResult) => any;
}
/**
 * <p></p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
export interface DeletePublicAccessBlockRequest {
    /**
     * <p>The account ID for the AWS account whose <code>PublicAccessBlock</code> configuration you want
     *          to remove.</p>
     */
    AccountId?: string;
}
export declare namespace DeletePublicAccessBlockRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePublicAccessBlockRequest) => any;
}
export interface DeleteStorageLensConfigurationRequest {
    /**
     * <p>The ID of the S3 Storage Lens configuration.</p>
     */
    ConfigId: string | undefined;
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
}
export declare namespace DeleteStorageLensConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStorageLensConfigurationRequest) => any;
}
export interface DeleteStorageLensConfigurationTaggingRequest {
    /**
     * <p>The ID of the S3 Storage Lens configuration.</p>
     */
    ConfigId: string | undefined;
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
}
export declare namespace DeleteStorageLensConfigurationTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStorageLensConfigurationTaggingRequest) => any;
}
export interface DeleteStorageLensConfigurationTaggingResult {
}
export declare namespace DeleteStorageLensConfigurationTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStorageLensConfigurationTaggingResult) => any;
}
export interface DescribeJobRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID for the job whose information you want to retrieve.</p>
     */
    JobId: string | undefined;
}
export declare namespace DescribeJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRequest) => any;
}
/**
 * <p>If this job failed, this element indicates why the job failed.</p>
 */
export interface JobFailure {
    /**
     * <p>The failure code, if any, for the specified job.</p>
     */
    FailureCode?: string;
    /**
     * <p>The failure reason, if any, for the specified job.</p>
     */
    FailureReason?: string;
}
export declare namespace JobFailure {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobFailure) => any;
}
/**
 * <p>Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed.</p>
 */
export interface JobProgressSummary {
    /**
     * <p></p>
     */
    TotalNumberOfTasks?: number;
    /**
     * <p></p>
     */
    NumberOfTasksSucceeded?: number;
    /**
     * <p></p>
     */
    NumberOfTasksFailed?: number;
}
export declare namespace JobProgressSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobProgressSummary) => any;
}
export declare enum JobStatus {
    Active = "Active",
    Cancelled = "Cancelled",
    Cancelling = "Cancelling",
    Complete = "Complete",
    Completing = "Completing",
    Failed = "Failed",
    Failing = "Failing",
    New = "New",
    Paused = "Paused",
    Pausing = "Pausing",
    Preparing = "Preparing",
    Ready = "Ready",
    Suspended = "Suspended"
}
/**
 * <p>A container element for the job configuration and status information returned by a <code>Describe Job</code> request.</p>
 */
export interface JobDescriptor {
    /**
     * <p>The ID for the specified job.</p>
     */
    JobId?: string;
    /**
     * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.</p>
     */
    ConfirmationRequired?: boolean;
    /**
     * <p>The description for this job, if one was provided in this job's <code>Create Job</code> request.</p>
     */
    Description?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for this job.</p>
     */
    JobArn?: string;
    /**
     * <p>The current status of the specified job.</p>
     */
    Status?: JobStatus | string;
    /**
     * <p>The configuration information for the specified job's manifest object.</p>
     */
    Manifest?: JobManifest;
    /**
     * <p>The operation that the specified job is configured to run on the objects listed in the manifest.</p>
     */
    Operation?: JobOperation;
    /**
     * <p>The priority of the specified job.</p>
     */
    Priority?: number;
    /**
     * <p>Describes the total number of tasks that the specified job has run, the number of tasks
     *          that succeeded, and the number of tasks that failed.</p>
     */
    ProgressSummary?: JobProgressSummary;
    /**
     * <p>The reason for updating the job.</p>
     */
    StatusUpdateReason?: string;
    /**
     * <p>If the specified job failed, this field contains information describing the failure.</p>
     */
    FailureReasons?: JobFailure[];
    /**
     * <p>Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.</p>
     */
    Report?: JobReport;
    /**
     * <p>A timestamp indicating when this job was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
     */
    TerminationDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
     *          assigned to run the tasks for this job.</p>
     */
    RoleArn?: string;
    /**
     * <p>The timestamp when this job was suspended, if it has been suspended.</p>
     */
    SuspendedDate?: Date;
    /**
     * <p>The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters
     *             the <code>Suspended</code> state to await confirmation before running. After you confirm the job, it automatically exits the <code>Suspended</code> state.</p>
     */
    SuspendedCause?: string;
}
export declare namespace JobDescriptor {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobDescriptor) => any;
}
export interface DescribeJobResult {
    /**
     * <p>Contains the configuration parameters and status for the job specified in the <code>Describe Job</code> request.</p>
     */
    Job?: JobDescriptor;
}
export declare namespace DescribeJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobResult) => any;
}
export interface GetAccessPointRequest {
    /**
     * <p>The account ID for the account that owns the specified access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point whose configuration information you want to retrieve.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointRequest) => any;
}
export interface GetAccessPointResult {
    /**
     * <p>The name of the specified access point.</p>
     */
    Name?: string;
    /**
     * <p>The name of the bucket associated with the specified access point.</p>
     */
    Bucket?: string;
    /**
     * <p>Indicates whether this access point allows access from the public internet. If
     *             <code>VpcConfiguration</code> is specified for this access point, then
     *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
     *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
     *          the access point allows access from the public internet, subject to the access point and bucket access
     *          policies.</p>
     *          <p>This will always be true for an Amazon S3 on Outposts access point</p>
     */
    NetworkOrigin?: NetworkOrigin | string;
    /**
     * <p>Contains the virtual private cloud (VPC) configuration for the specified access point.</p>
     *          <note>
     *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other AWS services.</p>
     *          </note>
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account.
     *          You can enable the configuration options in any combination. For more information about
     *          when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>This is not supported for Amazon S3 on Outposts.</p>
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    /**
     * <p>The date and time when the specified access point was created.</p>
     */
    CreationDate?: Date;
}
export declare namespace GetAccessPointResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointResult) => any;
}
export interface GetAccessPointConfigurationForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point you want to return the configuration for.</p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointConfigurationForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointConfigurationForObjectLambdaRequest) => any;
}
export interface GetAccessPointConfigurationForObjectLambdaResult {
    /**
     * <p>Object Lambda Access Point configuration document.</p>
     */
    Configuration?: ObjectLambdaConfiguration;
}
export declare namespace GetAccessPointConfigurationForObjectLambdaResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointConfigurationForObjectLambdaResult) => any;
}
export interface GetAccessPointForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointForObjectLambdaRequest) => any;
}
export interface GetAccessPointForObjectLambdaResult {
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name?: string;
    /**
     * <p>Configuration to block all public access. This setting is turned on and can not be edited. </p>
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    /**
     * <p>The date and time when the specified Object Lambda Access Point was created.</p>
     */
    CreationDate?: Date;
}
export declare namespace GetAccessPointForObjectLambdaResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointForObjectLambdaResult) => any;
}
export interface GetAccessPointPolicyRequest {
    /**
     * <p>The account ID for the account that owns the specified access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point whose policy you want to retrieve.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyRequest) => any;
}
export interface GetAccessPointPolicyResult {
    /**
     * <p>The access point policy associated with the specified access point.</p>
     */
    Policy?: string;
}
export declare namespace GetAccessPointPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyResult) => any;
}
export interface GetAccessPointPolicyForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointPolicyForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyForObjectLambdaRequest) => any;
}
export interface GetAccessPointPolicyForObjectLambdaResult {
    /**
     * <p>Object Lambda Access Point resource policy document.</p>
     */
    Policy?: string;
}
export declare namespace GetAccessPointPolicyForObjectLambdaResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyForObjectLambdaResult) => any;
}
export interface GetAccessPointPolicyStatusRequest {
    /**
     * <p>The account ID for the account that owns the specified access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point whose policy status you want to retrieve.</p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointPolicyStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyStatusRequest) => any;
}
/**
 * <p>Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the
 * 	 <i>Amazon S3 User Guide</i>.
 *       </p>
 */
export interface PolicyStatus {
    /**
     * <p></p>
     */
    IsPublic?: boolean;
}
export declare namespace PolicyStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyStatus) => any;
}
export interface GetAccessPointPolicyStatusResult {
    /**
     * <p>Indicates the current policy status of the specified access point.</p>
     */
    PolicyStatus?: PolicyStatus;
}
export declare namespace GetAccessPointPolicyStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyStatusResult) => any;
}
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name: string | undefined;
}
export declare namespace GetAccessPointPolicyStatusForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyStatusForObjectLambdaRequest) => any;
}
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
    /**
     * <p>Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the
     * 	 <i>Amazon S3 User Guide</i>.
     *       </p>
     */
    PolicyStatus?: PolicyStatus;
}
export declare namespace GetAccessPointPolicyStatusForObjectLambdaResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAccessPointPolicyStatusForObjectLambdaResult) => any;
}
export interface GetBucketRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace GetBucketRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketRequest) => any;
}
export interface GetBucketResult {
    /**
     * <p>The Outposts bucket requested.</p>
     */
    Bucket?: string;
    /**
     * <p></p>
     */
    PublicAccessBlockEnabled?: boolean;
    /**
     * <p>The creation date of the Outposts bucket.</p>
     */
    CreationDate?: Date;
}
export declare namespace GetBucketResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketResult) => any;
}
export interface GetBucketLifecycleConfigurationRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace GetBucketLifecycleConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketLifecycleConfigurationRequest) => any;
}
/**
 * <p>The container of the Outposts bucket lifecycle expiration.</p>
 */
export interface LifecycleExpiration {
    /**
     * <p>Indicates at what date the object is to be deleted. Should be in GMT ISO 8601
     *          format.</p>
     */
    Date?: Date;
    /**
     * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.</p>
     */
    Days?: number;
    /**
     * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
     *          to true, the delete marker will be expired. If set to false, the policy takes no action.
     *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
     */
    ExpiredObjectDeleteMarker?: boolean;
}
export declare namespace LifecycleExpiration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecycleExpiration) => any;
}
/**
 * <p>The container for the Outposts bucket lifecycle rule and operator.</p>
 */
export interface LifecycleRuleAndOperator {
    /**
     * <p>Prefix identifying one or more objects to which the rule applies.</p>
     */
    Prefix?: string;
    /**
     * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
     */
    Tags?: S3Tag[];
}
export declare namespace LifecycleRuleAndOperator {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecycleRuleAndOperator) => any;
}
/**
 * <p>The container for the filter of the lifecycle rule.</p>
 */
export interface LifecycleRuleFilter {
    /**
     * <p>Prefix identifying one or more objects to which the rule applies.</p>
     *          <important>
     *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
     *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
     *             XML related object key constraints</a>.</p>
     *          </important>
     */
    Prefix?: string;
    /**
     * <p></p>
     */
    Tag?: S3Tag;
    /**
     * <p>The container for the <code>AND</code> condition for the lifecycle rule.</p>
     */
    And?: LifecycleRuleAndOperator;
}
export declare namespace LifecycleRuleFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecycleRuleFilter) => any;
}
/**
 * <p>The container of the noncurrent version expiration.</p>
 */
export interface NoncurrentVersionExpiration {
    /**
     * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
     *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
     *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon S3 User Guide</i>.</p>
     */
    NoncurrentDays?: number;
}
export declare namespace NoncurrentVersionExpiration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoncurrentVersionExpiration) => any;
}
export declare type TransitionStorageClass = "DEEP_ARCHIVE" | "GLACIER" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA";
/**
 * <p>The container for the noncurrent version transition.</p>
 */
export interface NoncurrentVersionTransition {
    /**
     * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
     *          For information about the noncurrent days calculations, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">
     *             How Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the <i>Amazon S3 User Guide</i>.</p>
     */
    NoncurrentDays?: number;
    /**
     * <p>The class of storage used to store the object.</p>
     */
    StorageClass?: TransitionStorageClass | string;
}
export declare namespace NoncurrentVersionTransition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoncurrentVersionTransition) => any;
}
export declare type ExpirationStatus = "Disabled" | "Enabled";
/**
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">
 *             Transitioning objects using Amazon S3 Lifecycle</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface Transition {
    /**
     * <p>Indicates when objects are transitioned to the specified storage class.
     *          The date value must be in ISO 8601 format. The time is always midnight UTC.</p>
     */
    Date?: Date;
    /**
     * <p>Indicates the number of days after creation when objects are transitioned to the specified storage class.
     *          The value must be a positive integer.</p>
     */
    Days?: number;
    /**
     * <p>The storage class to which you want the object to transition.</p>
     */
    StorageClass?: TransitionStorageClass | string;
}
export declare namespace Transition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Transition) => any;
}
/**
 * <p>The container for the Outposts bucket lifecycle rule.</p>
 */
export interface LifecycleRule {
    /**
     * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object
     *          has a delete marker.</p>
     */
    Expiration?: LifecycleExpiration;
    /**
     * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
     */
    ID?: string;
    /**
     * <p>The container for the filter of lifecycle rule.</p>
     */
    Filter?: LifecycleRuleFilter;
    /**
     * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.</p>
     */
    Status: ExpirationStatus | string | undefined;
    /**
     * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    Transitions?: Transition[];
    /**
     * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
     *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
     *          versioning is suspended), you can set this action to request that Amazon S3 transition
     *          noncurrent object versions to a specific storage class at a set period in the object's
     *          lifetime. </p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    NoncurrentVersionTransitions?: NoncurrentVersionTransition[];
    /**
     * <p>The noncurrent version expiration of the lifecycle rule.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    /**
     * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3
     *          waits before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
     *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     */
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}
export declare namespace LifecycleRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecycleRule) => any;
}
export interface GetBucketLifecycleConfigurationResult {
    /**
     * <p>Container for the lifecycle rule of the Outposts bucket.</p>
     */
    Rules?: LifecycleRule[];
}
export declare namespace GetBucketLifecycleConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketLifecycleConfigurationResult) => any;
}
export interface GetBucketPolicyRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace GetBucketPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketPolicyRequest) => any;
}
export interface GetBucketPolicyResult {
    /**
     * <p>The policy of the Outposts bucket.</p>
     */
    Policy?: string;
}
export declare namespace GetBucketPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketPolicyResult) => any;
}
export interface GetBucketTaggingRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
}
export declare namespace GetBucketTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketTaggingRequest) => any;
}
export interface GetBucketTaggingResult {
    /**
     * <p>The tags set of the Outposts bucket.</p>
     */
    TagSet: S3Tag[] | undefined;
}
export declare namespace GetBucketTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBucketTaggingResult) => any;
}
export interface GetJobTaggingRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID for the S3 Batch Operations job whose tags you want to retrieve.</p>
     */
    JobId: string | undefined;
}
export declare namespace GetJobTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobTaggingRequest) => any;
}
export interface GetJobTaggingResult {
    /**
     * <p>The set of tags associated with the S3 Batch Operations job.</p>
     */
    Tags?: S3Tag[];
}
export declare namespace GetJobTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobTaggingResult) => any;
}
export interface GetPublicAccessBlockOutput {
    /**
     * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this AWS
     *          account.</p>
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}
export declare namespace GetPublicAccessBlockOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPublicAccessBlockOutput) => any;
}
export interface GetPublicAccessBlockRequest {
    /**
     * <p>The account ID for the AWS account whose <code>PublicAccessBlock</code> configuration you want
     *          to retrieve.</p>
     */
    AccountId?: string;
}
export declare namespace GetPublicAccessBlockRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPublicAccessBlockRequest) => any;
}
/**
 * <p>Amazon S3 throws this exception if you make a <code>GetPublicAccessBlock</code> request
 *       against an account that doesn't have a <code>PublicAccessBlockConfiguration</code> set.</p>
 */
export interface NoSuchPublicAccessBlockConfiguration extends __SmithyException, $MetadataBearer {
    name: "NoSuchPublicAccessBlockConfiguration";
    $fault: "client";
    Message?: string;
}
export declare namespace NoSuchPublicAccessBlockConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoSuchPublicAccessBlockConfiguration) => any;
}
export interface GetStorageLensConfigurationRequest {
    /**
     * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
     */
    ConfigId: string | undefined;
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
}
export declare namespace GetStorageLensConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStorageLensConfigurationRequest) => any;
}
/**
 * <p>The AWS organization for your S3 Storage Lens.</p>
 */
export interface StorageLensAwsOrg {
    /**
     * <p>A container for the Amazon Resource Name (ARN) of the AWS organization.
     *          This property is read-only and follows the following format:
     *          <code> arn:aws:organizations:<i>us-east-1</i>:<i>example-account-id</i>:organization/<i>o-ex2l495dck</i>
     *             </code>
     *          </p>
     */
    Arn: string | undefined;
}
export declare namespace StorageLensAwsOrg {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageLensAwsOrg) => any;
}
/**
 * <p></p>
 */
export interface SSEKMS {
    /**
     * <p>A container for the ARN of the SSE-KMS encryption.
     *          This property is read-only and follows the following format:
     *          <code> arn:aws:kms:<i>us-east-1</i>:<i>example-account-id</i>:key/<i>example-9a73-4afc-8d29-8f5900cef44e</i>
     *             </code>
     *          </p>
     */
    KeyId: string | undefined;
}
export declare namespace SSEKMS {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SSEKMS) => any;
}
/**
 * <p></p>
 */
export interface SSES3 {
}
export declare namespace SSES3 {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SSES3) => any;
}
/**
 * <p>A container for the encryption of the S3 Storage Lens metrics exports.</p>
 */
export interface StorageLensDataExportEncryption {
    /**
     * <p></p>
     */
    SSES3?: SSES3;
    /**
     * <p></p>
     */
    SSEKMS?: SSEKMS;
}
export declare namespace StorageLensDataExportEncryption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageLensDataExportEncryption) => any;
}
export declare type Format = "CSV" | "Parquet";
export declare type OutputSchemaVersion = "V_1";
/**
 * <p>A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.</p>
 */
export interface S3BucketDestination {
    /**
     * <p></p>
     */
    Format: Format | string | undefined;
    /**
     * <p>The schema version of the export file.</p>
     */
    OutputSchemaVersion: OutputSchemaVersion | string | undefined;
    /**
     * <p>The account ID of the owner of the S3 Storage Lens metrics export bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the bucket.
     *          This property is read-only and follows the following format:
     *          <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:bucket/<i>your-destination-bucket-name</i>
     *             </code>
     *          </p>
     */
    Arn: string | undefined;
    /**
     * <p>The prefix of the destination bucket where the metrics export will be delivered.</p>
     */
    Prefix?: string;
    /**
     * <p>The container for the type encryption of the metrics exports in this bucket.</p>
     */
    Encryption?: StorageLensDataExportEncryption;
}
export declare namespace S3BucketDestination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3BucketDestination) => any;
}
/**
 * <p>A container to specify the properties of your S3 Storage Lens metrics export, including the
 *          destination, schema, and format.</p>
 */
export interface StorageLensDataExport {
    /**
     * <p>A container for the bucket where the S3 Storage Lens metrics export will be located.</p>
     *          <note>
     *             <p>This bucket must be located in the same Region as the storage lens configuration. </p>
     *          </note>
     */
    S3BucketDestination: S3BucketDestination | undefined;
}
export declare namespace StorageLensDataExport {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageLensDataExport) => any;
}
/**
 * <p>A container for what Amazon S3 Storage Lens will exclude.</p>
 */
export interface _Exclude {
    /**
     * <p>A container for the S3 Storage Lens bucket excludes.</p>
     */
    Buckets?: string[];
    /**
     * <p>A container for the S3 Storage Lens Region excludes.</p>
     */
    Regions?: string[];
}
export declare namespace _Exclude {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: _Exclude) => any;
}
/**
 * <p>A container for what Amazon S3 Storage Lens configuration includes.</p>
 */
export interface Include {
    /**
     * <p>A container for the S3 Storage Lens bucket includes.</p>
     */
    Buckets?: string[];
    /**
     * <p>A container for the S3 Storage Lens Region includes.</p>
     */
    Regions?: string[];
}
export declare namespace Include {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Include) => any;
}
/**
 * <p>A container for the Amazon S3 Storage Lens configuration.</p>
 */
export interface StorageLensConfiguration {
    /**
     * <p>A container for the Amazon S3 Storage Lens configuration ID.</p>
     */
    Id: string | undefined;
    /**
     * <p>A container for all the account-level configurations of your S3 Storage Lens
     *          configuration.</p>
     */
    AccountLevel: AccountLevel | undefined;
    /**
     * <p>A container for what is included in this configuration. This container can only be valid
     *          if there is no <code>Exclude</code> container submitted, and it's not empty. </p>
     */
    Include?: Include;
    /**
     * <p>A container for what is excluded in this configuration. This container can only be valid
     *          if there is no <code>Include</code> container submitted, and it's not empty. </p>
     */
    Exclude?: _Exclude;
    /**
     * <p>A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and
     *          format.</p>
     */
    DataExport?: StorageLensDataExport;
    /**
     * <p>A container for whether the S3 Storage Lens configuration is enabled.</p>
     */
    IsEnabled: boolean | undefined;
    /**
     * <p>A container for the AWS organization for this S3 Storage Lens configuration.</p>
     */
    AwsOrg?: StorageLensAwsOrg;
    /**
     * <p>The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is
     *          read-only and follows the following format:
     *          <code> arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i>
     *             </code>
     *          </p>
     */
    StorageLensArn?: string;
}
export declare namespace StorageLensConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageLensConfiguration) => any;
}
export interface GetStorageLensConfigurationResult {
    /**
     * <p>The S3 Storage Lens configuration requested.</p>
     */
    StorageLensConfiguration?: StorageLensConfiguration;
}
export declare namespace GetStorageLensConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStorageLensConfigurationResult) => any;
}
export interface GetStorageLensConfigurationTaggingRequest {
    /**
     * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
     */
    ConfigId: string | undefined;
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
}
export declare namespace GetStorageLensConfigurationTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStorageLensConfigurationTaggingRequest) => any;
}
/**
 * <p></p>
 */
export interface StorageLensTag {
    /**
     * <p></p>
     */
    Key: string | undefined;
    /**
     * <p></p>
     */
    Value: string | undefined;
}
export declare namespace StorageLensTag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageLensTag) => any;
}
export interface GetStorageLensConfigurationTaggingResult {
    /**
     * <p>The tags of S3 Storage Lens configuration requested.</p>
     */
    Tags?: StorageLensTag[];
}
export declare namespace GetStorageLensConfigurationTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStorageLensConfigurationTaggingResult) => any;
}
export interface ListAccessPointsRequest {
    /**
     * <p>The AWS account ID for owner of the bucket whose access points you want to list.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the bucket whose associated access points you want to list.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket?: string;
    /**
     * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of access points that you want to include in the list. If the specified
     *          bucket has more than this number of access points, then the response will include a
     *          continuation token in the <code>NextToken</code> field that you can use to retrieve the
     *          next page of access points.</p>
     */
    MaxResults?: number;
}
export declare namespace ListAccessPointsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccessPointsRequest) => any;
}
export interface ListAccessPointsResult {
    /**
     * <p>Contains identification and configuration information for one or more access points
     *          associated with the specified bucket.</p>
     */
    AccessPointList?: AccessPoint[];
    /**
     * <p>If the specified bucket has more access points than can be returned in one call to this
     *          API, this field contains a continuation token that you can provide in subsequent calls to
     *          this API to retrieve additional access points.</p>
     */
    NextToken?: string;
}
export declare namespace ListAccessPointsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccessPointsResult) => any;
}
export interface ListAccessPointsForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>If the list has more access points than can be returned in one call to this
     *          API, this field contains a continuation token that you can provide in subsequent calls to
     *          this API to retrieve additional access points.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of access points that you want to include in the list. If there are more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.</p>
     */
    MaxResults?: number;
}
export declare namespace ListAccessPointsForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccessPointsForObjectLambdaRequest) => any;
}
/**
 * <p>An access point with an attached AWS Lambda function used to access transformed data from an Amazon S3 bucket.</p>
 */
export interface ObjectLambdaAccessPoint {
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name: string | undefined;
    /**
     * <p>Specifies the ARN for the Object Lambda Access Point.</p>
     */
    ObjectLambdaAccessPointArn?: string;
}
export declare namespace ObjectLambdaAccessPoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ObjectLambdaAccessPoint) => any;
}
export interface ListAccessPointsForObjectLambdaResult {
    /**
     * <p>Returns list of Object Lambda Access Points.</p>
     */
    ObjectLambdaAccessPointList?: ObjectLambdaAccessPoint[];
    /**
     * <p>If the list has more access points than can be returned in one call to this
     *          API, this field contains a continuation token that you can provide in subsequent calls to
     *          this API to retrieve additional access points.</p>
     */
    NextToken?: string;
}
export declare namespace ListAccessPointsForObjectLambdaResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAccessPointsForObjectLambdaResult) => any;
}
/**
 * <p></p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidNextTokenException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidNextTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidNextTokenException) => any;
}
/**
 * <p></p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
export interface ListJobsRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.</p>
     */
    JobStatuses?: (JobStatus | string)[];
    /**
     * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.</p>
     */
    MaxResults?: number;
}
export declare namespace ListJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsRequest) => any;
}
export declare enum OperationName {
    LambdaInvoke = "LambdaInvoke",
    S3DeleteObjectTagging = "S3DeleteObjectTagging",
    S3InitiateRestoreObject = "S3InitiateRestoreObject",
    S3PutObjectAcl = "S3PutObjectAcl",
    S3PutObjectCopy = "S3PutObjectCopy",
    S3PutObjectLegalHold = "S3PutObjectLegalHold",
    S3PutObjectRetention = "S3PutObjectRetention",
    S3PutObjectTagging = "S3PutObjectTagging"
}
/**
 * <p>Contains the configuration and status information for a single job retrieved as part of a job list.</p>
 */
export interface JobListDescriptor {
    /**
     * <p>The ID for the specified job.</p>
     */
    JobId?: string;
    /**
     * <p>The user-specified description that was included in the specified job's <code>Create Job</code> request.</p>
     */
    Description?: string;
    /**
     * <p>The operation that the specified job is configured to run on every object listed in the manifest.</p>
     */
    Operation?: OperationName | string;
    /**
     * <p>The current priority for the specified job.</p>
     */
    Priority?: number;
    /**
     * <p>The specified job's current status.</p>
     */
    Status?: JobStatus | string;
    /**
     * <p>A timestamp indicating when the specified job was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
     */
    TerminationDate?: Date;
    /**
     * <p>Describes the total number of tasks that the specified job has run, the number of tasks
     *          that succeeded, and the number of tasks that failed.</p>
     */
    ProgressSummary?: JobProgressSummary;
}
export declare namespace JobListDescriptor {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobListDescriptor) => any;
}
export interface ListJobsResult {
    /**
     * <p>If the <code>List Jobs</code> request produced more than the maximum number of results, you can pass this value into a subsequent <code>List Jobs</code> request in order to retrieve
     *             the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
     */
    Jobs?: JobListDescriptor[];
}
export declare namespace ListJobsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsResult) => any;
}
export interface ListRegionalBucketsRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p></p>
     */
    NextToken?: string;
    /**
     * <p></p>
     */
    MaxResults?: number;
    /**
     * <p>The ID of the AWS Outposts.</p>
     *          <note>
     *             <p>This is required by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    OutpostId?: string;
}
export declare namespace ListRegionalBucketsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRegionalBucketsRequest) => any;
}
/**
 * <p>The container for the regional bucket.</p>
 */
export interface RegionalBucket {
    /**
     * <p></p>
     */
    Bucket: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the regional bucket.</p>
     */
    BucketArn?: string;
    /**
     * <p></p>
     */
    PublicAccessBlockEnabled: boolean | undefined;
    /**
     * <p>The creation date of the regional bucket</p>
     */
    CreationDate: Date | undefined;
    /**
     * <p>The AWS Outposts ID of the regional bucket.</p>
     */
    OutpostId?: string;
}
export declare namespace RegionalBucket {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegionalBucket) => any;
}
export interface ListRegionalBucketsResult {
    /**
     * <p></p>
     */
    RegionalBucketList?: RegionalBucket[];
    /**
     * <p>
     *             <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means
     *       there are more buckets that can be listed. The next list requests to Amazon S3
     *       can be continued with this <code>NextToken</code>.
     *       <code>NextToken</code> is obfuscated and is not a real key.</p>
     */
    NextToken?: string;
}
export declare namespace ListRegionalBucketsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRegionalBucketsResult) => any;
}
export interface ListStorageLensConfigurationsRequest {
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
    /**
     * <p>A pagination token to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListStorageLensConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStorageLensConfigurationsRequest) => any;
}
/**
 * <p>Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the
 *          description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its
 *          Amazon Resource Name (ARN), and config ID.</p>
 */
export interface ListStorageLensConfigurationEntry {
    /**
     * <p>A container for the S3 Storage Lens configuration ID.</p>
     */
    Id: string | undefined;
    /**
     * <p>The ARN of the S3 Storage Lens configuration. This property is read-only.</p>
     */
    StorageLensArn: string | undefined;
    /**
     * <p>A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in
     *          your designated S3 Storage Lens home Region.</p>
     */
    HomeRegion: string | undefined;
    /**
     * <p>A container for whether the S3 Storage Lens configuration is enabled. This property is required.</p>
     */
    IsEnabled?: boolean;
}
export declare namespace ListStorageLensConfigurationEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStorageLensConfigurationEntry) => any;
}
export interface ListStorageLensConfigurationsResult {
    /**
     * <p>If the request produced more than the maximum number of S3 Storage Lens configuration results,
     *          you can pass this value into a subsequent request to retrieve the next page of
     *          results.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of S3 Storage Lens configurations.</p>
     */
    StorageLensConfigurationList?: ListStorageLensConfigurationEntry[];
}
export declare namespace ListStorageLensConfigurationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStorageLensConfigurationsResult) => any;
}
export interface PutAccessPointConfigurationForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name: string | undefined;
    /**
     * <p>Object Lambda Access Point configuration document.</p>
     */
    Configuration: ObjectLambdaConfiguration | undefined;
}
export declare namespace PutAccessPointConfigurationForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAccessPointConfigurationForObjectLambdaRequest) => any;
}
export interface PutAccessPointPolicyRequest {
    /**
     * <p>The AWS account ID for owner of the bucket associated with the specified access point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the access point that you want to associate with the specified policy.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
     */
    Name: string | undefined;
    /**
     * <p>The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.</p>
     */
    Policy: string | undefined;
}
export declare namespace PutAccessPointPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAccessPointPolicyRequest) => any;
}
export interface PutAccessPointPolicyForObjectLambdaRequest {
    /**
     * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the Object Lambda Access Point.</p>
     */
    Name: string | undefined;
    /**
     * <p>Object Lambda Access Point resource policy document.</p>
     */
    Policy: string | undefined;
}
export declare namespace PutAccessPointPolicyForObjectLambdaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAccessPointPolicyForObjectLambdaRequest) => any;
}
/**
 * <p>The container for the Outposts bucket lifecycle configuration.</p>
 */
export interface LifecycleConfiguration {
    /**
     * <p>A lifecycle rule for individual objects in an Outposts bucket. </p>
     */
    Rules?: LifecycleRule[];
}
export declare namespace LifecycleConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecycleConfiguration) => any;
}
export interface PutBucketLifecycleConfigurationRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the bucket for which to set the configuration.</p>
     */
    Bucket: string | undefined;
    /**
     * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
     */
    LifecycleConfiguration?: LifecycleConfiguration;
}
export declare namespace PutBucketLifecycleConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutBucketLifecycleConfigurationRequest) => any;
}
export interface PutBucketPolicyRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>Specifies the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
    /**
     * <p>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.</p>
     *          <note>
     *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
     *          </note>
     */
    ConfirmRemoveSelfBucketAccess?: boolean;
    /**
     * <p>The bucket policy as a JSON document.</p>
     */
    Policy: string | undefined;
}
export declare namespace PutBucketPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutBucketPolicyRequest) => any;
}
/**
 * <p></p>
 */
export interface Tagging {
    /**
     * <p>A collection for a set of tags.</p>
     */
    TagSet: S3Tag[] | undefined;
}
export declare namespace Tagging {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tagging) => any;
}
export interface PutBucketTaggingRequest {
    /**
     * <p>The AWS account ID of the Outposts bucket.</p>
     */
    AccountId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the bucket.</p>
     *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
     *          <p>For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
     */
    Bucket: string | undefined;
    /**
     * <p></p>
     */
    Tagging: Tagging | undefined;
}
export declare namespace PutBucketTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutBucketTaggingRequest) => any;
}
export interface PutJobTaggingRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID for the S3 Batch Operations job whose tags you want to replace.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The set of tags to associate with the S3 Batch Operations job.</p>
     */
    Tags: S3Tag[] | undefined;
}
export declare namespace PutJobTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutJobTaggingRequest) => any;
}
export interface PutJobTaggingResult {
}
export declare namespace PutJobTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutJobTaggingResult) => any;
}
/**
 * <p>Amazon S3 throws this exception if you have too many tags in your tag set.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
    name: "TooManyTagsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyTagsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyTagsException) => any;
}
export interface PutPublicAccessBlockRequest {
    /**
     * <p>The account ID for the AWS account whose <code>PublicAccessBlock</code> configuration you want
     *          to set.</p>
     */
    AccountId?: string;
    /**
     * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to the specified AWS
     *          account.</p>
     */
    PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;
}
export declare namespace PutPublicAccessBlockRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutPublicAccessBlockRequest) => any;
}
export interface PutStorageLensConfigurationRequest {
    /**
     * <p>The ID of the S3 Storage Lens configuration.</p>
     */
    ConfigId: string | undefined;
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
    /**
     * <p>The S3 Storage Lens configuration.</p>
     */
    StorageLensConfiguration: StorageLensConfiguration | undefined;
    /**
     * <p>The tag set of the S3 Storage Lens configuration.</p>
     *          <note>
     *             <p>You can set up to a maximum of 50 tags.</p>
     *          </note>
     */
    Tags?: StorageLensTag[];
}
export declare namespace PutStorageLensConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutStorageLensConfigurationRequest) => any;
}
export interface PutStorageLensConfigurationTaggingRequest {
    /**
     * <p>The ID of the S3 Storage Lens configuration.</p>
     */
    ConfigId: string | undefined;
    /**
     * <p>The account ID of the requester.</p>
     */
    AccountId?: string;
    /**
     * <p>The tag set of the S3 Storage Lens configuration.</p>
     *          <note>
     *             <p>You can set up to a maximum of 50 tags.</p>
     *          </note>
     */
    Tags: StorageLensTag[] | undefined;
}
export declare namespace PutStorageLensConfigurationTaggingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutStorageLensConfigurationTaggingRequest) => any;
}
export interface PutStorageLensConfigurationTaggingResult {
}
export declare namespace PutStorageLensConfigurationTaggingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutStorageLensConfigurationTaggingResult) => any;
}
export interface UpdateJobPriorityRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID for the job whose priority you want to update.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The priority you want to assign to this job.</p>
     */
    Priority: number | undefined;
}
export declare namespace UpdateJobPriorityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobPriorityRequest) => any;
}
export interface UpdateJobPriorityResult {
    /**
     * <p>The ID for the job whose priority Amazon S3 updated.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The new priority assigned to the specified job.</p>
     */
    Priority: number | undefined;
}
export declare namespace UpdateJobPriorityResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobPriorityResult) => any;
}
/**
 * <p></p>
 */
export interface JobStatusException extends __SmithyException, $MetadataBearer {
    name: "JobStatusException";
    $fault: "client";
    Message?: string;
}
export declare namespace JobStatusException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobStatusException) => any;
}
export declare enum RequestedJobStatus {
    Cancelled = "Cancelled",
    Ready = "Ready"
}
export interface UpdateJobStatusRequest {
    /**
     * <p>The AWS account ID associated with the S3 Batch Operations job.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID of the job whose status you want to update.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The status that you want to move the specified job to.</p>
     */
    RequestedJobStatus: RequestedJobStatus | string | undefined;
    /**
     * <p>A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.</p>
     */
    StatusUpdateReason?: string;
}
export declare namespace UpdateJobStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobStatusRequest) => any;
}
export interface UpdateJobStatusResult {
    /**
     * <p>The ID for the job whose status was updated.</p>
     */
    JobId?: string;
    /**
     * <p>The current status for the specified job.</p>
     */
    Status?: JobStatus | string;
    /**
     * <p>The reason that the specified job's status was updated.</p>
     */
    StatusUpdateReason?: string;
}
export declare namespace UpdateJobStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobStatusResult) => any;
}
