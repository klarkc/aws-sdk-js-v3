import { __extends } from "tslib";
import { RejectTransitGatewayVpcAttachmentRequest, RejectTransitGatewayVpcAttachmentResult } from "../models/models_4";
import { deserializeAws_ec2RejectTransitGatewayVpcAttachmentCommand, serializeAws_ec2RejectTransitGatewayVpcAttachmentCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects a request to attach a VPC to a transit gateway.</p>
 *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
 *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
 *          Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectTransitGatewayVpcAttachmentCommand = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayVpcAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectTransitGatewayVpcAttachmentCommand(input) {
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
    RejectTransitGatewayVpcAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RejectTransitGatewayVpcAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectTransitGatewayVpcAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RejectTransitGatewayVpcAttachmentCommand(input, context);
    };
    RejectTransitGatewayVpcAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RejectTransitGatewayVpcAttachmentCommand(output, context);
    };
    return RejectTransitGatewayVpcAttachmentCommand;
}($Command));
export { RejectTransitGatewayVpcAttachmentCommand };
//# sourceMappingURL=RejectTransitGatewayVpcAttachmentCommand.js.map