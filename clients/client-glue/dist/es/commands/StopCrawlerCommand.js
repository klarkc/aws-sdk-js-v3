import { __extends } from "tslib";
import { StopCrawlerRequest, StopCrawlerResponse } from "../models/models_1";
import { deserializeAws_json1_1StopCrawlerCommand, serializeAws_json1_1StopCrawlerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>If the specified crawler is running, stops the crawl.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCrawlerCommandInput} for command's `input` shape.
 * @see {@link StopCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopCrawlerCommand = /** @class */ (function (_super) {
    __extends(StopCrawlerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopCrawlerCommand(input) {
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
    StopCrawlerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StopCrawlerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopCrawlerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopCrawlerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopCrawlerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopCrawlerCommand(input, context);
    };
    StopCrawlerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopCrawlerCommand(output, context);
    };
    return StopCrawlerCommand;
}($Command));
export { StopCrawlerCommand };
//# sourceMappingURL=StopCrawlerCommand.js.map