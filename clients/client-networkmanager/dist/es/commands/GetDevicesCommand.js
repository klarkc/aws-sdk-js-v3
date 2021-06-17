import { __extends } from "tslib";
import { GetDevicesRequest, GetDevicesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDevicesCommand, serializeAws_restJson1GetDevicesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more of your devices in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetDevicesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetDevicesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicesCommandInput} for command's `input` shape.
 * @see {@link GetDevicesCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevicesCommand = /** @class */ (function (_super) {
    __extends(GetDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevicesCommand(input) {
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
    GetDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDevicesCommand(input, context);
    };
    GetDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDevicesCommand(output, context);
    };
    return GetDevicesCommand;
}($Command));
export { GetDevicesCommand };
//# sourceMappingURL=GetDevicesCommand.js.map