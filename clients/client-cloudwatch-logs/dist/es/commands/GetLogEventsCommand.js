import { __extends } from "tslib";
import { GetLogEventsRequest, GetLogEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLogEventsCommand, serializeAws_json1_1GetLogEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists log events from the specified log stream. You can list all of the log events or
 *       filter using a time range.</p>
 *
 *          <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events).
 *       You can get additional log events by specifying one of the tokens in a subsequent call.
 *       This operation can return empty results while there are more log events available through the token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new GetLogEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogEventsCommandInput} for command's `input` shape.
 * @see {@link GetLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLogEventsCommand = /** @class */ (function (_super) {
    __extends(GetLogEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLogEventsCommand(input) {
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
    GetLogEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "GetLogEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLogEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLogEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLogEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLogEventsCommand(input, context);
    };
    GetLogEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLogEventsCommand(output, context);
    };
    return GetLogEventsCommand;
}($Command));
export { GetLogEventsCommand };
//# sourceMappingURL=GetLogEventsCommand.js.map