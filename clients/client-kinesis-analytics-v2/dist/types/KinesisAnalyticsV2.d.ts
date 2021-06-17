import { KinesisAnalyticsV2Client } from "./KinesisAnalyticsV2Client";
import { AddApplicationCloudWatchLoggingOptionCommandInput, AddApplicationCloudWatchLoggingOptionCommandOutput } from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import { AddApplicationInputCommandInput, AddApplicationInputCommandOutput } from "./commands/AddApplicationInputCommand";
import { AddApplicationInputProcessingConfigurationCommandInput, AddApplicationInputProcessingConfigurationCommandOutput } from "./commands/AddApplicationInputProcessingConfigurationCommand";
import { AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput } from "./commands/AddApplicationOutputCommand";
import { AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput } from "./commands/AddApplicationReferenceDataSourceCommand";
import { AddApplicationVpcConfigurationCommandInput, AddApplicationVpcConfigurationCommandOutput } from "./commands/AddApplicationVpcConfigurationCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateApplicationPresignedUrlCommandInput, CreateApplicationPresignedUrlCommandOutput } from "./commands/CreateApplicationPresignedUrlCommand";
import { CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput } from "./commands/CreateApplicationSnapshotCommand";
import { DeleteApplicationCloudWatchLoggingOptionCommandInput, DeleteApplicationCloudWatchLoggingOptionCommandOutput } from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationInputProcessingConfigurationCommandInput, DeleteApplicationInputProcessingConfigurationCommandOutput } from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import { DeleteApplicationOutputCommandInput, DeleteApplicationOutputCommandOutput } from "./commands/DeleteApplicationOutputCommand";
import { DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput } from "./commands/DeleteApplicationReferenceDataSourceCommand";
import { DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput } from "./commands/DeleteApplicationSnapshotCommand";
import { DeleteApplicationVpcConfigurationCommandInput, DeleteApplicationVpcConfigurationCommandOutput } from "./commands/DeleteApplicationVpcConfigurationCommand";
import { DescribeApplicationCommandInput, DescribeApplicationCommandOutput } from "./commands/DescribeApplicationCommand";
import { DescribeApplicationSnapshotCommandInput, DescribeApplicationSnapshotCommandOutput } from "./commands/DescribeApplicationSnapshotCommand";
import { DescribeApplicationVersionCommandInput, DescribeApplicationVersionCommandOutput } from "./commands/DescribeApplicationVersionCommand";
import { DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput } from "./commands/DiscoverInputSchemaCommand";
import { ListApplicationSnapshotsCommandInput, ListApplicationSnapshotsCommandOutput } from "./commands/ListApplicationSnapshotsCommand";
import { ListApplicationVersionsCommandInput, ListApplicationVersionsCommandOutput } from "./commands/ListApplicationVersionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RollbackApplicationCommandInput, RollbackApplicationCommandOutput } from "./commands/RollbackApplicationCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "./commands/StartApplicationCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "./commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateApplicationMaintenanceConfigurationCommandInput, UpdateApplicationMaintenanceConfigurationCommandOutput } from "./commands/UpdateApplicationMaintenanceConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service
 *       enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
export declare class KinesisAnalyticsV2 extends KinesisAnalyticsV2Client {
    /**
     * <p>Adds an Amazon CloudWatch log stream to monitor application configuration errors.</p>
     */
    addApplicationCloudWatchLoggingOption(args: AddApplicationCloudWatchLoggingOptionCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput>;
    addApplicationCloudWatchLoggingOption(args: AddApplicationCloudWatchLoggingOptionCommandInput, cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    addApplicationCloudWatchLoggingOption(args: AddApplicationCloudWatchLoggingOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    /**
     * <p>
     *       Adds a streaming source to your SQL-based Kinesis Data Analytics application.
     *     </p>
     *          <p>You can add a streaming source when you create an application, or you can use this
     *       operation to add a streaming source after you create an application. For more information, see
     *         <a>CreateApplication</a>.</p>
     *          <p>Any configuration update, including adding a streaming source using this operation,
     *       results in a new version of the application. You can use the <a>DescribeApplication</a> operation
     *       to find the current application version.
     *     </p>
     */
    addApplicationInput(args: AddApplicationInputCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationInputCommandOutput>;
    addApplicationInput(args: AddApplicationInputCommandInput, cb: (err: any, data?: AddApplicationInputCommandOutput) => void): void;
    addApplicationInput(args: AddApplicationInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationInputCommandOutput) => void): void;
    /**
     * <p>Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records
     *       on the input stream before the
     *       application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
     */
    addApplicationInputProcessingConfiguration(args: AddApplicationInputProcessingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationInputProcessingConfigurationCommandOutput>;
    addApplicationInputProcessingConfiguration(args: AddApplicationInputProcessingConfigurationCommandInput, cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void): void;
    addApplicationInputProcessingConfiguration(args: AddApplicationInputProcessingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void): void;
    /**
     * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
     *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
     *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
     *       Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to
     *       your application using this operation. You can configure one or more outputs for your
     *       application. Each output configuration maps an in-application stream and an external
     *       destination.</p>
     *          <p> You can use one of the output configurations to deliver data from your
     *       in-application error stream to an external destination so that you can analyze the
     *       errors.  </p>
     *          <p> Any configuration update, including adding a streaming source using this
     *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
     *       version.</p>
     */
    addApplicationOutput(args: AddApplicationOutputCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationOutputCommandOutput>;
    addApplicationOutput(args: AddApplicationOutputCommandInput, cb: (err: any, data?: AddApplicationOutputCommandOutput) => void): void;
    addApplicationOutput(args: AddApplicationOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationOutputCommandOutput) => void): void;
    /**
     * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p>
     *          <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
     *       in-application table within your application. In the request, you provide the source (S3
     *       bucket name and object key name), name of the in-application table to create, and the
     *       necessary mapping information that describes how data in an Amazon S3 object maps to columns
     *       in the resulting in-application table.</p>
     */
    addApplicationReferenceDataSource(args: AddApplicationReferenceDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationReferenceDataSourceCommandOutput>;
    addApplicationReferenceDataSource(args: AddApplicationReferenceDataSourceCommandInput, cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void): void;
    addApplicationReferenceDataSource(args: AddApplicationReferenceDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void): void;
    /**
     * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
     *         and access resources securely.</p>
     *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
     *          <ul>
     *             <li>
     *                <p>VPC configurations are not supported for SQL applications.</p>
     *             </li>
     *             <li>
     *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the
     *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
     *             </li>
     *          </ul>
     */
    addApplicationVpcConfiguration(args: AddApplicationVpcConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationVpcConfigurationCommandOutput>;
    addApplicationVpcConfiguration(args: AddApplicationVpcConfigurationCommandInput, cb: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void): void;
    addApplicationVpcConfiguration(args: AddApplicationVpcConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationVpcConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates a Kinesis Data Analytics application. For information about creating a
     *           Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an
     *         Application</a>.</p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Creates and returns a URL that you can use to connect to
     *             an application's extension. Currently, the only
     *             available extension is the Apache Flink dashboard.</p>
     *         <p>The IAM role or user used to call this API defines the permissions to access the
     *       extension. After the presigned URL is created, no additional permission is required to access
     *       this URL. IAM authorization policies for this API are also enforced for every HTTP request
     *       that attempts to connect to the extension. </p>
     *         <p>You    control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code>
     *         parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p>
     *         <note>
     *             <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes
     *             to be valid.
     *             If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p>
     *          </note>
     */
    createApplicationPresignedUrl(args: CreateApplicationPresignedUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationPresignedUrlCommandOutput>;
    createApplicationPresignedUrl(args: CreateApplicationPresignedUrlCommandInput, cb: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void): void;
    createApplicationPresignedUrl(args: CreateApplicationPresignedUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationPresignedUrlCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of the application's state data.</p>
     */
    createApplicationSnapshot(args: CreateApplicationSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationSnapshotCommandOutput>;
    createApplicationSnapshot(args: CreateApplicationSnapshotCommandInput, cb: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void): void;
    createApplicationSnapshot(args: CreateApplicationSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.</p>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. </p>
     */
    deleteApplicationCloudWatchLoggingOption(args: DeleteApplicationCloudWatchLoggingOptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput>;
    deleteApplicationCloudWatchLoggingOption(args: DeleteApplicationCloudWatchLoggingOptionCommandInput, cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    deleteApplicationCloudWatchLoggingOption(args: DeleteApplicationCloudWatchLoggingOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    /**
     * <p>Deletes an <a>InputProcessingConfiguration</a> from an input.</p>
     */
    deleteApplicationInputProcessingConfiguration(args: DeleteApplicationInputProcessingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput>;
    deleteApplicationInputProcessingConfiguration(args: DeleteApplicationInputProcessingConfigurationCommandInput, cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void): void;
    deleteApplicationInputProcessingConfiguration(args: DeleteApplicationInputProcessingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration.
     *       Kinesis Data Analytics will no longer write data from
     *       the corresponding in-application stream to the external output destination.</p>
     */
    deleteApplicationOutput(args: DeleteApplicationOutputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationOutputCommandOutput>;
    deleteApplicationOutput(args: DeleteApplicationOutputCommandInput, cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void): void;
    deleteApplicationOutput(args: DeleteApplicationOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void): void;
    /**
     * <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p>
     *          <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table
     *       that you created using the <a>AddApplicationReferenceDataSource</a> operation.  </p>
     */
    deleteApplicationReferenceDataSource(args: DeleteApplicationReferenceDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationReferenceDataSourceCommandOutput>;
    deleteApplicationReferenceDataSource(args: DeleteApplicationReferenceDataSourceCommandInput, cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void): void;
    deleteApplicationReferenceDataSource(args: DeleteApplicationReferenceDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void): void;
    /**
     * <p>Deletes a snapshot of application state.</p>
     */
    deleteApplicationSnapshot(args: DeleteApplicationSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationSnapshotCommandOutput>;
    deleteApplicationSnapshot(args: DeleteApplicationSnapshotCommandInput, cb: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void): void;
    deleteApplicationSnapshot(args: DeleteApplicationSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationSnapshotCommandOutput) => void): void;
    /**
     * <p>Removes a VPC configuration from a Kinesis Data Analytics application.</p>
     */
    deleteApplicationVpcConfiguration(args: DeleteApplicationVpcConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationVpcConfigurationCommandOutput>;
    deleteApplicationVpcConfiguration(args: DeleteApplicationVpcConfigurationCommandInput, cb: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void): void;
    deleteApplicationVpcConfiguration(args: DeleteApplicationVpcConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationVpcConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific Kinesis Data Analytics application.</p>
     *          <p>If you want to retrieve a list of all applications in your account,
     *       use the <a>ListApplications</a> operation.</p>
     */
    describeApplication(args: DescribeApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationCommandOutput>;
    describeApplication(args: DescribeApplicationCommandInput, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    describeApplication(args: DescribeApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    /**
     * <p>Returns information about a snapshot of application state data.</p>
     */
    describeApplicationSnapshot(args: DescribeApplicationSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationSnapshotCommandOutput>;
    describeApplicationSnapshot(args: DescribeApplicationSnapshotCommandInput, cb: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void): void;
    describeApplicationSnapshot(args: DescribeApplicationSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationSnapshotCommandOutput) => void): void;
    /**
     * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p>
     *          <note>
     *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
     *          </note>
     */
    describeApplicationVersion(args: DescribeApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationVersionCommandOutput>;
    describeApplicationVersion(args: DescribeApplicationVersionCommandInput, cb: (err: any, data?: DescribeApplicationVersionCommandOutput) => void): void;
    describeApplicationVersion(args: DescribeApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating
     *       sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose
     *       delivery stream) or Amazon S3 object. In the response, the operation returns the inferred
     *       schema and also the sample records that the operation used to infer the schema.</p>
     *          <p> You can use the inferred schema when configuring a streaming source for your application.
     *       When you create an application using the Kinesis Data Analytics console, the console uses this
     *       operation to infer a schema and show it in the console user interface. </p>
     */
    discoverInputSchema(args: DiscoverInputSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DiscoverInputSchemaCommandOutput>;
    discoverInputSchema(args: DiscoverInputSchemaCommandInput, cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void): void;
    discoverInputSchema(args: DiscoverInputSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void): void;
    /**
     * <p>Returns a list of Kinesis Data Analytics applications in your account. For each
     *       application, the response includes the application name, Amazon Resource Name (ARN), and
     *       status. </p>
     *          <p>If you want detailed information about a specific application, use
     *       <a>DescribeApplication</a>.</p>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Lists information about the current application snapshots.</p>
     */
    listApplicationSnapshots(args: ListApplicationSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationSnapshotsCommandOutput>;
    listApplicationSnapshots(args: ListApplicationSnapshotsCommandInput, cb: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void): void;
    listApplicationSnapshots(args: ListApplicationSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationSnapshotsCommandOutput) => void): void;
    /**
     * <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration
     *       associated with each version.</p>
     *
     *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
     *          <note>
     *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
     *          </note>
     */
    listApplicationVersions(args: ListApplicationVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationVersionsCommandOutput>;
    listApplicationVersions(args: ListApplicationVersionsCommandInput, cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void): void;
    listApplicationVersions(args: ListApplicationVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of key-value tags assigned to the application. For more information, see
     *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Reverts the application to the previous running version. You can
     *             roll back an application if you suspect it is stuck in a transient status. </p>
     *         <p>You can roll back an application only if it is in the <code>UPDATING</code>
     *             or <code>AUTOSCALING</code> status.</p>
     *         <p>When you rollback an application, it loads state data from the last successful snapshot.
     *         If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p>
     *         <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
     */
    rollbackApplication(args: RollbackApplicationCommandInput, options?: __HttpHandlerOptions): Promise<RollbackApplicationCommandOutput>;
    rollbackApplication(args: RollbackApplicationCommandInput, cb: (err: any, data?: RollbackApplicationCommandOutput) => void): void;
    rollbackApplication(args: RollbackApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RollbackApplicationCommandOutput) => void): void;
    /**
     * <p>Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to
     *       start your application.</p>
     */
    startApplication(args: StartApplicationCommandInput, options?: __HttpHandlerOptions): Promise<StartApplicationCommandOutput>;
    startApplication(args: StartApplicationCommandInput, cb: (err: any, data?: StartApplicationCommandOutput) => void): void;
    startApplication(args: StartApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartApplicationCommandOutput) => void): void;
    /**
     * <p>Stops the application from processing data. You can stop
     *       an application only if it is in the running status, unless you set the <code>Force</code>
     *         parameter to <code>true</code>.</p>
     *          <p>You can use the <a>DescribeApplication</a> operation to find the application status.
     *        </p>
     *          <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set
     *           to <code>true</code>.</p>
     */
    stopApplication(args: StopApplicationCommandInput, options?: __HttpHandlerOptions): Promise<StopApplicationCommandOutput>;
    stopApplication(args: StopApplicationCommandInput, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
    stopApplication(args: StopApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
    /**
     * <p>Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application
     *         tags includes system tags. The maximum number of user-defined application tags is 50.
     *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a Kinesis Data Analytics application. For more information, see
     *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing Kinesis Data Analytics application. Using this operation, you
     *       can update application code, input configuration, and output configuration. </p>
     *          <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update
     *       your application. </p>
     *          <note>
     *             <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you
     *     need to update an application's <code>RuntimeEnvironment</code>, you must delete the application
     *     and create it again.</p>
     *          </note>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    /**
     * <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p>
     *          <p>You can invoke this operation on an application that is in one of the two following
     *       states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is
     *       in a state other than these two states, it throws a <code>ResourceInUseException</code>. The
     *       service makes use of the updated configuration the next time it schedules maintenance for the
     *       application. If you invoke this operation after the service schedules maintenance, the service
     *       will apply the configuration update the next time it schedules maintenance for the
     *       application. This means that you might not see the maintenance configuration update applied to
     *       the maintenance process that follows a successful invocation of this operation, but to the
     *       following maintenance process instead.</p>
     *          <p>To see the current maintenance configuration of your application, invoke the
     *       <a>DescribeApplication</a> operation.</p>
     *          <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p>
     *          <note>
     *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
     *          </note>
     */
    updateApplicationMaintenanceConfiguration(args: UpdateApplicationMaintenanceConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput>;
    updateApplicationMaintenanceConfiguration(args: UpdateApplicationMaintenanceConfigurationCommandInput, cb: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void): void;
    updateApplicationMaintenanceConfiguration(args: UpdateApplicationMaintenanceConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationMaintenanceConfigurationCommandOutput) => void): void;
}
