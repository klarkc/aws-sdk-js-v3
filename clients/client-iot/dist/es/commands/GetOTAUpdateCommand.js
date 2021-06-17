import { __extends } from "tslib";
import { GetOTAUpdateRequest, GetOTAUpdateResponse } from "../models/models_1";
import { deserializeAws_restJson1GetOTAUpdateCommand, serializeAws_restJson1GetOTAUpdateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an OTA update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link GetOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOTAUpdateCommand = /** @class */ (function (_super) {
    __extends(GetOTAUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOTAUpdateCommand(input) {
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
    GetOTAUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetOTAUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOTAUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOTAUpdateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOTAUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetOTAUpdateCommand(input, context);
    };
    GetOTAUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetOTAUpdateCommand(output, context);
    };
    return GetOTAUpdateCommand;
}($Command));
export { GetOTAUpdateCommand };
//# sourceMappingURL=GetOTAUpdateCommand.js.map