import { __extends } from "tslib";
import { CreateTransitGatewayPeeringAttachmentRequest, CreateTransitGatewayPeeringAttachmentResult, } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand, serializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a transit gateway peering attachment between the specified transit gateway
 *             (requester) and a peer transit gateway (accepter). The transit gateways must be in
 *             different Regions. The peer transit gateway can be in your account or a different AWS
 *             account. </p>
 *          <p>After you create the peering attachment, the owner of the accepter
 *             transit gateway must accept the attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayPeeringAttachmentCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPeeringAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayPeeringAttachmentCommand(input) {
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
    CreateTransitGatewayPeeringAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayPeeringAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayPeeringAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand(input, context);
    };
    CreateTransitGatewayPeeringAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand(output, context);
    };
    return CreateTransitGatewayPeeringAttachmentCommand;
}($Command));
export { CreateTransitGatewayPeeringAttachmentCommand };
//# sourceMappingURL=CreateTransitGatewayPeeringAttachmentCommand.js.map