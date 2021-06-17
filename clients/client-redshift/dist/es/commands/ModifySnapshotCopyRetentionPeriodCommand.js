import { __extends } from "tslib";
import { ModifySnapshotCopyRetentionPeriodMessage, ModifySnapshotCopyRetentionPeriodResult } from "../models/models_1";
import { deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand, serializeAws_queryModifySnapshotCopyRetentionPeriodCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the number of days to retain snapshots in the destination AWS Region after
 *             they are copied from the source AWS Region. By default, this operation only changes the
 *             retention period of copied automated snapshots. The retention periods for both new and
 *             existing copied automated snapshots are updated with the new retention period. You can
 *             set the manual option to change only the retention periods of copied manual snapshots.
 *             If you set this option, only newly copied manual snapshots have the new retention
 *             period. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifySnapshotCopyRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifySnapshotCopyRetentionPeriodCommand = /** @class */ (function (_super) {
    __extends(ModifySnapshotCopyRetentionPeriodCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifySnapshotCopyRetentionPeriodCommand(input) {
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
    ModifySnapshotCopyRetentionPeriodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifySnapshotCopyRetentionPeriodCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifySnapshotCopyRetentionPeriodMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifySnapshotCopyRetentionPeriodResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifySnapshotCopyRetentionPeriodCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifySnapshotCopyRetentionPeriodCommand(input, context);
    };
    ModifySnapshotCopyRetentionPeriodCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand(output, context);
    };
    return ModifySnapshotCopyRetentionPeriodCommand;
}($Command));
export { ModifySnapshotCopyRetentionPeriodCommand };
//# sourceMappingURL=ModifySnapshotCopyRetentionPeriodCommand.js.map