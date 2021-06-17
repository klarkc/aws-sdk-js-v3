import { __extends } from "tslib";
import { CreateVpcEndpointConnectionNotificationRequest, CreateVpcEndpointConnectionNotificationResult, } from "../models/models_1";
import { deserializeAws_ec2CreateVpcEndpointConnectionNotificationCommand, serializeAws_ec2CreateVpcEndpointConnectionNotificationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateVpcEndpointConnectionNotificationCommand = /** @class */ (function (_super) {
    __extends(CreateVpcEndpointConnectionNotificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcEndpointConnectionNotificationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateVpcEndpointConnectionNotificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpcEndpointConnectionNotificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcEndpointConnectionNotificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcEndpointConnectionNotificationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcEndpointConnectionNotificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpcEndpointConnectionNotificationCommand(input, context);
    };
    CreateVpcEndpointConnectionNotificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpcEndpointConnectionNotificationCommand(output, context);
    };
    return CreateVpcEndpointConnectionNotificationCommand;
}($Command));
export { CreateVpcEndpointConnectionNotificationCommand };
//# sourceMappingURL=CreateVpcEndpointConnectionNotificationCommand.js.map