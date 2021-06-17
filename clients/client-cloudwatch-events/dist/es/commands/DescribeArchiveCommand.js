import { __extends } from "tslib";
import { DescribeArchiveRequest, DescribeArchiveResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeArchiveCommand, serializeAws_json1_1DescribeArchiveCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details about an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DescribeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeArchiveCommandInput} for command's `input` shape.
 * @see {@link DescribeArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeArchiveCommand = /** @class */ (function (_super) {
    __extends(DescribeArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeArchiveCommand(input) {
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
    DescribeArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "DescribeArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeArchiveRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeArchiveResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeArchiveCommand(input, context);
    };
    DescribeArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeArchiveCommand(output, context);
    };
    return DescribeArchiveCommand;
}($Command));
export { DescribeArchiveCommand };
//# sourceMappingURL=DescribeArchiveCommand.js.map