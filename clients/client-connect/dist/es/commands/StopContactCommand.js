import { __extends } from "tslib";
import { StopContactRequest, StopContactResponse } from "../models/models_0";
import { deserializeAws_restJson1StopContactCommand, serializeAws_restJson1StopContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Ends the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StopContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContactCommandInput} for command's `input` shape.
 * @see {@link StopContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopContactCommand = /** @class */ (function (_super) {
    __extends(StopContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopContactCommand(input) {
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
    StopContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "StopContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopContactCommand(input, context);
    };
    StopContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopContactCommand(output, context);
    };
    return StopContactCommand;
}($Command));
export { StopContactCommand };
//# sourceMappingURL=StopContactCommand.js.map