import { __extends } from "tslib";
import { DescribeLoggingConfigurationRequest, DescribeLoggingConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeLoggingConfigurationCommand, serializeAws_json1_0DescribeLoggingConfigurationCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the logging configuration for the specified firewall. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoggingConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeLoggingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoggingConfigurationCommand(input) {
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
    DescribeLoggingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DescribeLoggingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoggingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLoggingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoggingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeLoggingConfigurationCommand(input, context);
    };
    DescribeLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeLoggingConfigurationCommand(output, context);
    };
    return DescribeLoggingConfigurationCommand;
}($Command));
export { DescribeLoggingConfigurationCommand };
//# sourceMappingURL=DescribeLoggingConfigurationCommand.js.map