import { __extends } from "tslib";
import { CreateApplicationSnapshotRequest, CreateApplicationSnapshotResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateApplicationSnapshotCommand, serializeAws_json1_1CreateApplicationSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a snapshot of the application's state data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new CreateApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApplicationSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateApplicationSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApplicationSnapshotCommand(input) {
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
    CreateApplicationSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "CreateApplicationSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApplicationSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApplicationSnapshotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApplicationSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateApplicationSnapshotCommand(input, context);
    };
    CreateApplicationSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateApplicationSnapshotCommand(output, context);
    };
    return CreateApplicationSnapshotCommand;
}($Command));
export { CreateApplicationSnapshotCommand };
//# sourceMappingURL=CreateApplicationSnapshotCommand.js.map