import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The address that you want the Snow device(s) associated with a specific job to
 *       be shipped to. Addresses are validated at the time of creation. The address you provide must
 *       be located within the serviceable area of your region. Although no individual elements of the
 *         <code>Address</code> are required, if the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 */
export interface Address {
    /**
     * <p>The unique ID for an address.</p>
     */
    AddressId?: string;
    /**
     * <p>The name of a person to receive a Snow device at an address.</p>
     */
    Name?: string;
    /**
     * <p>The name of the company to receive a Snow device at an address.</p>
     */
    Company?: string;
    /**
     * <p>The first line in a street address that a Snow device is to be delivered
     *       to.</p>
     */
    Street1?: string;
    /**
     * <p>The second line in a street address that a Snow device is to be delivered
     *       to.</p>
     */
    Street2?: string;
    /**
     * <p>The third line in a street address that a Snow device is to be delivered
     *       to.</p>
     */
    Street3?: string;
    /**
     * <p>The city in an address that a Snow device is to be delivered to.</p>
     */
    City?: string;
    /**
     * <p>The state or province in an address that a Snow device is to be delivered to.</p>
     */
    StateOrProvince?: string;
    /**
     * <p>This field is no longer used and the value is ignored.</p>
     */
    PrefectureOrDistrict?: string;
    /**
     * <p>This field is no longer used and the value is ignored.</p>
     */
    Landmark?: string;
    /**
     * <p>The country in an address that a Snow device is to be delivered to.</p>
     */
    Country?: string;
    /**
     * <p>The postal code in an address that a Snow device is to be delivered to.</p>
     */
    PostalCode?: string;
    /**
     * <p>The phone number associated with an address that a Snow device is to be delivered
     *       to.</p>
     */
    PhoneNumber?: string;
    /**
     * <p>If the address you are creating is a primary address, then set this option to
     *       true. This field is not supported in most regions.</p>
     */
    IsRestricted?: boolean;
}
export declare namespace Address {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Address) => any;
}
export interface CancelClusterRequest {
    /**
     * <p>The 39-character ID for the cluster that you want to cancel, for example
     *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    ClusterId: string | undefined;
}
export declare namespace CancelClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelClusterRequest) => any;
}
export interface CancelClusterResult {
}
export declare namespace CancelClusterResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelClusterResult) => any;
}
/**
 * <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 */
export interface InvalidJobStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidJobStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidJobStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidJobStateException) => any;
}
/**
 * <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 */
export interface InvalidResourceException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The provided resource value is invalid.</p>
     */
    ResourceType?: string;
}
export declare namespace InvalidResourceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceException) => any;
}
/**
 * <p>The provided AWS Key Management Service key lacks the permissions to perform the
 *       specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 */
export interface KMSRequestFailedException extends __SmithyException, $MetadataBearer {
    name: "KMSRequestFailedException";
    $fault: "client";
    Message?: string;
}
export declare namespace KMSRequestFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSRequestFailedException) => any;
}
export interface CancelJobRequest {
    /**
     * <p>The 39-character job ID for the job that you want to cancel, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
}
export declare namespace CancelJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelJobRequest) => any;
}
export interface CancelJobResult {
}
export declare namespace CancelJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelJobResult) => any;
}
export interface CreateAddressRequest {
    /**
     * <p>The address that you want the Snow device shipped to.</p>
     */
    Address: Address | undefined;
}
export declare namespace CreateAddressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAddressRequest) => any;
}
export interface CreateAddressResult {
    /**
     * <p>The automatically generated ID for a specific address. You'll use this ID when you
     *       create a job to specify which address you want the Snow device for that job shipped to.</p>
     */
    AddressId?: string;
}
export declare namespace CreateAddressResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAddressResult) => any;
}
/**
 * <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 */
export interface InvalidAddressException extends __SmithyException, $MetadataBearer {
    name: "InvalidAddressException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidAddressException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidAddressException) => any;
}
/**
 * <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact AWS Support.</p>
 */
export interface UnsupportedAddressException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedAddressException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnsupportedAddressException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedAddressException) => any;
}
export declare enum JobType {
    EXPORT = "EXPORT",
    IMPORT = "IMPORT",
    LOCAL_USE = "LOCAL_USE"
}
export declare enum JobState {
    CANCELLED = "Cancelled",
    COMPLETE = "Complete",
    IN_PROGRESS = "InProgress",
    IN_TRANSIT_TO_AWS = "InTransitToAWS",
    IN_TRANSIT_TO_CUSTOMER = "InTransitToCustomer",
    LISTING = "Listing",
    NEW = "New",
    PENDING = "Pending",
    PREPARING_APPLIANCE = "PreparingAppliance",
    PREPARING_SHIPMENT = "PreparingShipment",
    WITH_AWS = "WithAWS",
    WITH_AWS_SORTING_FACILITY = "WithAWSSortingFacility",
    WITH_CUSTOMER = "WithCustomer"
}
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
 *       with a specific job. The <code>Notification</code> object is returned as a part of the
 *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
 *       type.</p>
 *
 *          <p>When the notification settings are defined during job creation, you can choose to
 *       notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of
 *       strings, or you can specify that you want to have Amazon SNS notifications sent out for all
 *       job states with <code>NotifyAll</code> set to true.</p>
 */
export interface Notification {
    /**
     * <p>The new SNS <code>TopicArn</code> that you want to associate with this job. You can
     *       create Amazon Resource Names (ARNs) for topics by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html">CreateTopic</a> Amazon SNS API
     *       action.</p>
     *
     *          <p>You can subscribe email addresses to an Amazon SNS topic through the AWS Management
     *       Console, or by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html">Subscribe</a> AWS Simple Notification Service (SNS) API action.</p>
     */
    SnsTopicARN?: string;
    /**
     * <p>The list of job states that will trigger a notification for this job.</p>
     */
    JobStatesToNotify?: (JobState | string)[];
    /**
     * <p>Any change in job state will trigger a notification for this job.</p>
     */
    NotifyAll?: boolean;
}
export declare namespace Notification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Notification) => any;
}
/**
 * <p>A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI),
 *       including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to
 *       simplify identifying the AMI in both the AWS Cloud and on the device.</p>
 */
export interface Ec2AmiResource {
    /**
     * <p>The ID of the AMI in Amazon EC2.</p>
     */
    AmiId: string | undefined;
    /**
     * <p>The ID of the AMI on the Snow device.</p>
     */
    SnowballAmiId?: string;
}
export declare namespace Ec2AmiResource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Ec2AmiResource) => any;
}
/**
 * <p>The container for the <a>EventTriggerDefinition$EventResourceARN</a>.</p>
 */
export interface EventTriggerDefinition {
    /**
     * <p>The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an AWS Lambda
     *       function's event trigger associated with this job.</p>
     */
    EventResourceARN?: string;
}
export declare namespace EventTriggerDefinition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventTriggerDefinition) => any;
}
/**
 * <p>Identifies </p>
 */
export interface LambdaResource {
    /**
     * <p>An Amazon Resource Name (ARN) that represents an AWS Lambda function to be triggered by
     *       PUT object actions on the associated local Amazon S3 resource.</p>
     */
    LambdaArn?: string;
    /**
     * <p>The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.</p>
     */
    EventTriggers?: EventTriggerDefinition[];
}
export declare namespace LambdaResource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LambdaResource) => any;
}
/**
 * <p>Contains a key range. For export jobs, a <code>S3Resource</code> object can have an
 *       optional <code>KeyRange</code> value. The length of the range is defined at job creation, and
 *       has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 */
export interface KeyRange {
    /**
     * <p>The key that starts an optional key range for an export job. Ranges are inclusive and
     *       UTF-8 binary sorted.</p>
     */
    BeginMarker?: string;
    /**
     * <p>The key that ends an optional key range for an export job. Ranges are inclusive and
     *       UTF-8 binary sorted.</p>
     */
    EndMarker?: string;
}
export declare namespace KeyRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KeyRange) => any;
}
/**
 * <p>Each <code>S3Resource</code> object represents an Amazon S3 bucket that your
 *       transferred data will be exported from or imported into. For export jobs, this object can have
 *       an optional <code>KeyRange</code> value. The length of the range is defined at job creation,
 *       and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 */
export interface S3Resource {
    /**
     * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket.</p>
     */
    BucketArn?: string;
    /**
     * <p>For export jobs, you can provide an optional <code>KeyRange</code> within a specific
     *       Amazon S3 bucket. The length of the range is defined at job creation, and has either an
     *       inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are
     *       UTF-8 binary sorted.</p>
     */
    KeyRange?: KeyRange;
}
export declare namespace S3Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Resource) => any;
}
/**
 * <p>Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket,
 *       an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is
 *       associated with a particular job.</p>
 */
export interface JobResource {
    /**
     * <p>An array of <code>S3Resource</code> objects.</p>
     */
    S3Resources?: S3Resource[];
    /**
     * <p>The Python-language Lambda functions for this job.</p>
     */
    LambdaResources?: LambdaResource[];
    /**
     * <p>The Amazon Machine Images (AMIs) associated with this job.</p>
     */
    Ec2AmiResources?: Ec2AmiResource[];
}
export declare namespace JobResource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobResource) => any;
}
export declare enum ShippingOption {
    EXPRESS = "EXPRESS",
    NEXT_DAY = "NEXT_DAY",
    SECOND_DAY = "SECOND_DAY",
    STANDARD = "STANDARD"
}
export declare enum SnowballType {
    EDGE = "EDGE",
    EDGE_C = "EDGE_C",
    EDGE_CG = "EDGE_CG",
    EDGE_S = "EDGE_S",
    SNC1_HDD = "SNC1_HDD",
    SNC1_SSD = "SNC1_SSD",
    STANDARD = "STANDARD"
}
/**
 * <p>The tax documents required in AWS Regions in India.</p>
 */
export interface INDTaxDocuments {
    /**
     * <p>The Goods and Services Tax (GST) documents required in AWS Regions in India.</p>
     */
    GSTIN?: string;
}
export declare namespace INDTaxDocuments {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: INDTaxDocuments) => any;
}
/**
 * <p>The tax documents required in your AWS Region.</p>
 */
export interface TaxDocuments {
    /**
     * <p>The tax documents required in AWS Regions in India.</p>
     */
    IND?: INDTaxDocuments;
}
export declare namespace TaxDocuments {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TaxDocuments) => any;
}
export interface CreateClusterRequest {
    /**
     * <p>The type of job for this cluster. Currently, the only job type supported for clusters
     *       is <code>LOCAL_USE</code>.</p>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    JobType: JobType | string | undefined;
    /**
     * <p>The resources associated with the cluster job. These resources include Amazon S3
     *       buckets and optional AWS Lambda functions written in the Python language. </p>
     */
    Resources: JobResource | undefined;
    /**
     * <p>An optional description of this specific cluster, for example <code>Environmental Data
     *         Cluster-01</code>.</p>
     */
    Description?: string;
    /**
     * <p>The ID for the address that you want the cluster shipped to.</p>
     */
    AddressId: string | undefined;
    /**
     * <p>The <code>KmsKeyARN</code> value that you want to associate with this cluster.
     *         <code>KmsKeyARN</code> values are created by using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS Key
     *       Management Service (AWS KMS). </p>
     */
    KmsKeyARN?: string;
    /**
     * <p>The <code>RoleARN</code> that you want to associate with this cluster.
     *         <code>RoleArn</code> values are created by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS
     *       Identity and Access Management (IAM).</p>
     */
    RoleARN: string | undefined;
    /**
     * <p>The type of AWS Snow Family device to use for this cluster.
     *     </p>
     *          <note>
     *             <p>For cluster jobs, AWS Snow Family currently supports only the <code>EDGE</code> device type.</p>
     *          </note>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    SnowballType: SnowballType | string | undefined;
    /**
     * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon
     *       you'll get each Snowball Edge device, rather it represents how quickly each device moves to
     *       its destination while in transit. Regional shipping speeds are as follows:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>In Australia, you have access to express shipping. Typically, Snow devices shipped
     *           express are delivered in about a day.</p>
     *             </li>
     *             <li>
     *                <p>In the European Union (EU), you have access to express shipping. Typically,
     *           Snow devices shipped express are delivered in about a day. In addition, most countries in the
     *           EU have access to standard shipping, which typically takes less than a week, one
     *           way.</p>
     *             </li>
     *             <li>
     *                <p>In India, Snow device are delivered in one to seven days.</p>
     *             </li>
     *             <li>
     *                <p>In the United States of America (US), you have access to one-day shipping and
     *           two-day shipping.</p>
     *             </li>
     *          </ul>
     *
     *          <ul>
     *             <li>
     *                <p>In Australia, you have access to express shipping. Typically, devices shipped
     *           express are delivered in about a day.</p>
     *             </li>
     *             <li>
     *                <p>In the European Union (EU), you have access to express shipping. Typically,
     *           Snow devices shipped express are delivered in about a day. In addition, most countries
     *           in the EU have access to standard shipping, which typically takes less than a week, one
     *           way.</p>
     *             </li>
     *             <li>
     *                <p>In India, Snow device are delivered in one to seven days.</p>
     *             </li>
     *             <li>
     *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
     *             </li>
     *          </ul>
     */
    ShippingOption: ShippingOption | string | undefined;
    /**
     * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
     *       cluster.</p>
     */
    Notification?: Notification;
    /**
     * <p>The forwarding address ID for a cluster. This field is not supported in most
     *       regions.</p>
     */
    ForwardingAddressId?: string;
    /**
     * <p>The tax documents required in your AWS Region.</p>
     */
    TaxDocuments?: TaxDocuments;
}
export declare namespace CreateClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateClusterRequest) => any;
}
export interface CreateClusterResult {
    /**
     * <p>The automatically generated ID for a cluster.</p>
     */
    ClusterId?: string;
}
export declare namespace CreateClusterResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateClusterResult) => any;
}
/**
 * <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 */
export interface Ec2RequestFailedException extends __SmithyException, $MetadataBearer {
    name: "Ec2RequestFailedException";
    $fault: "client";
    Message?: string;
}
export declare namespace Ec2RequestFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Ec2RequestFailedException) => any;
}
/**
 * <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the
 *       <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 */
export interface InvalidInputCombinationException extends __SmithyException, $MetadataBearer {
    name: "InvalidInputCombinationException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidInputCombinationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidInputCombinationException) => any;
}
/**
 * <p>Job creation failed. Currently, clusters support five nodes. If you have less than five
 *       nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five notes.</p>
 */
export interface ClusterLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ClusterLimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ClusterLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClusterLimitExceededException) => any;
}
/**
 * <p>Configures the wireless connection on an AWS Snowcone device.</p>
 */
export interface WirelessConnection {
    /**
     * <p>Enables the Wi-Fi adapter on an AWS Snowcone device.</p>
     */
    IsWifiEnabled?: boolean;
}
export declare namespace WirelessConnection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WirelessConnection) => any;
}
/**
 * <p>Specifies the device configuration for an AWS Snowcone job. </p>
 */
export interface SnowconeDeviceConfiguration {
    /**
     * <p>Configures the wireless connection for the AWS Snowcone device.</p>
     */
    WirelessConnection?: WirelessConnection;
}
export declare namespace SnowconeDeviceConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnowconeDeviceConfiguration) => any;
}
/**
 * <p>The container for <code>SnowconeDeviceConfiguration</code>. </p>
 */
export interface DeviceConfiguration {
    /**
     * <p>Returns information about the device configuration for an AWS Snowcone job.</p>
     */
    SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration;
}
export declare namespace DeviceConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceConfiguration) => any;
}
export declare enum SnowballCapacity {
    NO_PREFERENCE = "NoPreference",
    T100 = "T100",
    T14 = "T14",
    T42 = "T42",
    T50 = "T50",
    T8 = "T8",
    T80 = "T80",
    T98 = "T98"
}
export interface CreateJobRequest {
    /**
     * <p>Defines the type of job that you're creating.
     *       </p>
     */
    JobType?: JobType | string;
    /**
     * <p>Defines the Amazon S3 buckets associated with this job.</p>
     *
     *          <p>With <code>IMPORT</code> jobs, you specify the bucket or buckets that your transferred
     *       data will be imported into.</p>
     *
     *          <p>With <code>EXPORT</code> jobs, you specify the bucket or buckets that your transferred
     *       data will be exported from. Optionally, you can also specify a <code>KeyRange</code> value. If
     *       you choose to export a range, you define the length of the range by providing either an
     *       inclusive <code>BeginMarker</code> value, an inclusive <code>EndMarker</code> value, or both.
     *       Ranges are UTF-8 binary sorted.</p>
     */
    Resources?: JobResource;
    /**
     * <p>Defines an optional description of this specific job, for example <code>Important
     *         Photos 2016-08-11</code>.</p>
     */
    Description?: string;
    /**
     * <p>The ID for the address that you want the Snow device shipped to.</p>
     */
    AddressId?: string;
    /**
     * <p>The <code>KmsKeyARN</code> that you want to associate with this job.
     *         <code>KmsKeyARN</code>s are created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> AWS Key Management
     *       Service (KMS) API action.</p>
     */
    KmsKeyARN?: string;
    /**
     * <p>The <code>RoleARN</code> that you want to associate with this job.
     *       <code>RoleArn</code>s are created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> AWS Identity and
     *       Access Management (IAM) API action.</p>
     */
    RoleARN?: string;
    /**
     * <p>If your job is being created in one of the US regions, you have the option of
     *       specifying what size Snow device you'd like for this job. In all other regions, Snowballs come
     *       with 80 TB in storage capacity.</p>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    SnowballCapacityPreference?: SnowballCapacity | string;
    /**
     * <p>The shipping speed for this job. This speed doesn't dictate how soon you'll get the
     *       Snow device, rather it represents how quickly the Snow device moves to its destination while in
     *       transit. Regional shipping speeds are as follows:</p>
     *
     *          <ul>
     *             <li>
     *                <p>In Australia, you have access to express shipping. Typically, Snow devices shipped
     *           express are delivered in about a day.</p>
     *             </li>
     *             <li>
     *                <p>In the European Union (EU), you have access to express shipping. Typically,
     *           Snow devices shipped express are delivered in about a day. In addition, most countries in the
     *           EU have access to standard shipping, which typically takes less than a week, one
     *           way.</p>
     *             </li>
     *             <li>
     *                <p>In India, Snow devices are delivered in one to seven days.</p>
     *             </li>
     *             <li>
     *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
     *             </li>
     *          </ul>
     */
    ShippingOption?: ShippingOption | string;
    /**
     * <p>Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for
     *       this job.</p>
     */
    Notification?: Notification;
    /**
     * <p>The ID of a cluster. If you're creating a job for a node in a cluster, you need to
     *       provide only this <code>clusterId</code> value. The other job attributes are inherited from
     *       the cluster.</p>
     */
    ClusterId?: string;
    /**
     * <p>The type of AWS Snow Family device to use for this job.
     *       </p>
     *          <note>
     *             <p>For cluster jobs, AWS Snow Family currently supports only the <code>EDGE</code> device type.</p>
     *          </note>
     *          <p>The type of AWS Snow device to use for this job. Currently, the only supported
     *       device type for cluster jobs is <code>EDGE</code>.</p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html">Snowball Edge Device
     *       Options</a> in the Snowball Edge Developer Guide.</p>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    SnowballType?: SnowballType | string;
    /**
     * <p>The forwarding address ID for a job. This field is not supported in most
     *       regions.</p>
     */
    ForwardingAddressId?: string;
    /**
     * <p>The tax documents required in your AWS Region.</p>
     */
    TaxDocuments?: TaxDocuments;
    /**
     * <p>Defines the device configuration for an AWS Snowcone job.</p>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    DeviceConfiguration?: DeviceConfiguration;
    /**
     * <p>The ID of the long term pricing type for the device.</p>
     */
    LongTermPricingId?: string;
}
export declare namespace CreateJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateJobRequest) => any;
}
export interface CreateJobResult {
    /**
     * <p>The automatically generated ID for a job, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId?: string;
}
export declare namespace CreateJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateJobResult) => any;
}
export declare enum LongTermPricingType {
    ONE_YEAR = "OneYear",
    THREE_YEAR = "ThreeYear"
}
export interface CreateLongTermPricingRequest {
    /**
     * <p>The type of long term pricing option you want for the device - one year or three year long term pricing.</p>
     */
    LongTermPricingType: LongTermPricingType | string | undefined;
    /**
     * <p>Specifies whether the current long term pricing type for the device should be renewed.</p>
     */
    IsLongTermPricingAutoRenew?: boolean;
    /**
     * <p>The type of AWS Snow Family device to use for the long term pricing job.</p>
     */
    SnowballType?: SnowballType | string;
}
export declare namespace CreateLongTermPricingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLongTermPricingRequest) => any;
}
export interface CreateLongTermPricingResult {
    /**
     * <p>The ID of the long term pricing type for the device.</p>
     */
    LongTermPricingId?: string;
}
export declare namespace CreateLongTermPricingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLongTermPricingResult) => any;
}
/**
 * <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once when other requests are not completed.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    ConflictResource?: string;
    Message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface CreateReturnShippingLabelRequest {
    /**
     * <p>The ID for a job that you want to create the return shipping label for. For example
     *       <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The shipping speed for a particular job. This speed doesn't dictate how soon the device is returned to AWS.
     *       This speed represents how quickly it moves to its
     *       destination while in transit. Regional shipping speeds are as follows:</p>
     */
    ShippingOption?: ShippingOption | string;
}
export declare namespace CreateReturnShippingLabelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateReturnShippingLabelRequest) => any;
}
export declare enum ShippingLabelStatus {
    FAILED = "Failed",
    IN_PROGRESS = "InProgress",
    SUCCEEDED = "Succeeded",
    TIMED_OUT = "TimedOut"
}
export interface CreateReturnShippingLabelResult {
    /**
     * <p>The status information of the task on a Snow device that is being returned to AWS.</p>
     */
    Status?: ShippingLabelStatus | string;
}
export declare namespace CreateReturnShippingLabelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateReturnShippingLabelResult) => any;
}
/**
 * <p>You get this exception if you call <code>CreateReturnShippingLabel</code> and a valid return
 *       shipping label already exists. In this case, use
 *         <code>DescribeReturnShippingLabel</code> to get the url.</p>
 */
export interface ReturnShippingLabelAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ReturnShippingLabelAlreadyExistsException";
    $fault: "client";
    Message?: string;
}
export declare namespace ReturnShippingLabelAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReturnShippingLabelAlreadyExistsException) => any;
}
export interface DescribeAddressRequest {
    /**
     * <p>The automatically generated ID for a specific address.</p>
     */
    AddressId: string | undefined;
}
export declare namespace DescribeAddressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressRequest) => any;
}
export interface DescribeAddressResult {
    /**
     * <p>The address that you want the Snow device(s) associated with a specific job to
     *       be shipped to.</p>
     */
    Address?: Address;
}
export declare namespace DescribeAddressResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressResult) => any;
}
export interface DescribeAddressesRequest {
    /**
     * <p>The number of <code>ADDRESS</code> objects to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
     *         <code>ADDRESS</code> objects, you have the option of specifying a value for
     *         <code>NextToken</code> as the starting point for your list of returned addresses.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeAddressesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressesRequest) => any;
}
export interface DescribeAddressesResult {
    /**
     * <p>The Snow device shipping addresses that were created for this account.</p>
     */
    Addresses?: Address[];
    /**
     * <p>HTTP requests are stateless. If you use the automatically generated
     *         <code>NextToken</code> value in your next <code>DescribeAddresses</code> call, your list of
     *       returned addresses will start from this point in the array.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeAddressesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressesResult) => any;
}
/**
 * <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
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
export interface DescribeClusterRequest {
    /**
     * <p>The automatically generated ID for a cluster.</p>
     */
    ClusterId: string | undefined;
}
export declare namespace DescribeClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClusterRequest) => any;
}
export declare enum ClusterState {
    AWAITING_QUORUM = "AwaitingQuorum",
    CANCELLED = "Cancelled",
    COMPLETE = "Complete",
    IN_USE = "InUse",
    PENDING = "Pending"
}
/**
 * <p>Contains metadata about a specific cluster.</p>
 */
export interface ClusterMetadata {
    /**
     * <p>The automatically generated ID for a cluster.</p>
     */
    ClusterId?: string;
    /**
     * <p>The optional description of the cluster.</p>
     */
    Description?: string;
    /**
     * <p>The <code>KmsKeyARN</code> Amazon Resource Name (ARN) associated with this cluster.
     *       This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS Key
     *       Management Service (AWS KMS).</p>
     */
    KmsKeyARN?: string;
    /**
     * <p>The role ARN associated with this cluster. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
     *       API action in AWS Identity and Access Management (IAM).</p>
     */
    RoleARN?: string;
    /**
     * <p>The current status of the cluster.</p>
     */
    ClusterState?: ClusterState | string;
    /**
     * <p>The type of job for this cluster. Currently, the only job type supported for clusters
     *       is <code>LOCAL_USE</code>.</p>
     */
    JobType?: JobType | string;
    /**
     * <p>The type of AWS Snow device to use for this cluster.
     *       </p>
     *          <note>
     *             <p>For cluster jobs, AWS Snow Family currently supports only the <code>EDGE</code> device type.</p>
     *          </note>
     */
    SnowballType?: SnowballType | string;
    /**
     * <p>The creation date for this cluster.</p>
     */
    CreationDate?: Date;
    /**
     * <p>The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
     */
    Resources?: JobResource;
    /**
     * <p>The automatically generated ID for a specific address.</p>
     */
    AddressId?: string;
    /**
     * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon
     *       you'll get each device, rather it represents how quickly each device moves to
     *       its destination while in transit. Regional shipping speeds are as follows:</p>
     *
     *          <ul>
     *             <li>
     *                <p>In Australia, you have access to express shipping. Typically, devices shipped
     *           express are delivered in about a day.</p>
     *             </li>
     *             <li>
     *                <p>In the European Union (EU), you have access to express shipping. Typically,
     *           Snow devices shipped express are delivered in about a day. In addition, most countries
     *           in the EU have access to standard shipping, which typically takes less than a week, one
     *           way.</p>
     *             </li>
     *             <li>
     *                <p>In India, Snow devices are delivered in one to seven days.</p>
     *             </li>
     *             <li>
     *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
     *             </li>
     *          </ul>
     */
    ShippingOption?: ShippingOption | string;
    /**
     * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
     *       cluster.</p>
     */
    Notification?: Notification;
    /**
     * <p>The ID of the address that you want a cluster shipped to, after it will be
     *       shipped to its primary address. This field is not supported in most regions.</p>
     */
    ForwardingAddressId?: string;
    /**
     * <p>The tax documents required in your AWS Region.</p>
     */
    TaxDocuments?: TaxDocuments;
}
export declare namespace ClusterMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClusterMetadata) => any;
}
export interface DescribeClusterResult {
    /**
     * <p>Information about a specific cluster, including shipping information, cluster status,
     *       and other important metadata.</p>
     */
    ClusterMetadata?: ClusterMetadata;
}
export declare namespace DescribeClusterResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClusterResult) => any;
}
export interface DescribeJobRequest {
    /**
     * <p>The automatically generated ID for a job, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
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
 * <p>Defines the real-time status of a Snow device's data transfer while the device is at AWS.
 *       This data is only available while a job has a <code>JobState</code> value of
 *         <code>InProgress</code>, for both import and export jobs.</p>
 */
export interface DataTransfer {
    /**
     * <p>The number of bytes transferred between a Snow device and Amazon S3.</p>
     */
    BytesTransferred?: number;
    /**
     * <p>The number of objects transferred between a Snow device and Amazon S3.</p>
     */
    ObjectsTransferred?: number;
    /**
     * <p>The total bytes of data for a transfer between a Snow device and Amazon S3. This value is
     *       set to 0 (zero) until all the keys that will be transferred have been listed.</p>
     */
    TotalBytes?: number;
    /**
     * <p>The total number of objects for a transfer between a Snow device and Amazon S3. This value
     *       is set to 0 (zero) until all the keys that will be transferred have been listed.</p>
     */
    TotalObjects?: number;
}
export declare namespace DataTransfer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataTransfer) => any;
}
/**
 * <p>Contains job logs. Whenever a Snow device is used to import data into or export data out of
 *       Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a
 *       part of the response syntax of the <code>DescribeJob</code> action in the
 *         <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after
 *       this request has been made. To access any of the job logs after 60 minutes have passed, you'll
 *       have to make another call to the <code>DescribeJob</code> action.</p>
 *
 *          <p>For import jobs, the PDF job report becomes available at the end of the import process.
 *       For export jobs, your job report typically becomes available while the Snow device for your job
 *       part is being delivered to you.</p>
 *
 *          <p>The job report provides you insight into the state of your Amazon S3 data transfer. The
 *       report includes details about your job or job part for your records.</p>
 *
 *          <p>For deeper visibility into the status of your transferred objects, you can look at the
 *       two associated logs: a success log and a failure log. The logs are saved in comma-separated
 *       value (CSV) format, and the name of each log includes the ID of the job or job part that the
 *       log describes.</p>
 */
export interface JobLogs {
    /**
     * <p>A link to an Amazon S3 presigned URL where the job completion report is
     *       located.</p>
     */
    JobCompletionReportURI?: string;
    /**
     * <p>A link to an Amazon S3 presigned URL where the job success log is located.</p>
     */
    JobSuccessLogURI?: string;
    /**
     * <p>A link to an Amazon S3 presigned URL where the job failure log is located.</p>
     */
    JobFailureLogURI?: string;
}
export declare namespace JobLogs {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobLogs) => any;
}
/**
 * <p>The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or
 *       outbound shipment.</p>
 */
export interface Shipment {
    /**
     * <p>Status information for a shipment.</p>
     */
    Status?: string;
    /**
     * <p>The tracking number for this job. Using this tracking number with your region's
     *       carrier's website, you can track a Snow device as the carrier transports it.</p>
     *          <p>For India, the carrier is Amazon Logistics. For all other regions, UPS is the
     *       carrier.</p>
     */
    TrackingNumber?: string;
}
export declare namespace Shipment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Shipment) => any;
}
/**
 * <p>A job's shipping information, including inbound and outbound tracking numbers and
 *       shipping speed options.</p>
 */
export interface ShippingDetails {
    /**
     * <p>The shipping speed for a particular job. This speed doesn't dictate how soon you'll get
     *       the Snow device from the job's creation date. This speed represents how quickly it moves to its
     *       destination while in transit. Regional shipping speeds are as follows:</p>
     *
     *          <ul>
     *             <li>
     *                <p>In Australia, you have access to express shipping. Typically, Snow devices shipped
     *           express are delivered in about a day.</p>
     *             </li>
     *             <li>
     *                <p>In the European Union (EU), you have access to express shipping. Typically,
     *           Snow devices shipped express are delivered in about a day. In addition, most countries in the
     *           EU have access to standard shipping, which typically takes less than a week, one
     *           way.</p>
     *             </li>
     *             <li>
     *                <p>In India, Snow device are delivered in one to seven days.</p>
     *             </li>
     *             <li>
     *                <p>In the United States of America (US), you have access to one-day shipping and
     *           two-day shipping.</p>
     *             </li>
     *          </ul>
     */
    ShippingOption?: ShippingOption | string;
    /**
     * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being
     *       returned to AWS for a particular job.</p>
     */
    InboundShipment?: Shipment;
    /**
     * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being
     *       delivered to the address that you specified for a particular job.</p>
     */
    OutboundShipment?: Shipment;
}
export declare namespace ShippingDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShippingDetails) => any;
}
/**
 * <p>Contains information about a specific job including shipping information, job status,
 *       and other important metadata. This information is returned as a part of the response syntax of
 *       the <code>DescribeJob</code> action.</p>
 */
export interface JobMetadata {
    /**
     * <p>The automatically generated ID for a job, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId?: string;
    /**
     * <p>The current status of the jobs.</p>
     */
    JobState?: JobState | string;
    /**
     * <p>The type of job.</p>
     */
    JobType?: JobType | string;
    /**
     * <p>The type of device used with this job.</p>
     */
    SnowballType?: SnowballType | string;
    /**
     * <p>The creation date for this job.</p>
     */
    CreationDate?: Date;
    /**
     * <p>An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object
     *       represents an Amazon S3 bucket that your transferred data will be exported from or imported
     *       into.</p>
     */
    Resources?: JobResource;
    /**
     * <p>The description of the job, provided at job creation.</p>
     */
    Description?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the AWS Key Management Service (AWS KMS) key
     *       associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS
     *       KMS.</p>
     */
    KmsKeyARN?: string;
    /**
     * <p>The role ARN associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
     *       API action in AWS Identity and Access Management (IAM).</p>
     */
    RoleARN?: string;
    /**
     * <p>The ID for the address that you want the Snow device shipped to.</p>
     */
    AddressId?: string;
    /**
     * <p>A job's shipping information, including inbound and outbound tracking numbers and
     *       shipping speed options.</p>
     */
    ShippingDetails?: ShippingDetails;
    /**
     * <p>The Snow device capacity preference for this job, specified at job creation. In US
     *       regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB
     *       capacity Snowballs.</p>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    SnowballCapacityPreference?: SnowballCapacity | string;
    /**
     * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
     *       with a specific job. The <code>Notification</code> object is returned as a part of the
     *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
     *       type.</p>
     */
    Notification?: Notification;
    /**
     * <p>A value that defines the real-time status of a Snow device's data transfer while the
     *       device is at AWS. This data is only available while a job has a <code>JobState</code> value of
     *         <code>InProgress</code>, for both import and export jobs.</p>
     */
    DataTransferProgress?: DataTransfer;
    /**
     * <p>Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF
     *       job report becomes available at the end of the import process. For export jobs, your job
     *       report typically becomes available while the Snow device for your job part is being delivered to
     *       you.</p>
     */
    JobLogInfo?: JobLogs;
    /**
     * <p>The 39-character ID for the cluster, for example
     *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    ClusterId?: string;
    /**
     * <p>The ID of the address that you want a job shipped to, after it will be
     *       shipped to its primary address. This field is not supported in most regions.</p>
     */
    ForwardingAddressId?: string;
    /**
     * <p>The metadata associated with the tax documents required in your AWS Region.</p>
     */
    TaxDocuments?: TaxDocuments;
    /**
     * <p>The container for <code>SnowconeDeviceConfiguration</code>. </p>
     */
    DeviceConfiguration?: DeviceConfiguration;
    /**
     * <p>The ID of the long term pricing type for the device.</p>
     */
    LongTermPricingId?: string;
}
export declare namespace JobMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobMetadata) => any;
}
export interface DescribeJobResult {
    /**
     * <p>Information about a specific job, including shipping information, job status, and other
     *       important metadata.</p>
     */
    JobMetadata?: JobMetadata;
    /**
     * <p>Information about a specific job part (in the case of an export job), including
     *       shipping information, job status, and other important metadata.</p>
     */
    SubJobMetadata?: JobMetadata[];
}
export declare namespace DescribeJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobResult) => any;
}
export interface DescribeReturnShippingLabelRequest {
    /**
     * <p>The automatically generated ID for a job, for example
     *       <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
}
export declare namespace DescribeReturnShippingLabelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeReturnShippingLabelRequest) => any;
}
export interface DescribeReturnShippingLabelResult {
    /**
     * <p>The status information of the task on a Snow device that is being returned to AWS.</p>
     */
    Status?: ShippingLabelStatus | string;
    /**
     * <p>The expiration date of the current return shipping label.</p>
     */
    ExpirationDate?: Date;
}
export declare namespace DescribeReturnShippingLabelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeReturnShippingLabelResult) => any;
}
export interface GetJobManifestRequest {
    /**
     * <p>The ID for a job that you want to get the manifest file for, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
}
export declare namespace GetJobManifestRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobManifestRequest) => any;
}
export interface GetJobManifestResult {
    /**
     * <p>The Amazon S3 presigned URL for the manifest file associated with the specified
     *         <code>JobId</code> value.</p>
     */
    ManifestURI?: string;
}
export declare namespace GetJobManifestResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobManifestResult) => any;
}
export interface GetJobUnlockCodeRequest {
    /**
     * <p>The ID for the job that you want to get the <code>UnlockCode</code> value for, for
     *       example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
}
export declare namespace GetJobUnlockCodeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobUnlockCodeRequest) => any;
}
export interface GetJobUnlockCodeResult {
    /**
     * <p>The <code>UnlockCode</code> value for the specified job. The <code>UnlockCode</code>
     *       value can be accessed for up to 360 days after the job has been created.</p>
     */
    UnlockCode?: string;
}
export declare namespace GetJobUnlockCodeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobUnlockCodeResult) => any;
}
export interface GetSnowballUsageRequest {
}
export declare namespace GetSnowballUsageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSnowballUsageRequest) => any;
}
export interface GetSnowballUsageResult {
    /**
     * <p>The service limit for number of Snow devices this account can have at once. The default
     *       service limit is 1 (one).</p>
     */
    SnowballLimit?: number;
    /**
     * <p>The number of Snow devices that this account is currently using.</p>
     */
    SnowballsInUse?: number;
}
export declare namespace GetSnowballUsageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSnowballUsageResult) => any;
}
export interface GetSoftwareUpdatesRequest {
    /**
     * <p>The ID for a job that you want to get the software update file for, for example
     *       <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
}
export declare namespace GetSoftwareUpdatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSoftwareUpdatesRequest) => any;
}
export interface GetSoftwareUpdatesResult {
    /**
     * <p>The Amazon S3 presigned URL for the update file associated with the specified
     *       <code>JobId</code> value. The software update will be available for 2 days after this request is made.
     *       To access an update after the 2 days have passed, you'll have to make another call to <code>GetSoftwareUpdates</code>.</p>
     */
    UpdatesURI?: string;
}
export declare namespace GetSoftwareUpdatesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSoftwareUpdatesResult) => any;
}
export interface ListClusterJobsRequest {
    /**
     * <p>The 39-character ID for the cluster that you want to list, for example
     *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    ClusterId: string | undefined;
    /**
     * <p>The number of <code>JobListEntry</code> objects to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
     *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
     *       as the starting point for your returned list.</p>
     */
    NextToken?: string;
}
export declare namespace ListClusterJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListClusterJobsRequest) => any;
}
/**
 * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
 *       that indicates whether the job is a job part, in the case of an export job.</p>
 */
export interface JobListEntry {
    /**
     * <p>The automatically generated ID for a job, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId?: string;
    /**
     * <p>The current state of this job.</p>
     */
    JobState?: JobState | string;
    /**
     * <p>A value that indicates that this job is a main job. A main job represents a
     *       successful request to create an export job. Main jobs aren't associated with any Snowballs.
     *       Instead, each main job will have at least one job part, and each job part is associated with
     *       a Snowball. It might take some time before the job parts associated with a particular main
     *       job are listed, because they are created after the main job is created.</p>
     */
    IsMaster?: boolean;
    /**
     * <p>The type of job.</p>
     */
    JobType?: JobType | string;
    /**
     * <p>The type of device used with this job.</p>
     */
    SnowballType?: SnowballType | string;
    /**
     * <p>The creation date for this job.</p>
     */
    CreationDate?: Date;
    /**
     * <p>The optional description of this specific job, for example <code>Important Photos
     *         2016-08-11</code>.</p>
     */
    Description?: string;
}
export declare namespace JobListEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobListEntry) => any;
}
export interface ListClusterJobsResult {
    /**
     * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
     *       that indicates whether the job is a job part, in the case of export jobs. </p>
     */
    JobListEntries?: JobListEntry[];
    /**
     * <p>HTTP requests are stateless. If you use the automatically generated
     *         <code>NextToken</code> value in your next <code>ListClusterJobsResult</code> call, your list
     *       of returned jobs will start from this point in the array.</p>
     */
    NextToken?: string;
}
export declare namespace ListClusterJobsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListClusterJobsResult) => any;
}
export interface ListClustersRequest {
    /**
     * <p>The number of <code>ClusterListEntry</code> objects to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
     *         <code>ClusterListEntry</code> objects, you have the option of specifying
     *         <code>NextToken</code> as the starting point for your returned list.</p>
     */
    NextToken?: string;
}
export declare namespace ListClustersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListClustersRequest) => any;
}
/**
 * <p>Contains a cluster's state, a cluster's ID, and other important information.</p>
 */
export interface ClusterListEntry {
    /**
     * <p>The 39-character ID for the cluster that you want to list, for example
     *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    ClusterId?: string;
    /**
     * <p>The current state of this cluster. For information about the state of a specific node,
     *       see <a>JobListEntry$JobState</a>.</p>
     */
    ClusterState?: ClusterState | string;
    /**
     * <p>The creation date for this cluster.</p>
     */
    CreationDate?: Date;
    /**
     * <p>Defines an optional description of the cluster, for example <code>Environmental Data
     *         Cluster-01</code>.</p>
     */
    Description?: string;
}
export declare namespace ClusterListEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClusterListEntry) => any;
}
export interface ListClustersResult {
    /**
     * <p>Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID,
     *       and other important status information.</p>
     */
    ClusterListEntries?: ClusterListEntry[];
    /**
     * <p>HTTP requests are stateless. If you use the automatically generated
     *         <code>NextToken</code> value in your next <code>ClusterListEntry</code> call, your list of
     *       returned clusters will start from this point in the array.</p>
     */
    NextToken?: string;
}
export declare namespace ListClustersResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListClustersResult) => any;
}
export interface ListCompatibleImagesRequest {
    /**
     * <p>The maximum number of results for the list of compatible images. Currently, a Snowball
     *       Edge device can store 10 AMIs.</p>
     */
    MaxResults?: number;
    /**
     * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
     *       compatible images, you can specify a value for <code>NextToken</code> as the starting point
     *       for your list of returned images.</p>
     */
    NextToken?: string;
}
export declare namespace ListCompatibleImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCompatibleImagesRequest) => any;
}
/**
 * <p>A JSON-formatted object that describes a compatible Amazon Machine Image (AMI),
 *       including the ID and name for a Snow device AMI. This AMI is compatible with the device's
 *       physical hardware requirements, and it should be able to be run in an SBE1 instance on the
 *       device.</p>
 */
export interface CompatibleImage {
    /**
     * <p>The unique identifier for an individual Snow device AMI.</p>
     */
    AmiId?: string;
    /**
     * <p>The optional name of a compatible image.</p>
     */
    Name?: string;
}
export declare namespace CompatibleImage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CompatibleImage) => any;
}
export interface ListCompatibleImagesResult {
    /**
     * <p>A JSON-formatted object that describes a compatible AMI, including the ID and name for
     *       a Snow device AMI.</p>
     */
    CompatibleImages?: CompatibleImage[];
    /**
     * <p>Because HTTP requests are stateless, this is the starting point for your next list of
     *       returned images.</p>
     */
    NextToken?: string;
}
export declare namespace ListCompatibleImagesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCompatibleImagesResult) => any;
}
export interface ListJobsRequest {
    /**
     * <p>The number of <code>JobListEntry</code> objects to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
     *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
     *       as the starting point for your returned list.</p>
     */
    NextToken?: string;
}
export declare namespace ListJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsRequest) => any;
}
export interface ListJobsResult {
    /**
     * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
     *       that indicates whether the job is a job part, in the case of export jobs. </p>
     */
    JobListEntries?: JobListEntry[];
    /**
     * <p>HTTP requests are stateless. If you use this automatically generated
     *         <code>NextToken</code> value in your next <code>ListJobs</code> call, your returned
     *         <code>JobListEntry</code> objects will start from this point in the array.</p>
     */
    NextToken?: string;
}
export declare namespace ListJobsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsResult) => any;
}
export interface ListLongTermPricingRequest {
    /**
     * <p>The maximum number of <code>ListLongTermPricing</code> objects to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>Because HTTP requests are stateless, this is the starting point for your next list of
     *       <code>ListLongTermPricing</code> to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListLongTermPricingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLongTermPricingRequest) => any;
}
/**
 * <p>Each <code>LongTermPricingListEntry</code> object contains information about a long term pricing type.</p>
 */
export interface LongTermPricingListEntry {
    /**
     * <p>The ID of the long term pricing type for the device.</p>
     */
    LongTermPricingId?: string;
    /**
     * <p>The end date the long term pricing contract.</p>
     */
    LongTermPricingEndDate?: Date;
    /**
     * <p>The start date of the long term pricing contract.</p>
     */
    LongTermPricingStartDate?: Date;
    /**
     * <p>The type of long term pricing that was selected for the device.</p>
     */
    LongTermPricingType?: LongTermPricingType | string;
    /**
     * <p>The current active jobs on the device the long term pricing type.</p>
     */
    CurrentActiveJob?: string;
    /**
     * <p>A new device that replaces a device that is ordered with long term pricing.</p>
     */
    ReplacementJob?: string;
    /**
     * <p>If set to <code>true</code>, specifies that the current long term pricing type for the
     *       device should be automatically renewed before the long term pricing contract expires.</p>
     */
    IsLongTermPricingAutoRenew?: boolean;
    /**
     * <p>The status of the long term pricing type.</p>
     */
    LongTermPricingStatus?: string;
    /**
     * <p>The type of AWS Snow Family device associated with this long term pricing job.</p>
     */
    SnowballType?: SnowballType | string;
    /**
     * <p>The IDs of the jobs that are associated with a long term pricing type.</p>
     */
    JobIds?: string[];
}
export declare namespace LongTermPricingListEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LongTermPricingListEntry) => any;
}
export interface ListLongTermPricingResult {
    /**
     * <p>Each <code>LongTermPricingEntry</code> object contains a status, ID, and other information
     *       about the <code>LongTermPricing</code> type. </p>
     */
    LongTermPricingEntries?: LongTermPricingListEntry[];
    /**
     * <p>Because HTTP requests are stateless, this is the starting point for your next list of
     *       returned <code>ListLongTermPricing</code> list.</p>
     */
    NextToken?: string;
}
export declare namespace ListLongTermPricingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLongTermPricingResult) => any;
}
export interface UpdateClusterRequest {
    /**
     * <p>The cluster ID of the cluster that you want to update, for example
     *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    ClusterId: string | undefined;
    /**
     * <p>The new role Amazon Resource Name (ARN) that you want to associate with this cluster.
     *       To create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS
     *       Identity and Access Management (IAM).</p>
     */
    RoleARN?: string;
    /**
     * <p>The updated description of this cluster.</p>
     */
    Description?: string;
    /**
     * <p>The updated arrays of <a>JobResource</a> objects that can include updated
     *         <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
     */
    Resources?: JobResource;
    /**
     * <p>The ID of the updated <a>Address</a> object.</p>
     */
    AddressId?: string;
    /**
     * <p>The updated shipping option value of this cluster's <a>ShippingDetails</a>
     *       object.</p>
     */
    ShippingOption?: ShippingOption | string;
    /**
     * <p>The new or updated <a>Notification</a> object.</p>
     */
    Notification?: Notification;
    /**
     * <p>The updated ID for the forwarding address for a cluster. This field is not
     *       supported in most regions.</p>
     */
    ForwardingAddressId?: string;
}
export declare namespace UpdateClusterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateClusterRequest) => any;
}
export interface UpdateClusterResult {
}
export declare namespace UpdateClusterResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateClusterResult) => any;
}
export interface UpdateJobRequest {
    /**
     * <p>The job ID of the job that you want to update, for example
     *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The new role Amazon Resource Name (ARN) that you want to associate with this job. To
     *       create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>AWS Identity and Access
     *       Management (IAM) API action.</p>
     */
    RoleARN?: string;
    /**
     * <p>The new or updated <a>Notification</a> object.</p>
     */
    Notification?: Notification;
    /**
     * <p>The updated <code>JobResource</code> object, or the updated <a>JobResource</a> object. </p>
     */
    Resources?: JobResource;
    /**
     * <p>The ID of the updated <a>Address</a> object.</p>
     */
    AddressId?: string;
    /**
     * <p>The updated shipping option value of this job's <a>ShippingDetails</a>
     *       object.</p>
     */
    ShippingOption?: ShippingOption | string;
    /**
     * <p>The updated description of this job's <a>JobMetadata</a> object.</p>
     */
    Description?: string;
    /**
     * <p>The updated <code>SnowballCapacityPreference</code> of this job's <a>JobMetadata</a> object. The 50 TB Snowballs are only available in the US
     *       regions.</p>
     *
     *          <p>For more information, see
     *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
     *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
     *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
     */
    SnowballCapacityPreference?: SnowballCapacity | string;
    /**
     * <p>The updated ID for the forwarding address for a job. This field is not
     *       supported in most regions.</p>
     */
    ForwardingAddressId?: string;
}
export declare namespace UpdateJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobRequest) => any;
}
export interface UpdateJobResult {
}
export declare namespace UpdateJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobResult) => any;
}
export declare enum ShipmentState {
    RECEIVED = "RECEIVED",
    RETURNED = "RETURNED"
}
export interface UpdateJobShipmentStateRequest {
    /**
     * <p>The job ID of the job whose shipment date you want to update, for example
     *       <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The state of a device when it is being shipped. </p>
     *          <p>Set to <code>RECEIVED</code> when the device arrives at your location.</p>
     *          <p>Set to <code>RETURNED</code> when you have returned the device to AWS.</p>
     */
    ShipmentState: ShipmentState | string | undefined;
}
export declare namespace UpdateJobShipmentStateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobShipmentStateRequest) => any;
}
export interface UpdateJobShipmentStateResult {
}
export declare namespace UpdateJobShipmentStateResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobShipmentStateResult) => any;
}
export interface UpdateLongTermPricingRequest {
    /**
     * <p>The ID of the long term pricing type for the device.</p>
     */
    LongTermPricingId: string | undefined;
    /**
     * <p>Specifies that a device that is ordered with long term pricing should be replaced with a new device.</p>
     */
    ReplacementJob?: string;
    /**
     * <p>If set to <code>true</code>, specifies that the current long term pricing type for the
     *       device should be automatically renewed before the long term pricing contract expires.</p>
     */
    IsLongTermPricingAutoRenew?: boolean;
}
export declare namespace UpdateLongTermPricingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLongTermPricingRequest) => any;
}
export interface UpdateLongTermPricingResult {
}
export declare namespace UpdateLongTermPricingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLongTermPricingResult) => any;
}
