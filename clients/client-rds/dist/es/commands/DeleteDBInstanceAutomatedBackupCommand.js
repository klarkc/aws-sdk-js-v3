import { __extends } from "tslib";
import { DeleteDBInstanceAutomatedBackupMessage, DeleteDBInstanceAutomatedBackupResult } from "../models/models_0";
import { deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand, serializeAws_queryDeleteDBInstanceAutomatedBackupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBInstanceAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBInstanceAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBInstanceAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBInstanceAutomatedBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceAutomatedBackupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBInstanceAutomatedBackupCommand = /** @class */ (function (_super) {
    __extends(DeleteDBInstanceAutomatedBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBInstanceAutomatedBackupCommand(input) {
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
    DeleteDBInstanceAutomatedBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBInstanceAutomatedBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBInstanceAutomatedBackupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBInstanceAutomatedBackupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBInstanceAutomatedBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBInstanceAutomatedBackupCommand(input, context);
    };
    DeleteDBInstanceAutomatedBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand(output, context);
    };
    return DeleteDBInstanceAutomatedBackupCommand;
}($Command));
export { DeleteDBInstanceAutomatedBackupCommand };
//# sourceMappingURL=DeleteDBInstanceAutomatedBackupCommand.js.map