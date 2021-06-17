import { __extends } from "tslib";
import { DeleteSnapshotMessage, DeleteSnapshotResult } from "../models/models_0";
import { deserializeAws_queryDeleteSnapshotCommand, serializeAws_queryDeleteSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing snapshot. When you receive a
 *             successful response from this operation, ElastiCache immediately begins deleting the snapshot;
 *             you cannot cancel or revert this operation.</p>
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSnapshotCommand(input) {
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
    DeleteSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DeleteSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSnapshotCommand(input, context);
    };
    DeleteSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSnapshotCommand(output, context);
    };
    return DeleteSnapshotCommand;
}($Command));
export { DeleteSnapshotCommand };
//# sourceMappingURL=DeleteSnapshotCommand.js.map