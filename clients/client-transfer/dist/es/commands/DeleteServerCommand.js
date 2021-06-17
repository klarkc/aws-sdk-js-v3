import { __extends } from "tslib";
import { DeleteServerRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteServerCommand, serializeAws_json1_1DeleteServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the file transfer protocol-enabled server that you specify.</p>
 *
 *          <p>No response returns from this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServerCommand = /** @class */ (function (_super) {
    __extends(DeleteServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServerCommand(input) {
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
    DeleteServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DeleteServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteServerCommand(input, context);
    };
    DeleteServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteServerCommand(output, context);
    };
    return DeleteServerCommand;
}($Command));
export { DeleteServerCommand };
//# sourceMappingURL=DeleteServerCommand.js.map