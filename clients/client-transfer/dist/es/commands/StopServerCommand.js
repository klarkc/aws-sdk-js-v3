import { __extends } from "tslib";
import { StopServerRequest } from "../models/models_0";
import { deserializeAws_json1_1StopServerCommand, serializeAws_json1_1StopServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
 *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
 *       jobs. Information tied to your server, such as server and user properties, are not affected by
 *       stopping your server.</p>
 *
 *          <note>
 *             <p>Stopping the server will not reduce or impact your file transfer protocol endpoint
 *         billing; you must delete the server to stop being billed.</p>
 *          </note>
 *
 *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StopServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StopServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new StopServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopServerCommandInput} for command's `input` shape.
 * @see {@link StopServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopServerCommand = /** @class */ (function (_super) {
    __extends(StopServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopServerCommand(input) {
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
    StopServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "StopServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopServerCommand(input, context);
    };
    StopServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopServerCommand(output, context);
    };
    return StopServerCommand;
}($Command));
export { StopServerCommand };
//# sourceMappingURL=StopServerCommand.js.map