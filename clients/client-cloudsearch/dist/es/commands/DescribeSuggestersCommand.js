import { __extends } from "tslib";
import { DescribeSuggestersRequest, DescribeSuggestersResponse } from "../models/models_0";
import { deserializeAws_queryDescribeSuggestersCommand, serializeAws_queryDescribeSuggestersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries.  Can be limited to specific suggesters by name.  By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeSuggestersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSuggestersCommandInput} for command's `input` shape.
 * @see {@link DescribeSuggestersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSuggestersCommand = /** @class */ (function (_super) {
    __extends(DescribeSuggestersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSuggestersCommand(input) {
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
    DescribeSuggestersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeSuggestersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSuggestersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSuggestersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSuggestersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeSuggestersCommand(input, context);
    };
    DescribeSuggestersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeSuggestersCommand(output, context);
    };
    return DescribeSuggestersCommand;
}($Command));
export { DescribeSuggestersCommand };
//# sourceMappingURL=DescribeSuggestersCommand.js.map