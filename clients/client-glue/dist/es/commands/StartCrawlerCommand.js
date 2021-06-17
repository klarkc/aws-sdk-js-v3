import { __extends } from "tslib";
import { StartCrawlerRequest, StartCrawlerResponse } from "../models/models_1";
import { deserializeAws_json1_1StartCrawlerCommand, serializeAws_json1_1StartCrawlerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a crawl using the specified crawler, regardless
 *       of what is scheduled. If the crawler is already running, returns a
 *       <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCrawlerCommandInput} for command's `input` shape.
 * @see {@link StartCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartCrawlerCommand = /** @class */ (function (_super) {
    __extends(StartCrawlerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartCrawlerCommand(input) {
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
    StartCrawlerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartCrawlerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartCrawlerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartCrawlerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartCrawlerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartCrawlerCommand(input, context);
    };
    StartCrawlerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartCrawlerCommand(output, context);
    };
    return StartCrawlerCommand;
}($Command));
export { StartCrawlerCommand };
//# sourceMappingURL=StartCrawlerCommand.js.map