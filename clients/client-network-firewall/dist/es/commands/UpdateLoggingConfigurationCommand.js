import { __extends } from "tslib";
import { UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateLoggingConfigurationCommand, serializeAws_json1_0UpdateLoggingConfigurationCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the logging configuration for the specified firewall. </p>
 *          <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide
 *          the modified object to this update call. You must change the logging configuration one
 *             <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p>
 *          <p>You can perform only one of the following actions in any call to
 *             <code>UpdateLoggingConfiguration</code>: </p>
 *          <ul>
 *             <li>
 *                <p>Create a new log destination object by adding a single
 *                   <code>LogDestinationConfig</code> array element to
 *                   <code>LogDestinationConfigs</code>.</p>
 *             </li>
 *             <li>
 *                <p>Delete a log destination object by removing a single
 *                   <code>LogDestinationConfig</code> array element from
 *                   <code>LogDestinationConfigs</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change the <code>LogDestination</code> setting in a single
 *                   <code>LogDestinationConfig</code> array element.</p>
 *             </li>
 *          </ul>
 *          <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a
 *             <code>LogDestinationConfig</code>. To change these settings, delete the existing
 *             <code>LogDestinationConfig</code> object and create a new one, using two separate calls
 *          to this update operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLoggingConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateLoggingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLoggingConfigurationCommand(input) {
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
    UpdateLoggingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "UpdateLoggingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLoggingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLoggingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLoggingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateLoggingConfigurationCommand(input, context);
    };
    UpdateLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateLoggingConfigurationCommand(output, context);
    };
    return UpdateLoggingConfigurationCommand;
}($Command));
export { UpdateLoggingConfigurationCommand };
//# sourceMappingURL=UpdateLoggingConfigurationCommand.js.map