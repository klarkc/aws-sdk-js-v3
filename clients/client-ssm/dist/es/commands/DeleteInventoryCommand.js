import { __extends } from "tslib";
import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteInventoryCommand, serializeAws_json1_1DeleteInventoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInventoryCommandInput} for command's `input` shape.
 * @see {@link DeleteInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInventoryCommand = /** @class */ (function (_super) {
    __extends(DeleteInventoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInventoryCommand(input) {
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
    DeleteInventoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteInventoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInventoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInventoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInventoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteInventoryCommand(input, context);
    };
    DeleteInventoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteInventoryCommand(output, context);
    };
    return DeleteInventoryCommand;
}($Command));
export { DeleteInventoryCommand };
//# sourceMappingURL=DeleteInventoryCommand.js.map