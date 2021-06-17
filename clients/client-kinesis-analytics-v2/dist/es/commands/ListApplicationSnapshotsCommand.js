import { __extends } from "tslib";
import { ListApplicationSnapshotsRequest, ListApplicationSnapshotsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListApplicationSnapshotsCommand, serializeAws_json1_1ListApplicationSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about the current application snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationSnapshotsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new ListApplicationSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationSnapshotsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationSnapshotsCommand(input) {
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
    ListApplicationSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "ListApplicationSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationSnapshotsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApplicationSnapshotsCommand(input, context);
    };
    ListApplicationSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApplicationSnapshotsCommand(output, context);
    };
    return ListApplicationSnapshotsCommand;
}($Command));
export { ListApplicationSnapshotsCommand };
//# sourceMappingURL=ListApplicationSnapshotsCommand.js.map