import { __extends } from "tslib";
import { GetLaunchConfigurationRequest, LaunchConfiguration } from "../models/models_0";
import { deserializeAws_restJson1GetLaunchConfigurationCommand, serializeAws_restJson1GetLaunchConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all LaunchConfigurations available, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetLaunchConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetLaunchConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new GetLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLaunchConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetLaunchConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLaunchConfigurationCommand(input) {
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
    GetLaunchConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "GetLaunchConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLaunchConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LaunchConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLaunchConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLaunchConfigurationCommand(input, context);
    };
    GetLaunchConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLaunchConfigurationCommand(output, context);
    };
    return GetLaunchConfigurationCommand;
}($Command));
export { GetLaunchConfigurationCommand };
//# sourceMappingURL=GetLaunchConfigurationCommand.js.map