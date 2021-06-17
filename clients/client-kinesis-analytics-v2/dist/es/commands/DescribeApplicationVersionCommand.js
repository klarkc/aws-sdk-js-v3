import { __extends } from "tslib";
import { DescribeApplicationVersionRequest, DescribeApplicationVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeApplicationVersionCommand, serializeAws_json1_1DescribeApplicationVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeApplicationVersionCommand = /** @class */ (function (_super) {
    __extends(DescribeApplicationVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApplicationVersionCommand(input) {
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
    DescribeApplicationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "DescribeApplicationVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApplicationVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeApplicationVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApplicationVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeApplicationVersionCommand(input, context);
    };
    DescribeApplicationVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeApplicationVersionCommand(output, context);
    };
    return DescribeApplicationVersionCommand;
}($Command));
export { DescribeApplicationVersionCommand };
//# sourceMappingURL=DescribeApplicationVersionCommand.js.map