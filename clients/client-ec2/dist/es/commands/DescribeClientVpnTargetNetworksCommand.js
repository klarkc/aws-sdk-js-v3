import { __extends } from "tslib";
import { DescribeClientVpnTargetNetworksRequest, DescribeClientVpnTargetNetworksResult } from "../models/models_2";
import { deserializeAws_ec2DescribeClientVpnTargetNetworksCommand, serializeAws_ec2DescribeClientVpnTargetNetworksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the target networks associated with the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnTargetNetworksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnTargetNetworksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnTargetNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnTargetNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnTargetNetworksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClientVpnTargetNetworksCommand = /** @class */ (function (_super) {
    __extends(DescribeClientVpnTargetNetworksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClientVpnTargetNetworksCommand(input) {
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
    DescribeClientVpnTargetNetworksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeClientVpnTargetNetworksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClientVpnTargetNetworksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClientVpnTargetNetworksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClientVpnTargetNetworksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeClientVpnTargetNetworksCommand(input, context);
    };
    DescribeClientVpnTargetNetworksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeClientVpnTargetNetworksCommand(output, context);
    };
    return DescribeClientVpnTargetNetworksCommand;
}($Command));
export { DescribeClientVpnTargetNetworksCommand };
//# sourceMappingURL=DescribeClientVpnTargetNetworksCommand.js.map