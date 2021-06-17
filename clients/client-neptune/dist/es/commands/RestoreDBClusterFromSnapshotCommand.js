import { __extends } from "tslib";
import { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_0";
import { deserializeAws_queryRestoreDBClusterFromSnapshotCommand, serializeAws_queryRestoreDBClusterFromSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
 *          <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
 *       snapshot with a default configuration and default security group.</p>
 *          <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
 *       cluster restore point with the same configuration as the original source DB cluster, except
 *       that the new DB cluster is created with the default security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreDBClusterFromSnapshotCommand = /** @class */ (function (_super) {
    __extends(RestoreDBClusterFromSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreDBClusterFromSnapshotCommand(input) {
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
    RestoreDBClusterFromSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "RestoreDBClusterFromSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreDBClusterFromSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreDBClusterFromSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreDBClusterFromSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreDBClusterFromSnapshotCommand(input, context);
    };
    RestoreDBClusterFromSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreDBClusterFromSnapshotCommand(output, context);
    };
    return RestoreDBClusterFromSnapshotCommand;
}($Command));
export { RestoreDBClusterFromSnapshotCommand };
//# sourceMappingURL=RestoreDBClusterFromSnapshotCommand.js.map