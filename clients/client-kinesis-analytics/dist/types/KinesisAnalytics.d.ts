import { KinesisAnalyticsClient } from "./KinesisAnalyticsClient";
import { AddApplicationCloudWatchLoggingOptionCommandInput, AddApplicationCloudWatchLoggingOptionCommandOutput } from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import { AddApplicationInputCommandInput, AddApplicationInputCommandOutput } from "./commands/AddApplicationInputCommand";
import { AddApplicationInputProcessingConfigurationCommandInput, AddApplicationInputProcessingConfigurationCommandOutput } from "./commands/AddApplicationInputProcessingConfigurationCommand";
import { AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput } from "./commands/AddApplicationOutputCommand";
import { AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput } from "./commands/AddApplicationReferenceDataSourceCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { DeleteApplicationCloudWatchLoggingOptionCommandInput, DeleteApplicationCloudWatchLoggingOptionCommandOutput } from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationInputProcessingConfigurationCommandInput, DeleteApplicationInputProcessingConfigurationCommandOutput } from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import { DeleteApplicationOutputCommandInput, DeleteApplicationOutputCommandOutput } from "./commands/DeleteApplicationOutputCommand";
import { DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput } from "./commands/DeleteApplicationReferenceDataSourceCommand";
import { DescribeApplicationCommandInput, DescribeApplicationCommandOutput } from "./commands/DescribeApplicationCommand";
import { DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput } from "./commands/DiscoverInputSchemaCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "./commands/StartApplicationCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "./commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Kinesis Analytics</fullname>
 *         <p>
 *             <b>Overview</b>
 *          </p>
 *         <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>.
 *             The Amazon Kinesis Analytics Developer Guide provides additional information.
 *             </p>
 */
export declare class KinesisAnalytics extends KinesisAnalyticsClient {
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Adds a CloudWatch log stream to monitor application configuration errors. For more
     *             information about using CloudWatch log streams with Amazon Kinesis Analytics
     *             applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
     *                 CloudWatch Logs</a>.</p>
     */
    addApplicationCloudWatchLoggingOption(args: AddApplicationCloudWatchLoggingOptionCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput>;
    addApplicationCloudWatchLoggingOption(args: AddApplicationCloudWatchLoggingOptionCommandInput, cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    addApplicationCloudWatchLoggingOption(args: AddApplicationCloudWatchLoggingOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>
     *             Adds a streaming source to your Amazon Kinesis application.
     *             For conceptual information,
     *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
     *         </p>
     *         <p>You can add a streaming source either when you create an application or you can use
     *             this operation to add a streaming source after you create an application. For more information, see
     *            <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p>
     *         <p>Any configuration update, including adding a streaming source using this operation,
     *             results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
     *             to find the current application version.
     *         </p>
     *         <p>This operation requires permissions to perform the
     *             <code>kinesisanalytics:AddApplicationInput</code> action.</p>
     */
    addApplicationInput(args: AddApplicationInputCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationInputCommandOutput>;
    addApplicationInput(args: AddApplicationInputCommandInput, cb: (err: any, data?: AddApplicationInputCommandOutput) => void): void;
    addApplicationInput(args: AddApplicationInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationInputCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream
     *             before the application's SQL code executes. Currently, the only input processor available is
     *             <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
     */
    addApplicationInputProcessingConfiguration(args: AddApplicationInputProcessingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationInputProcessingConfigurationCommandOutput>;
    addApplicationInputProcessingConfiguration(args: AddApplicationInputProcessingConfigurationCommandInput, cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void): void;
    addApplicationInputProcessingConfiguration(args: AddApplicationInputProcessingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationInputProcessingConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Adds an external destination to your Amazon Kinesis Analytics application.</p>
     *         <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream
     *             within your application to an external destination (such as an Amazon Kinesis stream, an
     *             Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the
     *             relevant configuration to your application using this operation. You can configure one
     *             or more outputs for your application. Each output configuration maps an in-application
     *             stream and an external destination.</p>
     *         <p> You can use one of the output configurations to deliver data from your
     *             in-application error stream to an external destination so that you can analyze the
     *             errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application
     *                 Output (Destination)</a>. </p>
     *         <p> Any configuration update, including adding a streaming source using this
     *             operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application
     *             version.</p>
     *         <p>For the limits on the number of application inputs and outputs
     *             you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p>
     *         <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
     */
    addApplicationOutput(args: AddApplicationOutputCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationOutputCommandOutput>;
    addApplicationOutput(args: AddApplicationOutputCommandInput, cb: (err: any, data?: AddApplicationOutputCommandOutput) => void): void;
    addApplicationOutput(args: AddApplicationOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationOutputCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Adds a reference data source to an existing application.</p>
     *          <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p>
     *         <p>
     *             For conceptual information,
     *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
     *             For the limits on data sources you can add to your application, see
     *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.
     *         </p>
     *         <p>
     *             This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.
     *         </p>
     */
    addApplicationReferenceDataSource(args: AddApplicationReferenceDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<AddApplicationReferenceDataSourceCommandOutput>;
    addApplicationReferenceDataSource(args: AddApplicationReferenceDataSourceCommandInput, cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void): void;
    addApplicationReferenceDataSource(args: AddApplicationReferenceDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddApplicationReferenceDataSourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *
     *         <p>
     *             Creates an Amazon Kinesis Analytics application.
     *             You can configure each application with one streaming source as input,
     *             application code to process the input, and up to
     *             three destinations where
     *             you want Amazon Kinesis Analytics to write the output data from your application.
     *             For an overview, see
     *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>.
     *         </p>
     *         <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a
     *             data element in the streaming source.</p>
     *
     *         <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p>
     *         <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p>
     *         <p>
     *             To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics
     *             needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the
     *             <code>kinesisanalytics:CreateApplication</code> action.
     *         </p>
     *         <p>
     *             For introductory exercises to create an Amazon Kinesis Analytics application, see
     *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>.
     *         </p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p>
     *
     *         <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Deletes a CloudWatch log stream from an application. For more information about
     *             using CloudWatch log streams with Amazon Kinesis Analytics applications, see
     *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
     */
    deleteApplicationCloudWatchLoggingOption(args: DeleteApplicationCloudWatchLoggingOptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput>;
    deleteApplicationCloudWatchLoggingOption(args: DeleteApplicationCloudWatchLoggingOptionCommandInput, cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    deleteApplicationCloudWatchLoggingOption(args: DeleteApplicationCloudWatchLoggingOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCloudWatchLoggingOptionCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
     */
    deleteApplicationInputProcessingConfiguration(args: DeleteApplicationInputProcessingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput>;
    deleteApplicationInputProcessingConfiguration(args: DeleteApplicationInputProcessingConfigurationCommandInput, cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void): void;
    deleteApplicationInputProcessingConfiguration(args: DeleteApplicationInputProcessingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationInputProcessingConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p>
     *         <p>This operation requires permissions to perform the
     *             <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
     */
    deleteApplicationOutput(args: DeleteApplicationOutputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationOutputCommandOutput>;
    deleteApplicationOutput(args: DeleteApplicationOutputCommandInput, cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void): void;
    deleteApplicationOutput(args: DeleteApplicationOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationOutputCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Deletes a reference data source configuration from the specified application configuration.</p>
     *         <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table
     *             that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.  </p>
     *
     *         <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code>
     *         action.</p>
     */
    deleteApplicationReferenceDataSource(args: DeleteApplicationReferenceDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationReferenceDataSourceCommandOutput>;
    deleteApplicationReferenceDataSource(args: DeleteApplicationReferenceDataSourceCommandInput, cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void): void;
    deleteApplicationReferenceDataSource(args: DeleteApplicationReferenceDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationReferenceDataSourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Returns information about a specific Amazon Kinesis Analytics application.</p>
     *         <p>If you want to retrieve a list of all applications in your account,
     *             use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p>
     *         <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code>
     *             action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other
     *             operations such as <code>Update</code>.
     *         </p>
     */
    describeApplication(args: DescribeApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationCommandOutput>;
    describeApplication(args: DescribeApplicationCommandInput, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    describeApplication(args: DescribeApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p>
     *         <p>
     *             You can use the inferred schema when configuring a streaming source
     *             for your application. For conceptual information,
     *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
     *             Note that when you create an application using the Amazon Kinesis Analytics console,
     *             the console uses this operation to infer a schema and show it in the console user interface.
     *         </p>
     *         <p>
     *             This operation requires permissions to perform the
     *             <code>kinesisanalytics:DiscoverInputSchema</code> action.
     *         </p>
     */
    discoverInputSchema(args: DiscoverInputSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DiscoverInputSchemaCommandOutput>;
    discoverInputSchema(args: DiscoverInputSchemaCommandInput, cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void): void;
    discoverInputSchema(args: DiscoverInputSchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DiscoverInputSchemaCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Returns a list of Amazon Kinesis Analytics applications in your account.
     *             For each application, the response includes the application name,
     *             Amazon Resource Name (ARN), and status.
     *
     *             If the response returns the <code>HasMoreApplications</code> value as true,
     *             you can send another request by adding the
     *             <code>ExclusiveStartApplicationName</code> in the request body, and
     *             set the value of this to the last application name from
     *             the previous response.
     *         </p>
     *         <p>If you want detailed information about a specific application, use
     *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p>
     *         <p>This operation requires permissions to perform the
     *             <code>kinesisanalytics:ListApplications</code> action.</p>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p>
     *         <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p>
     *         <p>
     *             The application status must be <code>READY</code> for you to start an application. You can
     *             get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
     *         <p>After you start the application, you can stop the application from processing
     *             the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p>
     *         <p>This operation requires permissions to perform the
     *             <code>kinesisanalytics:StartApplication</code> action.</p>
     */
    startApplication(args: StartApplicationCommandInput, options?: __HttpHandlerOptions): Promise<StartApplicationCommandOutput>;
    startApplication(args: StartApplicationCommandInput, cb: (err: any, data?: StartApplicationCommandOutput) => void): void;
    startApplication(args: StartApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartApplicationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Stops the application from processing input data. You can stop
     *             an application only if it is in the running state.
     *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state.
     *             After the application is stopped,
     *             Amazon Kinesis Analytics stops reading data from the input, the
     *             application stops processing data, and there is no output written to the destination. </p>
     *         <p>This operation requires permissions to perform the
     *             <code>kinesisanalytics:StopApplication</code> action.</p>
     */
    stopApplication(args: StopApplicationCommandInput, options?: __HttpHandlerOptions): Promise<StopApplicationCommandOutput>;
    stopApplication(args: StopApplicationCommandInput, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
    stopApplication(args: StopApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
    /**
     * <p>Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
     *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
     *          </note>
     *         <p>Updates an existing Amazon Kinesis Analytics application. Using this API,
     *             you can update application code, input configuration, and
     *             output configuration. </p>
     *         <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code>
     *             each time you update your application. </p>
     *         <p>This operation requires permission for the
     *             <code>kinesisanalytics:UpdateApplication</code> action.</p>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
}
