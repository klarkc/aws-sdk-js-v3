import { __extends } from "tslib";
import { DeleteTapeInput, DeleteTapeOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteTapeCommand, serializeAws_json1_1DeleteTapeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified virtual tape. This operation is only supported in the tape gateway
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteTapeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTapeCommandInput} for command's `input` shape.
 * @see {@link DeleteTapeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTapeCommand = /** @class */ (function (_super) {
    __extends(DeleteTapeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTapeCommand(input) {
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
    DeleteTapeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteTapeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTapeInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTapeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTapeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTapeCommand(input, context);
    };
    DeleteTapeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTapeCommand(output, context);
    };
    return DeleteTapeCommand;
}($Command));
export { DeleteTapeCommand };
//# sourceMappingURL=DeleteTapeCommand.js.map