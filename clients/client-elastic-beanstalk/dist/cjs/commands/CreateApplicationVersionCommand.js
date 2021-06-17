"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApplicationVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateApplicationVersionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ElasticBeanstalkClient";
        const commandName = "CreateApplicationVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateApplicationVersionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ApplicationVersionDescriptionMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateApplicationVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateApplicationVersionCommand(output, context);
    }
}
exports.CreateApplicationVersionCommand = CreateApplicationVersionCommand;
//# sourceMappingURL=CreateApplicationVersionCommand.js.map