import { __extends } from "tslib";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListApplicationsCommand, serializeAws_json1_1ListApplicationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of Kinesis Data Analytics applications in your account. For each
 *       application, the response includes the application name, Amazon Resource Name (ARN), and
 *       status. </p>
 *          <p>If you want detailed information about a specific application, use
 *       <a>DescribeApplication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationsCommand(input) {
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
    ListApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "ListApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApplicationsCommand(input, context);
    };
    ListApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApplicationsCommand(output, context);
    };
    return ListApplicationsCommand;
}($Command));
export { ListApplicationsCommand };
//# sourceMappingURL=ListApplicationsCommand.js.map