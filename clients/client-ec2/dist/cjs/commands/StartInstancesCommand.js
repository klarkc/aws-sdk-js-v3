"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartInstancesCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p>
 *         <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and
 *             started. When an instance is stopped, the compute resources are released and you are not
 *             billed for instance usage. However, your root partition Amazon EBS volume remains and
 *             continues to persist your data, and you are charged for Amazon EBS volume usage. You can
 *             restart your instance at any time. Every time you start your Windows instance, Amazon
 *             EC2 charges you for a full instance hour. If you stop and restart your Windows instance,
 *             a new instance hour begins and Amazon EC2 charges you for another full instance hour
 *             even if you are still within the same 60-minute period when it was stopped. Every time
 *             you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance
 *             usage, and thereafter charges per second for instance usage.</p>
 *         <p>Before stopping an instance, make sure it is in a state from which it can be
 *             restarted. Stopping an instance does not preserve data stored in RAM.</p>
 *         <p>Performing this operation on an instance that uses an instance store as its root
 *             device returns an error.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stopping instances</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StartInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartInstancesCommandInput} for command's `input` shape.
 * @see {@link StartInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartInstancesCommand extends smithy_client_1.Command {
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
        const commandName = "StartInstancesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.StartInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.StartInstancesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2StartInstancesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2StartInstancesCommand(output, context);
    }
}
exports.StartInstancesCommand = StartInstancesCommand;
//# sourceMappingURL=StartInstancesCommand.js.map