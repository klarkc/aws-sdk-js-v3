import { __extends } from "tslib";
import { DescribeTransitGatewayConnectsRequest, DescribeTransitGatewayConnectsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewayConnectsCommand, serializeAws_ec2DescribeTransitGatewayConnectsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more Connect attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayConnectsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayConnectsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayConnectsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayConnectsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewayConnectsCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewayConnectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewayConnectsCommand(input) {
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
    DescribeTransitGatewayConnectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewayConnectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewayConnectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewayConnectsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewayConnectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewayConnectsCommand(input, context);
    };
    DescribeTransitGatewayConnectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewayConnectsCommand(output, context);
    };
    return DescribeTransitGatewayConnectsCommand;
}($Command));
export { DescribeTransitGatewayConnectsCommand };
//# sourceMappingURL=DescribeTransitGatewayConnectsCommand.js.map