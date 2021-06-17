import { __extends } from "tslib";
import { DescribeDBClusterSnapshotAttributesMessage, DescribeDBClusterSnapshotAttributesResult, } from "../models/models_0";
import { deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand, serializeAws_queryDescribeDBClusterSnapshotAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
 *       snapshot.</p>
 *          <p>When sharing snapshots with other Amazon accounts,
 *       <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute
 *       and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB
 *       cluster snapshot. If <code>all</code> is included in the list of values for the
 *       <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be
 *       copied or restored by all Amazon accounts.</p>
 *          <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster
 *       snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBClusterSnapshotAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeDBClusterSnapshotAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBClusterSnapshotAttributesCommand(input) {
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
    DescribeDBClusterSnapshotAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeDBClusterSnapshotAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBClusterSnapshotAttributesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDBClusterSnapshotAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBClusterSnapshotAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBClusterSnapshotAttributesCommand(input, context);
    };
    DescribeDBClusterSnapshotAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand(output, context);
    };
    return DescribeDBClusterSnapshotAttributesCommand;
}($Command));
export { DescribeDBClusterSnapshotAttributesCommand };
//# sourceMappingURL=DescribeDBClusterSnapshotAttributesCommand.js.map