import { __extends } from "tslib";
import { DeleteSuggesterRequest, DeleteSuggesterResponse } from "../models/models_0";
import { deserializeAws_queryDeleteSuggesterCommand, serializeAws_queryDeleteSuggesterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteSuggesterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuggesterCommandInput} for command's `input` shape.
 * @see {@link DeleteSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSuggesterCommand = /** @class */ (function (_super) {
    __extends(DeleteSuggesterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSuggesterCommand(input) {
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
    DeleteSuggesterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DeleteSuggesterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSuggesterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSuggesterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSuggesterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSuggesterCommand(input, context);
    };
    DeleteSuggesterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSuggesterCommand(output, context);
    };
    return DeleteSuggesterCommand;
}($Command));
export { DeleteSuggesterCommand };
//# sourceMappingURL=DeleteSuggesterCommand.js.map