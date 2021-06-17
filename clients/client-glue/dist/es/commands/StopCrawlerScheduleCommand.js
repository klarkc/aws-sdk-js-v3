import { __extends } from "tslib";
import { StopCrawlerScheduleRequest, StopCrawlerScheduleResponse } from "../models/models_1";
import { deserializeAws_json1_1StopCrawlerScheduleCommand, serializeAws_json1_1StopCrawlerScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the schedule state of the specified crawler to
 *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
 *       already running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link StopCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopCrawlerScheduleCommand = /** @class */ (function (_super) {
    __extends(StopCrawlerScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopCrawlerScheduleCommand(input) {
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
    StopCrawlerScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StopCrawlerScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopCrawlerScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopCrawlerScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopCrawlerScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopCrawlerScheduleCommand(input, context);
    };
    StopCrawlerScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopCrawlerScheduleCommand(output, context);
    };
    return StopCrawlerScheduleCommand;
}($Command));
export { StopCrawlerScheduleCommand };
//# sourceMappingURL=StopCrawlerScheduleCommand.js.map