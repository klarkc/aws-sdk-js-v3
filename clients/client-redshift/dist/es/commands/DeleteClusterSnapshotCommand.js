import { __extends } from "tslib";
import { DeleteClusterSnapshotMessage, DeleteClusterSnapshotResult } from "../models/models_0";
import { deserializeAws_queryDeleteClusterSnapshotCommand, serializeAws_queryDeleteClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified manual snapshot. The snapshot must be in the
 *                 <code>available</code> state, with no other users authorized to access the snapshot. </p>
 *         <p>Unlike automated snapshots, manual snapshots are retained even after you delete
 *             your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
 *             snapshot explicitly to avoid getting charged. If other accounts are authorized to access
 *             the snapshot, you must revoke all of the authorizations before you can delete the
 *             snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterSnapshotCommand(input) {
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
    DeleteClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteClusterSnapshotCommand(input, context);
    };
    DeleteClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteClusterSnapshotCommand(output, context);
    };
    return DeleteClusterSnapshotCommand;
}($Command));
export { DeleteClusterSnapshotCommand };
//# sourceMappingURL=DeleteClusterSnapshotCommand.js.map