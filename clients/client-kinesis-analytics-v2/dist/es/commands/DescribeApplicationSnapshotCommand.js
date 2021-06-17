import { __extends } from "tslib";
import { DescribeApplicationSnapshotRequest, DescribeApplicationSnapshotResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeApplicationSnapshotCommand, serializeAws_json1_1DescribeApplicationSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a snapshot of application state data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeApplicationSnapshotCommand = /** @class */ (function (_super) {
    __extends(DescribeApplicationSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApplicationSnapshotCommand(input) {
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
    DescribeApplicationSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "DescribeApplicationSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApplicationSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeApplicationSnapshotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApplicationSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeApplicationSnapshotCommand(input, context);
    };
    DescribeApplicationSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeApplicationSnapshotCommand(output, context);
    };
    return DescribeApplicationSnapshotCommand;
}($Command));
export { DescribeApplicationSnapshotCommand };
//# sourceMappingURL=DescribeApplicationSnapshotCommand.js.map