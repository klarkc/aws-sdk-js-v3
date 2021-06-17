import { __extends } from "tslib";
import { UpdateCrawlerScheduleRequest, UpdateCrawlerScheduleResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateCrawlerScheduleCommand, serializeAws_json1_1UpdateCrawlerScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCrawlerScheduleCommand = /** @class */ (function (_super) {
    __extends(UpdateCrawlerScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCrawlerScheduleCommand(input) {
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
    UpdateCrawlerScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateCrawlerScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCrawlerScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCrawlerScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCrawlerScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCrawlerScheduleCommand(input, context);
    };
    UpdateCrawlerScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCrawlerScheduleCommand(output, context);
    };
    return UpdateCrawlerScheduleCommand;
}($Command));
export { UpdateCrawlerScheduleCommand };
//# sourceMappingURL=UpdateCrawlerScheduleCommand.js.map