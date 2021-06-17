import { __extends } from "tslib";
import { StartApplicationRequest, StartApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1StartApplicationCommand, serializeAws_json1_1StartApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p>
 *         <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p>
 *         <p>
 *             The application status must be <code>READY</code> for you to start an application. You can
 *             get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
 *         <p>After you start the application, you can stop the application from processing
 *             the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:StartApplication</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, StartApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, StartApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartApplicationCommand = /** @class */ (function (_super) {
    __extends(StartApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartApplicationCommand(input) {
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
    StartApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "StartApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartApplicationCommand(input, context);
    };
    StartApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartApplicationCommand(output, context);
    };
    return StartApplicationCommand;
}($Command));
export { StartApplicationCommand };
//# sourceMappingURL=StartApplicationCommand.js.map