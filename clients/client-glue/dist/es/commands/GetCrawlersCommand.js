import { __extends } from "tslib";
import { GetCrawlersRequest, GetCrawlersResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCrawlersCommand, serializeAws_json1_1GetCrawlersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata for all crawlers defined in the customer
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCrawlersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCrawlersCommandInput} for command's `input` shape.
 * @see {@link GetCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCrawlersCommand = /** @class */ (function (_super) {
    __extends(GetCrawlersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCrawlersCommand(input) {
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
    GetCrawlersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetCrawlersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCrawlersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCrawlersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCrawlersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCrawlersCommand(input, context);
    };
    GetCrawlersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCrawlersCommand(output, context);
    };
    return GetCrawlersCommand;
}($Command));
export { GetCrawlersCommand };
//# sourceMappingURL=GetCrawlersCommand.js.map