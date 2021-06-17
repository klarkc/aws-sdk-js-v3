import { __extends } from "tslib";
import { GetPartnerAccountRequest, GetPartnerAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPartnerAccountCommand, serializeAws_restJson1GetPartnerAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link GetPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPartnerAccountCommand = /** @class */ (function (_super) {
    __extends(GetPartnerAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPartnerAccountCommand(input) {
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
    GetPartnerAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetPartnerAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartnerAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartnerAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartnerAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPartnerAccountCommand(input, context);
    };
    GetPartnerAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPartnerAccountCommand(output, context);
    };
    return GetPartnerAccountCommand;
}($Command));
export { GetPartnerAccountCommand };
//# sourceMappingURL=GetPartnerAccountCommand.js.map