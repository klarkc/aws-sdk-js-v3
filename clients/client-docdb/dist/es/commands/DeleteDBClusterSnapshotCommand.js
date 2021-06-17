import { __extends } from "tslib";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import { deserializeAws_queryDeleteDBClusterSnapshotCommand, serializeAws_queryDeleteDBClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is
 *             terminated.</p>
 *         <note>
 *             <p>The cluster snapshot must be in the <code>available</code> state to be
 *                 deleted.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBClusterSnapshotCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBClusterSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteDBClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBClusterSnapshotCommand(input) {
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
    DeleteDBClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DeleteDBClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBClusterSnapshotCommand(input, context);
    };
    DeleteDBClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBClusterSnapshotCommand(output, context);
    };
    return DeleteDBClusterSnapshotCommand;
}($Command));
export { DeleteDBClusterSnapshotCommand };
//# sourceMappingURL=DeleteDBClusterSnapshotCommand.js.map