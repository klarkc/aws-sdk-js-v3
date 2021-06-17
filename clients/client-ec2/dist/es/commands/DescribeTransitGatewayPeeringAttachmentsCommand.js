import { __extends } from "tslib";
import { DescribeTransitGatewayPeeringAttachmentsRequest, DescribeTransitGatewayPeeringAttachmentsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand, serializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your transit gateway peering attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayPeeringAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewayPeeringAttachmentsCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewayPeeringAttachmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewayPeeringAttachmentsCommand(input) {
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
    DescribeTransitGatewayPeeringAttachmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewayPeeringAttachmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewayPeeringAttachmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewayPeeringAttachmentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewayPeeringAttachmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand(input, context);
    };
    DescribeTransitGatewayPeeringAttachmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand(output, context);
    };
    return DescribeTransitGatewayPeeringAttachmentsCommand;
}($Command));
export { DescribeTransitGatewayPeeringAttachmentsCommand };
//# sourceMappingURL=DescribeTransitGatewayPeeringAttachmentsCommand.js.map