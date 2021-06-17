import { __extends } from "tslib";
import { PutGroupConfigurationInput, PutGroupConfigurationOutput } from "../models/models_0";
import { deserializeAws_restJson1PutGroupConfigurationCommand, serializeAws_restJson1PutGroupConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a service configuration to the specified group. This occurs asynchronously,
 *             and can take time to complete. You can use <a>GetGroupConfiguration</a> to
 *             check the status of the update.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:PutGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, PutGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, PutGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new PutGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutGroupConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutGroupConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutGroupConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutGroupConfigurationCommand(input) {
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
    PutGroupConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "PutGroupConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutGroupConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutGroupConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutGroupConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutGroupConfigurationCommand(input, context);
    };
    PutGroupConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutGroupConfigurationCommand(output, context);
    };
    return PutGroupConfigurationCommand;
}($Command));
export { PutGroupConfigurationCommand };
//# sourceMappingURL=PutGroupConfigurationCommand.js.map