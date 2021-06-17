import { __extends } from "tslib";
import { ModifyDBSnapshotAttributeMessage, ModifyDBSnapshotAttributeResult } from "../models/models_1";
import { deserializeAws_queryModifyDBSnapshotAttributeCommand, serializeAws_queryModifyDBSnapshotAttributeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p>
 *          <p>To share a manual DB snapshot with other AWS accounts, specify <code>restore</code>
 *             as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
 *             a list of IDs of the AWS accounts that are authorized to restore the manual DB snapshot.
 *             Uses the value <code>all</code> to make the manual DB snapshot public, which means it
 *             can be copied or restored by all AWS accounts.</p>
 *         <note>
 *             <p>Don't add the <code>all</code> value for any manual DB snapshots that
 *                 contain private information that you don't want available to all AWS
 *                 accounts.</p>
 *         </note>
 *         <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a
 *             list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You
 *             can't use <code>all</code> as a value for that parameter in this case.</p>
 *          <p>To view which AWS accounts have access to copy or restore a manual DB snapshot, or
 *             whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action. The accounts are returned as
 *             values for the <code>restore</code> attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotAttributeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotAttributeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBSnapshotAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyDBSnapshotAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBSnapshotAttributeCommand(input) {
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
    ModifyDBSnapshotAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyDBSnapshotAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBSnapshotAttributeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBSnapshotAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBSnapshotAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBSnapshotAttributeCommand(input, context);
    };
    ModifyDBSnapshotAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBSnapshotAttributeCommand(output, context);
    };
    return ModifyDBSnapshotAttributeCommand;
}($Command));
export { ModifyDBSnapshotAttributeCommand };
//# sourceMappingURL=ModifyDBSnapshotAttributeCommand.js.map