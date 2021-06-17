import { __extends } from "tslib";
import { DBSnapshotMessage, DescribeDBSnapshotsMessage } from "../models/models_1";
import { deserializeAws_queryDescribeDBSnapshotsCommand, serializeAws_queryDescribeDBSnapshotsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about DB snapshots. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBSnapshotsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBSnapshotsCommand(input) {
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
    DescribeDBSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBSnapshotsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBSnapshotMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBSnapshotsCommand(input, context);
    };
    DescribeDBSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBSnapshotsCommand(output, context);
    };
    return DescribeDBSnapshotsCommand;
}($Command));
export { DescribeDBSnapshotsCommand };
//# sourceMappingURL=DescribeDBSnapshotsCommand.js.map