import { __extends } from "tslib";
import { UpdateCrawlerRequest, UpdateCrawlerResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateCrawlerCommand, serializeAws_json1_1UpdateCrawlerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a crawler. If a crawler is
 *       running, you must stop it using <code>StopCrawler</code> before updating
 *       it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCrawlerCommandInput} for command's `input` shape.
 * @see {@link UpdateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCrawlerCommand = /** @class */ (function (_super) {
    __extends(UpdateCrawlerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCrawlerCommand(input) {
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
    UpdateCrawlerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateCrawlerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCrawlerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCrawlerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCrawlerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCrawlerCommand(input, context);
    };
    UpdateCrawlerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCrawlerCommand(output, context);
    };
    return UpdateCrawlerCommand;
}($Command));
export { UpdateCrawlerCommand };
//# sourceMappingURL=UpdateCrawlerCommand.js.map