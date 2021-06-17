"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVpcEndpointConnectionNotificationCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint
 *             service. A connection notification notifies you of specific endpoint events. You must
 *             create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in
 *             the <i>Amazon Simple Notification Service Developer Guide</i>.</p>
 *         <p>You can create a connection notification for interface endpoints only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateVpcEndpointConnectionNotificationCommand extends smithy_client_1.Command {
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
        const commandName = "CreateVpcEndpointConnectionNotificationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateVpcEndpointConnectionNotificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateVpcEndpointConnectionNotificationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateVpcEndpointConnectionNotificationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateVpcEndpointConnectionNotificationCommand(output, context);
    }
}
exports.CreateVpcEndpointConnectionNotificationCommand = CreateVpcEndpointConnectionNotificationCommand;
//# sourceMappingURL=CreateVpcEndpointConnectionNotificationCommand.js.map