import { __extends } from "tslib";
import { GetCrawlerMetricsRequest, GetCrawlerMetricsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCrawlerMetricsCommand, serializeAws_json1_1GetCrawlerMetricsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metrics about specified crawlers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerMetricsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerMetricsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCrawlerMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCrawlerMetricsCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerMetricsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCrawlerMetricsCommand = /** @class */ (function (_super) {
    __extends(GetCrawlerMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCrawlerMetricsCommand(input) {
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
    GetCrawlerMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetCrawlerMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCrawlerMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCrawlerMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCrawlerMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCrawlerMetricsCommand(input, context);
    };
    GetCrawlerMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCrawlerMetricsCommand(output, context);
    };
    return GetCrawlerMetricsCommand;
}($Command));
export { GetCrawlerMetricsCommand };
//# sourceMappingURL=GetCrawlerMetricsCommand.js.map