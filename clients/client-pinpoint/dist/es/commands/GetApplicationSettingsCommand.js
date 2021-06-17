import { __extends } from "tslib";
import { GetApplicationSettingsRequest, GetApplicationSettingsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApplicationSettingsCommand, serializeAws_restJson1GetApplicationSettingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link GetApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApplicationSettingsCommand = /** @class */ (function (_super) {
    __extends(GetApplicationSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApplicationSettingsCommand(input) {
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
    GetApplicationSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetApplicationSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApplicationSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetApplicationSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApplicationSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetApplicationSettingsCommand(input, context);
    };
    GetApplicationSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetApplicationSettingsCommand(output, context);
    };
    return GetApplicationSettingsCommand;
}($Command));
export { GetApplicationSettingsCommand };
//# sourceMappingURL=GetApplicationSettingsCommand.js.map