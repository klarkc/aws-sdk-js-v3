import { __extends } from "tslib";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourceDataSyncCommand, serializeAws_json1_1DeleteResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to
 *    data on managed instances are no longer synced to or from the target. Deleting a sync
 *    configuration does not delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourceDataSyncCommand = /** @class */ (function (_super) {
    __extends(DeleteResourceDataSyncCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourceDataSyncCommand(input) {
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
    DeleteResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourceDataSyncCommand(input, context);
    };
    DeleteResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourceDataSyncCommand(output, context);
    };
    return DeleteResourceDataSyncCommand;
}($Command));
export { DeleteResourceDataSyncCommand };
//# sourceMappingURL=DeleteResourceDataSyncCommand.js.map