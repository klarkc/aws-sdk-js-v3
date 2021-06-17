import { __extends } from "tslib";
import { BatchModifyClusterSnapshotsMessage, BatchModifyClusterSnapshotsOutputMessage } from "../models/models_0";
import { deserializeAws_queryBatchModifyClusterSnapshotsCommand, serializeAws_queryBatchModifyClusterSnapshotsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchModifyClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchModifyClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new BatchModifyClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchModifyClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchModifyClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchModifyClusterSnapshotsCommand = /** @class */ (function (_super) {
    __extends(BatchModifyClusterSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchModifyClusterSnapshotsCommand(input) {
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
    BatchModifyClusterSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "BatchModifyClusterSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchModifyClusterSnapshotsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: BatchModifyClusterSnapshotsOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchModifyClusterSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryBatchModifyClusterSnapshotsCommand(input, context);
    };
    BatchModifyClusterSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryBatchModifyClusterSnapshotsCommand(output, context);
    };
    return BatchModifyClusterSnapshotsCommand;
}($Command));
export { BatchModifyClusterSnapshotsCommand };
//# sourceMappingURL=BatchModifyClusterSnapshotsCommand.js.map