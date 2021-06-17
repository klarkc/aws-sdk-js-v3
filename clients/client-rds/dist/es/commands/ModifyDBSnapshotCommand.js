import { __extends } from "tslib";
import { ModifyDBSnapshotMessage, ModifyDBSnapshotResult } from "../models/models_1";
import { deserializeAws_queryModifyDBSnapshotCommand, serializeAws_queryModifyDBSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted
 *             or unencrypted, but not shared or public.
 *
 *         </p>
 *
 *          <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBSnapshotCommand = /** @class */ (function (_super) {
    __extends(ModifyDBSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBSnapshotCommand(input) {
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
    ModifyDBSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyDBSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBSnapshotCommand(input, context);
    };
    ModifyDBSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBSnapshotCommand(output, context);
    };
    return ModifyDBSnapshotCommand;
}($Command));
export { ModifyDBSnapshotCommand };
//# sourceMappingURL=ModifyDBSnapshotCommand.js.map