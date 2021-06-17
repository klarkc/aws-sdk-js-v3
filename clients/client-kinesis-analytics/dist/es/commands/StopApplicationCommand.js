import { __extends } from "tslib";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1StopApplicationCommand, serializeAws_json1_1StopApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Stops the application from processing input data. You can stop
 *             an application only if it is in the running state.
 *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state.
 *             After the application is stopped,
 *             Amazon Kinesis Analytics stops reading data from the input, the
 *             application stops processing data, and there is no output written to the destination. </p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:StopApplication</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, StopApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, StopApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new StopApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopApplicationCommandInput} for command's `input` shape.
 * @see {@link StopApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopApplicationCommand = /** @class */ (function (_super) {
    __extends(StopApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopApplicationCommand(input) {
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
    StopApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "StopApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopApplicationCommand(input, context);
    };
    StopApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopApplicationCommand(output, context);
    };
    return StopApplicationCommand;
}($Command));
export { StopApplicationCommand };
//# sourceMappingURL=StopApplicationCommand.js.map