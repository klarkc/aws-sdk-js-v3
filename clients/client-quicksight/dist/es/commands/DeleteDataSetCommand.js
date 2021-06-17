import { __extends } from "tslib";
import { DeleteDataSetRequest, DeleteDataSetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDataSetCommand, serializeAws_restJson1DeleteDataSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSetCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDataSetCommand = /** @class */ (function (_super) {
    __extends(DeleteDataSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDataSetCommand(input) {
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
    DeleteDataSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteDataSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDataSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDataSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDataSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDataSetCommand(input, context);
    };
    DeleteDataSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDataSetCommand(output, context);
    };
    return DeleteDataSetCommand;
}($Command));
export { DeleteDataSetCommand };
//# sourceMappingURL=DeleteDataSetCommand.js.map