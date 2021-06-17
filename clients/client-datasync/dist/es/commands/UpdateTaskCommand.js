import { __extends } from "tslib";
import { UpdateTaskRequest, UpdateTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateTaskCommand, serializeAws_json1_1UpdateTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the metadata associated with a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTaskCommand = /** @class */ (function (_super) {
    __extends(UpdateTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTaskCommand(input) {
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
    UpdateTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "UpdateTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTaskCommand(input, context);
    };
    UpdateTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTaskCommand(output, context);
    };
    return UpdateTaskCommand;
}($Command));
export { UpdateTaskCommand };
//# sourceMappingURL=UpdateTaskCommand.js.map