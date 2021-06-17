import { __extends } from "tslib";
import { StartServerRequest } from "../models/models_0";
import { deserializeAws_json1_1StartServerCommand, serializeAws_json1_1StartServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to
 *         <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An
 *         <code>ONLINE</code> server can accept and process file transfer jobs.</p>
 *
 *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new StartServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartServerCommandInput} for command's `input` shape.
 * @see {@link StartServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartServerCommand = /** @class */ (function (_super) {
    __extends(StartServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartServerCommand(input) {
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
    StartServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "StartServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartServerCommand(input, context);
    };
    StartServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartServerCommand(output, context);
    };
    return StartServerCommand;
}($Command));
export { StartServerCommand };
//# sourceMappingURL=StartServerCommand.js.map