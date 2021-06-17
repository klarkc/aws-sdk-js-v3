import { __extends } from "tslib";
import { DeleteTapeArchiveInput, DeleteTapeArchiveOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteTapeArchiveCommand, serializeAws_json1_1DeleteTapeArchiveCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteTapeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteTapeArchiveCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTapeArchiveCommand = /** @class */ (function (_super) {
    __extends(DeleteTapeArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTapeArchiveCommand(input) {
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
    DeleteTapeArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteTapeArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTapeArchiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTapeArchiveOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTapeArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTapeArchiveCommand(input, context);
    };
    DeleteTapeArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTapeArchiveCommand(output, context);
    };
    return DeleteTapeArchiveCommand;
}($Command));
export { DeleteTapeArchiveCommand };
//# sourceMappingURL=DeleteTapeArchiveCommand.js.map