import { __extends } from "tslib";
import { StartCrawlerScheduleRequest, StartCrawlerScheduleResponse } from "../models/models_1";
import { deserializeAws_json1_1StartCrawlerScheduleCommand, serializeAws_json1_1StartCrawlerScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the schedule state of the specified crawler to
 *       <code>SCHEDULED</code>, unless the crawler is already running or the
 *       schedule state is already <code>SCHEDULED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link StartCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartCrawlerScheduleCommand = /** @class */ (function (_super) {
    __extends(StartCrawlerScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartCrawlerScheduleCommand(input) {
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
    StartCrawlerScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartCrawlerScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartCrawlerScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartCrawlerScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartCrawlerScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartCrawlerScheduleCommand(input, context);
    };
    StartCrawlerScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartCrawlerScheduleCommand(output, context);
    };
    return StartCrawlerScheduleCommand;
}($Command));
export { StartCrawlerScheduleCommand };
//# sourceMappingURL=StartCrawlerScheduleCommand.js.map