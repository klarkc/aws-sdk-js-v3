import { __extends } from "tslib";
import { GetCrawlerRequest, GetCrawlerResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCrawlerCommand, serializeAws_json1_1GetCrawlerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata for a specified crawler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCrawlerCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCrawlerCommand = /** @class */ (function (_super) {
    __extends(GetCrawlerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCrawlerCommand(input) {
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
    GetCrawlerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetCrawlerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCrawlerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCrawlerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCrawlerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCrawlerCommand(input, context);
    };
    GetCrawlerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCrawlerCommand(output, context);
    };
    return GetCrawlerCommand;
}($Command));
export { GetCrawlerCommand };
//# sourceMappingURL=GetCrawlerCommand.js.map