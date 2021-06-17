import { __extends } from "tslib";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_0";
import { deserializeAws_queryRestoreDBClusterToPointInTimeCommand, serializeAws_queryRestoreDBClusterToPointInTimeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores a cluster to an arbitrary point in time. Users can restore to any point in
 *             time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target cluster is created from the
 *             source cluster with the same configuration as the original cluster, except that
 *             the new cluster is created with the default security group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "DocDBClient";
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