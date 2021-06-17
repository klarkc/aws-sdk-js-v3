import { __extends } from "tslib";
import { DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteQueuedSavingsPlanCommand, serializeAws_restJson1DeleteQueuedSavingsPlanCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the queued purchase for the specified Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DeleteQueuedSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DeleteQueuedSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DeleteQueuedSavingsPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueuedSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQueuedSavingsPlanCommand = /** @class */ (function (_super) {
    __extends(DeleteQueuedSavingsPlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQueuedSavingsPlanCommand(input) {
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
    DeleteQueuedSavingsPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SavingsplansClient";
        var commandName = "DeleteQueuedSavingsPlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQueuedSavingsPlanRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteQueuedSavingsPlanResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQueuedSavingsPlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteQueuedSavingsPlanCommand(input, context);
    };
    DeleteQueuedSavingsPlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteQueuedSavingsPlanCommand(output, context);
    };
    return DeleteQueuedSavingsPlanCommand;
}($Command));
export { DeleteQueuedSavingsPlanCommand };
//# sourceMappingURL=DeleteQueuedSavingsPlanCommand.js.map