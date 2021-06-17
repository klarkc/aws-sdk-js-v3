"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeReplaceRootVolumeTasksCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes a root volume replacement task. For more information, see
 *       <a href="https://docs.aws.amazon.com/">Replace a root volume</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReplaceRootVolumeTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReplaceRootVolumeTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReplaceRootVolumeTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplaceRootVolumeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplaceRootVolumeTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeReplaceRootVolumeTasksCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeReplaceRootVolumeTasksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeReplaceRootVolumeTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeReplaceRootVolumeTasksResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeReplaceRootVolumeTasksCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeReplaceRootVolumeTasksCommand(output, context);
    }
}
exports.DescribeReplaceRootVolumeTasksCommand = DescribeReplaceRootVolumeTasksCommand;
//# sourceMappingURL=DescribeReplaceRootVolumeTasksCommand.js.map