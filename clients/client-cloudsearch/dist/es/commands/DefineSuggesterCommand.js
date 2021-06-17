import { __extends } from "tslib";
import { DefineSuggesterRequest, DefineSuggesterResponse } from "../models/models_0";
import { deserializeAws_queryDefineSuggesterCommand, serializeAws_queryDefineSuggesterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineSuggesterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineSuggesterCommandInput} for command's `input` shape.
 * @see {@link DefineSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DefineSuggesterCommand = /** @class */ (function (_super) {
    __extends(DefineSuggesterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DefineSuggesterCommand(input) {
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
    DefineSuggesterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DefineSuggesterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DefineSuggesterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DefineSuggesterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DefineSuggesterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDefineSuggesterCommand(input, context);
    };
    DefineSuggesterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDefineSuggesterCommand(output, context);
    };
    return DefineSuggesterCommand;
}($Command));
export { DefineSuggesterCommand };
//# sourceMappingURL=DefineSuggesterCommand.js.map