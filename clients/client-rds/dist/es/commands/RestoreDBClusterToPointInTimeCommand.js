import { __extends } from "tslib";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_1";
import { deserializeAws_queryRestoreDBClusterToPointInTimeCommand, serializeAws_queryRestoreDBClusterToPointInTimeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point
 *             in time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the
 *             source DB cluster with the same configuration as the original DB cluster, except that
 *             the new DB cluster is created with the default DB security group. </p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB
 *                 cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                 instances for the restored DB cluster, specifying the identifier of the restored DB
 *                 cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                 the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB
 *                 cluster is available.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreDBClusterToPointInTimeCommand = /** @class */ (function (_super) {
    __extends(RestoreDBClusterToPointInTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreDBClusterToPointInTimeCommand(input) {
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
    RestoreDBClusterToPointInTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RestoreDBClusterToPointInTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreDBClusterToPointInTimeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreDBClusterToPointInTimeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreDBClusterToPointInTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreDBClusterToPointInTimeCommand(input, context);
    };
    RestoreDBClusterToPointInTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreDBClusterToPointInTimeCommand(output, context);
    };
    return RestoreDBClusterToPointInTimeCommand;
}($Command));
export { RestoreDBClusterToPointInTimeCommand };
//# sourceMappingURL=RestoreDBClusterToPointInTimeCommand.js.map