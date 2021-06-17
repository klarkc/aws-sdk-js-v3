import { __extends } from "tslib";
import { DeleteCrawlerRequest, DeleteCrawlerResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteCrawlerCommand, serializeAws_json1_1DeleteCrawlerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is
 *         <code>RUNNING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCrawlerCommandInput} for command's `input` shape.
 * @see {@link DeleteCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCrawlerCommand = /** @class */ (function (_super) {
    __extends(DeleteCrawlerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCrawlerCommand(input) {
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
    DeleteCrawlerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteCrawlerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCrawlerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCrawlerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCrawlerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCrawlerCommand(input, context);
    };
    DeleteCrawlerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCrawlerCommand(output, context);
    };
    return DeleteCrawlerCommand;
}($Command));
export { DeleteCrawlerCommand };
//# sourceMappingURL=DeleteCrawlerCommand.js.map