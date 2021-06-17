import { __extends } from "tslib";
import { DBClusterSnapshotMessage, DescribeDBClusterSnapshotsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBClusterSnapshotsCommand, serializeAws_queryDescribeDBClusterSnapshotsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about DB cluster snapshots. This API action supports
 *       pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterSnapshotsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterSnapshotsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBClusterSnapshotsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBClusterSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBClusterSnapshotsCommand(input) {
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
    DescribeDBClusterSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeDBClusterSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBClusterSnapshotsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterSnapshotMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBClusterSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBClusterSnapshotsCommand(input, context);
    };
    DescribeDBClusterSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBClusterSnapshotsCommand(output, context);
    };
    return DescribeDBClusterSnapshotsCommand;
}($Command));
export { DescribeDBClusterSnapshotsCommand };
//# sourceMappingURL=DescribeDBClusterSnapshotsCommand.js.map