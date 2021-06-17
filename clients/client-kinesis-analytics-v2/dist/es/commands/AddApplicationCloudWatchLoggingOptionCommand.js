import { __extends } from "tslib";
import { AddApplicationCloudWatchLoggingOptionRequest, AddApplicationCloudWatchLoggingOptionResponse, } from "../models/models_0";
import { deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand, serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an Amazon CloudWatch log stream to monitor application configuration errors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link AddApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddApplicationCloudWatchLoggingOptionCommand = /** @class */ (function (_super) {
    __extends(AddApplicationCloudWatchLoggingOptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddApplicationCloudWatchLoggingOptionCommand(input) {
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
    AddApplicationCloudWatchLoggingOptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "AddApplicationCloudWatchLoggingOptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddApplicationCloudWatchLoggingOptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(input, context);
    };
    AddApplicationCloudWatchLoggingOptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(output, context);
    };
    return AddApplicationCloudWatchLoggingOptionCommand;
}($Command));
export { AddApplicationCloudWatchLoggingOptionCommand };
//# sourceMappingURL=AddApplicationCloudWatchLoggingOptionCommand.js.map