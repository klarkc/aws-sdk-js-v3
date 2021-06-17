import { __extends } from "tslib";
import { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/models_5";
import { deserializeAws_ec2UnassignIpv6AddressesCommand, serializeAws_ec2UnassignIpv6AddressesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unassigns one or more IPv6 addresses from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnassignIpv6AddressesCommand = /** @class */ (function (_super) {
    __extends(UnassignIpv6AddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnassignIpv6AddressesCommand(input) {
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
    UnassignIpv6AddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "UnassignIpv6AddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnassignIpv6AddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnassignIpv6AddressesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnassignIpv6AddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2UnassignIpv6AddressesCommand(input, context);
    };
    UnassignIpv6AddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2UnassignIpv6AddressesCommand(output, context);
    };
    return UnassignIpv6AddressesCommand;
}($Command));
export { UnassignIpv6AddressesCommand };
//# sourceMappingURL=UnassignIpv6AddressesCommand.js.map