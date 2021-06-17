import { __extends } from "tslib";
import { SearchInsightsRequest, SearchInsightsResponse } from "../models/models_0";
import { deserializeAws_restJson1SearchInsightsCommand, serializeAws_restJson1SearchInsightsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses
 *    		(<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>,
 *    		and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>).
 *    	</p>
 *    	     <p>
 *    		Use the <code>Filters</code> parameter to specify status and severity
 *    		search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, SearchInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, SearchInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new SearchInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchInsightsCommandInput} for command's `input` shape.
 * @see {@link SearchInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchInsightsCommand = /** @class */ (function (_super) {
    __extends(SearchInsightsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchInsightsCommand(input) {
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
    SearchInsightsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "SearchInsightsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchInsightsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchInsightsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchInsightsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchInsightsCommand(input, context);
    };
    SearchInsightsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchInsightsCommand(output, context);
    };
    return SearchInsightsCommand;
}($Command));
export { SearchInsightsCommand };
//# sourceMappingURL=SearchInsightsCommand.js.map