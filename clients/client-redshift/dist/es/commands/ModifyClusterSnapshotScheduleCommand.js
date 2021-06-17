import { __extends } from "tslib";
import { ModifyClusterSnapshotScheduleMessage } from "../models/models_1";
import { deserializeAws_queryModifyClusterSnapshotScheduleCommand, serializeAws_queryModifyClusterSnapshotScheduleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a snapshot schedule for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterSnapshotScheduleCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterSnapshotScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterSnapshotScheduleCommand(input) {
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
    ModifyClusterSnapshotScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterSnapshotScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterSnapshotScheduleMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterSnapshotScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterSnapshotScheduleCommand(input, context);
    };
    ModifyClusterSnapshotScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterSnapshotScheduleCommand(output, context);
    };
    return ModifyClusterSnapshotScheduleCommand;
}($Command));
export { ModifyClusterSnapshotScheduleCommand };
//# sourceMappingURL=ModifyClusterSnapshotScheduleCommand.js.map