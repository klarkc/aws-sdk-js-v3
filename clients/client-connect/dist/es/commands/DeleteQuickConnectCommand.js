import { __extends } from "tslib";
import { DeleteQuickConnectRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteQuickConnectCommand, serializeAws_restJson1DeleteQuickConnectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Deletes a quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteQuickConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQuickConnectCommandInput} for command's `input` shape.
 * @see {@link DeleteQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQuickConnectCommand = /** @class */ (function (_super) {
    __extends(DeleteQuickConnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQuickConnectCommand(input) {
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
    DeleteQuickConnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DeleteQuickConnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQuickConnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQuickConnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteQuickConnectCommand(input, context);
    };
    DeleteQuickConnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteQuickConnectCommand(output, context);
    };
    return DeleteQuickConnectCommand;
}($Command));
export { DeleteQuickConnectCommand };
//# sourceMappingURL=DeleteQuickConnectCommand.js.map