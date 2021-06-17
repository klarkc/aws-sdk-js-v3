import { __extends } from "tslib";
import { UpdatePartnerAccountRequest, UpdatePartnerAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePartnerAccountCommand, serializeAws_restJson1UpdatePartnerAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates properties of a partner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdatePartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdatePartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdatePartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartnerAccountCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePartnerAccountCommand = /** @class */ (function (_super) {
    __extends(UpdatePartnerAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePartnerAccountCommand(input) {
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
    UpdatePartnerAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "UpdatePartnerAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePartnerAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePartnerAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePartnerAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePartnerAccountCommand(input, context);
    };
    UpdatePartnerAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePartnerAccountCommand(output, context);
    };
    return UpdatePartnerAccountCommand;
}($Command));
export { UpdatePartnerAccountCommand };
//# sourceMappingURL=UpdatePartnerAccountCommand.js.map