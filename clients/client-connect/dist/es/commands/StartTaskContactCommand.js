import { __extends } from "tslib";
import { StartTaskContactRequest, StartTaskContactResponse } from "../models/models_0";
import { deserializeAws_restJson1StartTaskContactCommand, serializeAws_restJson1StartTaskContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a contact flow to start a new task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartTaskContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartTaskContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartTaskContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskContactCommandInput} for command's `input` shape.
 * @see {@link StartTaskContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartTaskContactCommand = /** @class */ (function (_super) {
    __extends(StartTaskContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartTaskContactCommand(input) {
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
    StartTaskContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "StartTaskContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartTaskContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartTaskContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartTaskContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartTaskContactCommand(input, context);
    };
    StartTaskContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartTaskContactCommand(output, context);
    };
    return StartTaskContactCommand;
}($Command));
export { StartTaskContactCommand };
//# sourceMappingURL=StartTaskContactCommand.js.map