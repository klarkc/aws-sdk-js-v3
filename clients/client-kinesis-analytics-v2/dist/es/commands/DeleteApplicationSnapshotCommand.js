import { __extends } from "tslib";
import { DeleteApplicationSnapshotRequest, DeleteApplicationSnapshotResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteApplicationSnapshotCommand, serializeAws_json1_1DeleteApplicationSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a snapshot of application state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationSnapshotCommand(input) {
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
    DeleteApplicationSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "DeleteApplicationSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApplicationSnapshotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApplicationSnapshotCommand(input, context);
    };
    DeleteApplicationSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApplicationSnapshotCommand(output, context);
    };
    return DeleteApplicationSnapshotCommand;
}($Command));
export { DeleteApplicationSnapshotCommand };
//# sourceMappingURL=DeleteApplicationSnapshotCommand.js.map