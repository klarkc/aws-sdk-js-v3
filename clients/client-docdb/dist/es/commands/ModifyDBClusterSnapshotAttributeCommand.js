import { __extends } from "tslib";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_0";
import { deserializeAws_queryModifyDBClusterSnapshotAttributeCommand, serializeAws_queryModifyDBClusterSnapshotAttributeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
 *             cluster snapshot.</p>
 *         <p>To share a manual cluster snapshot with other AWS accounts, specify
 *                 <code>restore</code> as the <code>AttributeName</code>, and use the
 *                 <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are
 *             authorized to restore the manual cluster snapshot. Use the value <code>all</code> to
 *             make the manual cluster snapshot public, which means that it can be copied or
 *             restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB
 *             cluster snapshots that contain private information that you don't want available to all
 *             AWS accounts. If a manual cluster snapshot is encrypted, it can be shared, but only
 *             by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code>
 *             parameter. You can't use <code>all</code> as a value for that parameter in this
 *             case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBClusterSnapshotAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyDBClusterSnapshotAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBClusterSnapshotAttributeCommand(input) {
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
    ModifyDBClusterSnapshotAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "ModifyDBClusterSnapshotAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBClusterSnapshotAttributeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBClusterSnapshotAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBClusterSnapshotAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBClusterSnapshotAttributeCommand(input, context);
    };
    ModifyDBClusterSnapshotAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBClusterSnapshotAttributeCommand(output, context);
    };
    return ModifyDBClusterSnapshotAttributeCommand;
}($Command));
export { ModifyDBClusterSnapshotAttributeCommand };
//# sourceMappingURL=ModifyDBClusterSnapshotAttributeCommand.js.map