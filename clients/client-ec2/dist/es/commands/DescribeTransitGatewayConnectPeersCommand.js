import { __extends } from "tslib";
import { DescribeTransitGatewayConnectPeersRequest, DescribeTransitGatewayConnectPeersResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewayConnectPeersCommand, serializeAws_ec2DescribeTransitGatewayConnectPeersCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more Connect peers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayConnectPeersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayConnectPeersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayConnectPeersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayConnectPeersCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayConnectPeersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewayConnectPeersCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewayConnectPeersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewayConnectPeersCommand(input) {
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
    DescribeTransitGatewayConnectPeersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewayConnectPeersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewayConnectPeersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewayConnectPeersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewayConnectPeersCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewayConnectPeersCommand(input, context);
    };
    DescribeTransitGatewayConnectPeersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewayConnectPeersCommand(output, context);
    };
    return DescribeTransitGatewayConnectPeersCommand;
}($Command));
export { DescribeTransitGatewayConnectPeersCommand };
//# sourceMappingURL=DescribeTransitGatewayConnectPeersCommand.js.map