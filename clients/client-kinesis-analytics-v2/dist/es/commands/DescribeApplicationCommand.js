import { __extends } from "tslib";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeApplicationCommand, serializeAws_json1_1DescribeApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific Kinesis Data Analytics application.</p>
 *          <p>If you want to retrieve a list of all applications in your account,
 *       use the <a>ListApplications</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeApplicationCommand = /** @class */ (function (_super) {
    __extends(DescribeApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApplicationCommand(input) {
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
    DescribeApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "DescribeApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeApplicationCommand(input, context);
    };
    DescribeApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeApplicationCommand(output, context);
    };
    return DescribeApplicationCommand;
}($Command));
export { DescribeApplicationCommand };
//# sourceMappingURL=DescribeApplicationCommand.js.map