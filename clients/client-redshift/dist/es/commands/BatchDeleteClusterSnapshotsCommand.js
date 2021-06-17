import { __extends } from "tslib";
import { BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult } from "../models/models_0";
import { deserializeAws_queryBatchDeleteClusterSnapshotsCommand, serializeAws_queryBatchDeleteClusterSnapshotsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchDeleteClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchDeleteClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new BatchDeleteClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteClusterSnapshotsCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteClusterSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteClusterSnapshotsCommand(input) {
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
    BatchDeleteClusterSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "BatchDeleteClusterSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteClusterSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteClusterSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteClusterSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryBatchDeleteClusterSnapshotsCommand(input, context);
    };
    BatchDeleteClusterSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryBatchDeleteClusterSnapshotsCommand(output, context);
    };
    return BatchDeleteClusterSnapshotsCommand;
}($Command));
export { BatchDeleteClusterSnapshotsCommand };
//# sourceMappingURL=BatchDeleteClusterSnapshotsCommand.js.map