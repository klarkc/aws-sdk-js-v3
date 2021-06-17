import { __extends } from "tslib";
import { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteBackupCommand, serializeAws_json1_1DeleteBackupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous.
 *     </p>
 *          <p>
 *       An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress.
 *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
 *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DeleteBackupCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DeleteBackupCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "OpsWorksCMClient";
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