import { __extends } from "tslib";
import { DescribeClientVpnEndpointsRequest, DescribeClientVpnEndpointsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeClientVpnEndpointsCommand, serializeAws_ec2DescribeClientVpnEndpointsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more Client VPN endpoints in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClientVpnEndpointsCommand = /** @class */ (function (_super) {
    __extends(DescribeClientVpnEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClientVpnEndpointsCommand(input) {
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
    DescribeClientVpnEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeClientVpnEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClientVpnEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClientVpnEndpointsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClientVpnEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeClientVpnEndpointsCommand(input, context);
    };
    DescribeClientVpnEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeClientVpnEndpointsCommand(output, context);
    };
    return DescribeClientVpnEndpointsCommand;
}($Command));
export { DescribeClientVpnEndpointsCommand };
//# sourceMappingURL=DescribeClientVpnEndpointsCommand.js.map