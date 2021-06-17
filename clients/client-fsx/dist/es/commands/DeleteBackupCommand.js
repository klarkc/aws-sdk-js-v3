import { __extends } from "tslib";
import { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteBackupCommand, serializeAws_json1_1DeleteBackupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon FSx backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.</p>
 *
 *         <p>The <code>DeleteBackup</code> call returns instantly. The backup will not show up
 *             in later <code>DescribeBackups</code> calls.</p>
 *
 *         <important>
 *             <p>The data in a deleted backup is also deleted and can't be recovered by any
 *                 means.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackupCommand = /** @class */ (function (_super) {
    __extends(DeleteBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBackupCommand(input) {
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
    DeleteBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "DeleteBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBackupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBackupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteBackupCommand(input, context);
    };
    DeleteBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteBackupCommand(output, context);
    };
    return DeleteBackupCommand;
}($Command));
export { DeleteBackupCommand };
//# sourceMappingURL=DeleteBackupCommand.js.map