import { __extends } from "tslib";
import { ListDashboardsInput, ListDashboardsOutput } from "../models/models_0";
import { deserializeAws_queryListDashboardsCommand, serializeAws_queryListDashboardsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only
 * 			those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are
 * 			listed.
 * 	    </p>
 * 		       <p>
 *             <code>ListDashboards</code> returns up to 1000 results on one page. If there
 * 			are more than 1000 dashboards, you can call <code>ListDashboards</code> again and
 * 		include the value you received for <code>NextToken</code> in the first call, to receive
 * 		the next 1000 results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListDashboardsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListDashboardsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDashboardsCommand = /** @class */ (function (_super) {
    __extends(ListDashboardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDashboardsCommand(input) {
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
    ListDashboardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "ListDashboardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDashboardsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListDashboardsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDashboardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListDashboardsCommand(input, context);
    };
    ListDashboardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListDashboardsCommand(output, context);
    };
    return ListDashboardsCommand;
}($Command));
export { ListDashboardsCommand };
//# sourceMappingURL=ListDashboardsCommand.js.map