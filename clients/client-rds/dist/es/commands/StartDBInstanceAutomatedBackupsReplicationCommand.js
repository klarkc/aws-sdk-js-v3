import { __extends } from "tslib";
import { StartDBInstanceAutomatedBackupsReplicationMessage, StartDBInstanceAutomatedBackupsReplicationResult, } from "../models/models_1";
import { deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand, serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand, } from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables replication of automated backups to a different AWS Region.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another AWS Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDBInstanceAutomatedBackupsReplicationCommand = /** @class */ (function (_super) {
    __extends(StartDBInstanceAutomatedBackupsReplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDBInstanceAutomatedBackupsReplicationCommand(input) {
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
    StartDBInstanceAutomatedBackupsReplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StartDBInstanceAutomatedBackupsReplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDBInstanceAutomatedBackupsReplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(input, context);
    };
    StartDBInstanceAutomatedBackupsReplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(output, context);
    };
    return StartDBInstanceAutomatedBackupsReplicationCommand;
}($Command));
export { StartDBInstanceAutomatedBackupsReplicationCommand };
//# sourceMappingURL=StartDBInstanceAutomatedBackupsReplicationCommand.js.map