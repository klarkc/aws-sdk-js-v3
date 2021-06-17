import { __extends } from "tslib";
import { DeleteApplicationCloudWatchLoggingOptionRequest, DeleteApplicationCloudWatchLoggingOptionResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand, serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes a CloudWatch log stream from an application. For more information about
 *             using CloudWatch log streams with Amazon Kinesis Analytics applications, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DeleteApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DeleteApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationCloudWatchLoggingOptionCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationCloudWatchLoggingOptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationCloudWatchLoggingOptionCommand(input) {
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
    DeleteApplicationCloudWatchLoggingOptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "DeleteApplicationCloudWatchLoggingOptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationCloudWatchLoggingOptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(input, context);
    };
    DeleteApplicationCloudWatchLoggingOptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(output, context);
    };
    return DeleteApplicationCloudWatchLoggingOptionCommand;
}($Command));
export { DeleteApplicationCloudWatchLoggingOptionCommand };
//# sourceMappingURL=DeleteApplicationCloudWatchLoggingOptionCommand.js.map