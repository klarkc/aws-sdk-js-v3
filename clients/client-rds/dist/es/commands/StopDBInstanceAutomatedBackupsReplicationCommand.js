import { __extends } from "tslib";
import { StopDBInstanceAutomatedBackupsReplicationMessage, StopDBInstanceAutomatedBackupsReplicationResult, } from "../models/models_1";
import { deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand, serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops automated backup replication for a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another AWS Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDBInstanceAutomatedBackupsReplicationCommand = /** @class */ (function (_super) {
    __extends(StopDBInstanceAutomatedBackupsReplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopDBInstanceAutomatedBackupsReplicationCommand(input) {
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
    StopDBInstanceAutomatedBackupsReplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StopDBInstanceAutomatedBackupsReplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StopDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopDBInstanceAutomatedBackupsReplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand(input, context);
    };
    StopDBInstanceAutomatedBackupsReplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand(output, context);
    };
    return StopDBInstanceAutomatedBackupsReplicationCommand;
}($Command));
export { StopDBInstanceAutomatedBackupsReplicationCommand };
//# sourceMappingURL=StopDBInstanceAutomatedBackupsReplicationCommand.js.map