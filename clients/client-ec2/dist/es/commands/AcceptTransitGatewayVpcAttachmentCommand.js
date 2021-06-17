import { __extends } from "tslib";
import { AcceptTransitGatewayVpcAttachmentRequest, AcceptTransitGatewayVpcAttachmentResult } from "../models/models_0";
import { deserializeAws_ec2AcceptTransitGatewayVpcAttachmentCommand, serializeAws_ec2AcceptTransitGatewayVpcAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a request to attach a VPC to a transit gateway.</p>
 *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
 *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
 *          Use <a>RejectTransitGatewayVpcAttachment</a> to reject a VPC attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptTransitGatewayVpcAttachmentCommand = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayVpcAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptTransitGatewayVpcAttachmentCommand(input) {
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
    AcceptTransitGatewayVpcAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AcceptTransitGatewayVpcAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptTransitGatewayVpcAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AcceptTransitGatewayVpcAttachmentCommand(input, context);
    };
    AcceptTransitGatewayVpcAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AcceptTransitGatewayVpcAttachmentCommand(output, context);
    };
    return AcceptTransitGatewayVpcAttachmentCommand;
}($Command));
export { AcceptTransitGatewayVpcAttachmentCommand };
//# sourceMappingURL=AcceptTransitGatewayVpcAttachmentCommand.js.map