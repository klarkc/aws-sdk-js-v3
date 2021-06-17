import { __extends } from "tslib";
import { GetVPCEConfigurationRequest, GetVPCEConfigurationResult } from "../models/models_0";
import { deserializeAws_json1_1GetVPCEConfigurationCommand, serializeAws_json1_1GetVPCEConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the configuration settings for your Amazon Virtual Private
 *             Cloud (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVPCEConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetVPCEConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVPCEConfigurationCommand(input) {
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
    GetVPCEConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetVPCEConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVPCEConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetVPCEConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVPCEConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetVPCEConfigurationCommand(input, context);
    };
    GetVPCEConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetVPCEConfigurationCommand(output, context);
    };
    return GetVPCEConfigurationCommand;
}($Command));
export { GetVPCEConfigurationCommand };
//# sourceMappingURL=GetVPCEConfigurationCommand.js.map