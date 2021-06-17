import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionMessage, CreateApplicationVersionMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateApplicationVersionCommandInput extends CreateApplicationVersionMessage {
}
export interface CreateApplicationVersionCommandOutput extends ApplicationVersionDescriptionMessage, __MetadataBearer {
}
/**
 * <p>Creates an application version for the specified application. You can create an
 *       application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the
 *       output of an AWS CodeBuild build as follows:</p>
 *          <p>Specify a commit in an AWS CodeCommit repository with
 *         <code>SourceBuildInformation</code>.</p>
 *          <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and
 *         <code>BuildConfiguration</code>.</p>
 *          <p>Specify a source bundle in S3 with <code>SourceBundle</code>
 *          </p>
 *          <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the
 *       default sample application.</p>
 *          <note>
 *             <p>After you create an application version with a specified Amazon S3 bucket and key
 *         location, you can't change that Amazon S3 location. If you change the Amazon S3 location,
 *         you receive an exception when you attempt to launch an environment from the application
 *         version.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateApplicationVersionCommand extends $Command<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateApplicationVersionCommandInput;
    constructor(input: CreateApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
