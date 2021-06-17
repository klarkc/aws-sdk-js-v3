"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeStoreImageTasksCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the progress of the AMI store tasks. You can describe the store tasks for
 *       specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from
 *       the last 31 days.</p>
 *          <p>For each AMI task, the response indicates if the task is <code>InProgress</code>,
 *         <code>Completed</code>, or <code>Failed</code>. For tasks <code>InProgress</code>, the
 *       response shows the estimated progress as a percentage.</p>
 *          <p>Tasks are listed in reverse chronological order. Currently, only tasks from the past 31
 *       days can be viewed.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *         S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStoreImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStoreImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeStoreImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStoreImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeStoreImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeStoreImageTasksCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "DescribeStoreImageTasksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeStoreImageTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeStoreImageTasksResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeStoreImageTasksCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeStoreImageTasksCommand(output, context);
    }
}
exports.DescribeStoreImageTasksCommand = DescribeStoreImageTasksCommand;
//# sourceMappingURL=DescribeStoreImageTasksCommand.js.map