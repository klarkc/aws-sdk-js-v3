import { __extends } from "tslib";
import { GetGroupConfigurationInput, GetGroupConfigurationOutput } from "../models/models_0";
import { deserializeAws_restJson1GetGroupConfigurationCommand, serializeAws_restJson1GetGroupConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the service configuration associated with the specified resource group. For
 *             details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource
 *                 groups</a>.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:GetGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new GetGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGroupConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetGroupConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupConfigurationCommand(input) {
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
    GetGroupConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "GetGroupConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGroupConfigurationCommand(input, context);
    };
    GetGroupConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGroupConfigurationCommand(output, context);
    };
    return GetGroupConfigurationCommand;
}($Command));
export { GetGroupConfigurationCommand };
//# sourceMappingURL=GetGroupConfigurationCommand.js.map