import { __extends } from "tslib";
import { GetAccountSettingsRequest, GetAccountSettingsResult } from "../models/models_0";
import { deserializeAws_json1_1GetAccountSettingsCommand, serializeAws_json1_1GetAccountSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetAccountSettingsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetAccountSettingsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountSettingsCommand = /** @class */ (function (_super) {
    __extends(GetAccountSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountSettingsCommand(input) {
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
    GetAccountSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetAccountSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccountSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccountSettingsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAccountSettingsCommand(input, context);
    };
    GetAccountSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAccountSettingsCommand(output, context);
    };
    return GetAccountSettingsCommand;
}($Command));
export { GetAccountSettingsCommand };
//# sourceMappingURL=GetAccountSettingsCommand.js.map