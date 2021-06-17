"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopInstancesCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Stops an Amazon EBS-backed instance.</p>
 *         <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for
 *                 hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *         <p>We don't charge usage for a stopped instance, or data transfer fees; however, your
 *             root partition Amazon EBS volume remains and continues to persist your data, and you are
 *             charged for Amazon EBS volume usage. Every time you start your Windows instance, Amazon
 *             EC2 charges you for a full instance hour. If you stop and restart your Windows instance,
 *             a new instance hour begins and Amazon EC2 charges you for another full instance hour
 *             even if you are still within the same 60-minute period when it was stopped. Every time
 *             you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance
 *             usage, and thereafter charges per second for instance usage.</p>
 *         <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop
 *             action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate
 *             Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *         <p>When you stop or hibernate an instance, we shut it down. You can restart your instance
 *             at any time. Before stopping or hibernating an instance, make sure it is in a state from
 *             which it can be restarted. Stopping an instance does not preserve data stored in RAM,
 *             but hibernating an instance does preserve data stored in RAM. If an instance cannot
 *             hibernate successfully, a normal shutdown occurs.</p>
 *         <p>Stopping and hibernating an instance is different to rebooting or terminating it. For
 *             example, when you stop or hibernate an instance, the root device and any other devices
 *             attached to the instance persist. When you terminate an instance, the root device and
 *             any other devices attached during the instance launch are automatically deleted. For
 *             more information about the differences between rebooting, stopping, hibernating, and
 *             terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *         <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If
 *             your instance appears stuck in the stopping state after a period of time, there may be
 *             an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshooting
 *                 stopping your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StopInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StopInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopInstancesCommandInput} for command's `input` shape.
 * @see {@link StopInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StopInstancesCommand extends smithy_client_1.Command {
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
        const commandName = "StopInstancesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.StopInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.StopInstancesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2StopInstancesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2StopInstancesCommand(output, context);
    }
}
exports.StopInstancesCommand = StopInstancesCommand;
//# sourceMappingURL=StopInstancesCommand.js.map