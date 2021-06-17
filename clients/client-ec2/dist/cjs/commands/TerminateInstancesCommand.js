"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateInstancesCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an
 *             instance more than once, each call succeeds. </p>
 *         <p>If you specify multiple instances and the request fails (for example, because of a
 *             single incorrect instance ID), none of the instances are terminated.</p>
 *         <p>Terminated instances remain visible after termination (for approximately one
 *             hour).</p>
 *         <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance
 *             launched. Volumes attached after instance launch continue running.</p>
 *         <p>You can stop, start, and terminate EBS-backed instances. You can only terminate
 *             instance store-backed instances. What happens to an instance differs if you stop it or
 *             terminate it. For example, when you stop an instance, the root device and any other
 *             devices attached to the instance persist. When you terminate an instance, any attached
 *             EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set
 *             to <code>true</code> are automatically deleted. For more information about the
 *             differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *         <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new TerminateInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TerminateInstancesCommand extends smithy_client_1.Command {
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
        const commandName = "TerminateInstancesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.TerminateInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.TerminateInstancesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2TerminateInstancesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2TerminateInstancesCommand(output, context);
    }
}
exports.TerminateInstancesCommand = TerminateInstancesCommand;
//# sourceMappingURL=TerminateInstancesCommand.js.map