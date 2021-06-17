import { __extends } from "tslib";
import { ListApplicationVersionsRequest, ListApplicationVersionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListApplicationVersionsCommand, serializeAws_json1_1ListApplicationVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration
 *       associated with each version.</p>
 *
 *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationVersionsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationVersionsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new ListApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationVersionsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationVersionsCommand(input) {
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
    ListApplicationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "ListApplicationVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApplicationVersionsCommand(input, context);
    };
    ListApplicationVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApplicationVersionsCommand(output, context);
    };
    return ListApplicationVersionsCommand;
}($Command));
export { ListApplicationVersionsCommand };
//# sourceMappingURL=ListApplicationVersionsCommand.js.map