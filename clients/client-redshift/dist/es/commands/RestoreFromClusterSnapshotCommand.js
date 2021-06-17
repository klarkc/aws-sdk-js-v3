import { __extends } from "tslib";
import { RestoreFromClusterSnapshotMessage, RestoreFromClusterSnapshotResult } from "../models/models_1";
import { deserializeAws_queryRestoreFromClusterSnapshotCommand, serializeAws_queryRestoreFromClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
 *             cluster with the same configuration as the original cluster from which the snapshot was
 *             created, except that the new cluster is created with the default cluster security and
 *             parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different
 *             parameter group with the restored cluster. If you are using a DS node type, you can also
 *             choose to change to another DS node type of the same size during restore.</p>
 *         <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where
 *             you want the cluster restored.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RestoreFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreFromClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(RestoreFromClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreFromClusterSnapshotCommand(input) {
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
    RestoreFromClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RestoreFromClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreFromClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreFromClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreFromClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreFromClusterSnapshotCommand(input, context);
    };
    RestoreFromClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreFromClusterSnapshotCommand(output, context);
    };
    return RestoreFromClusterSnapshotCommand;
}($Command));
export { RestoreFromClusterSnapshotCommand };
//# sourceMappingURL=RestoreFromClusterSnapshotCommand.js.map