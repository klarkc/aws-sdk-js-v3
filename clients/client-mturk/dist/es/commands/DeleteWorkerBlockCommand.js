import { __extends } from "tslib";
import { DeleteWorkerBlockRequest, DeleteWorkerBlockResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteWorkerBlockCommand, serializeAws_json1_1DeleteWorkerBlockCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteWorkerBlockCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteWorkerBlockCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteWorkerBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkerBlockCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerBlockCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorkerBlockCommand = /** @class */ (function (_super) {
    __extends(DeleteWorkerBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorkerBlockCommand(input) {
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
    DeleteWorkerBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "DeleteWorkerBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorkerBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWorkerBlockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorkerBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWorkerBlockCommand(input, context);
    };
    DeleteWorkerBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWorkerBlockCommand(output, context);
    };
    return DeleteWorkerBlockCommand;
}($Command));
export { DeleteWorkerBlockCommand };
//# sourceMappingURL=DeleteWorkerBlockCommand.js.map