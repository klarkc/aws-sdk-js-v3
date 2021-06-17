import { __extends } from "tslib";
import { RestoreDBInstanceToPointInTimeMessage, RestoreDBInstanceToPointInTimeResult } from "../models/models_1";
import { deserializeAws_queryRestoreDBInstanceToPointInTimeCommand, serializeAws_queryRestoreDBInstanceToPointInTimeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p>
 * 	        <p>The target database is created with most of the original configuration, but in a
 *             system-selected Availability Zone, with the default security group, the default subnet
 *             group, and the default DB parameter group. By default, the new DB instance is created as
 *             a single-AZ deployment except when the instance is a SQL Server instance that has an
 *             option group that is associated with mirroring; in this case, the instance becomes a
 *             mirrored deployment and not a single-AZ deployment.</p>
 *          <note>
 *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBInstanceToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBInstanceToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreDBInstanceToPointInTimeCommand = /** @class */ (function (_super) {
    __extends(RestoreDBInstanceToPointInTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreDBInstanceToPointInTimeCommand(input) {
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
    RestoreDBInstanceToPointInTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RestoreDBInstanceToPointInTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreDBInstanceToPointInTimeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreDBInstanceToPointInTimeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreDBInstanceToPointInTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreDBInstanceToPointInTimeCommand(input, context);
    };
    RestoreDBInstanceToPointInTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreDBInstanceToPointInTimeCommand(output, context);
    };
    return RestoreDBInstanceToPointInTimeCommand;
}($Command));
export { RestoreDBInstanceToPointInTimeCommand };
//# sourceMappingURL=RestoreDBInstanceToPointInTimeCommand.js.map