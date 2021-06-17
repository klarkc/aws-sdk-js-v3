import { __extends } from "tslib";
import { DeleteTaskRequest, DeleteTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteTaskCommand, serializeAws_json1_1DeleteTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DeleteTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTaskCommand = /** @class */ (function (_super) {
    __extends(DeleteTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTaskCommand(input) {
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
    DeleteTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DeleteTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTaskCommand(input, context);
    };
    DeleteTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTaskCommand(output, context);
    };
    return DeleteTaskCommand;
}($Command));
export { DeleteTaskCommand };
//# sourceMappingURL=DeleteTaskCommand.js.map