import { __extends } from "tslib";
import { DeleteTapePoolInput, DeleteTapePoolOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteTapePoolCommand, serializeAws_json1_1DeleteTapePoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes
 *          in the pool and if there are no automatic tape creation policies that reference the custom
 *          tape pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTapePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTapePoolCommand = /** @class */ (function (_super) {
    __extends(DeleteTapePoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTapePoolCommand(input) {
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
    DeleteTapePoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteTapePoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTapePoolInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTapePoolOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTapePoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTapePoolCommand(input, context);
    };
    DeleteTapePoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTapePoolCommand(output, context);
    };
    return DeleteTapePoolCommand;
}($Command));
export { DeleteTapePoolCommand };
//# sourceMappingURL=DeleteTapePoolCommand.js.map