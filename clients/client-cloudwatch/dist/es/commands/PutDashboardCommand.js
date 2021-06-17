import { __extends } from "tslib";
import { PutDashboardInput, PutDashboardOutput } from "../models/models_0";
import { deserializeAws_queryPutDashboardCommand, serializeAws_queryPutDashboardCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard,
 * 		the entire contents are replaced with what you specify here.</p>
 * 		       <p>All dashboards in your account are global, not region-specific.</p>
 * 		       <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an
 * 			existing dashboard. To copy an existing dashboard using the console, you can load the dashboard
 * 			and then use the View/edit source command in the Actions menu to display the JSON  block
 * 			for that dashboard. Another way to copy a dashboard is to
 * 			use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p>
 * 		       <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to
 * 			add a text widget at the top of the dashboard with a message that the dashboard was created by script and should
 * 		not be changed in the console. This message could also point console users to the location
 * 		of the <code>DashboardBody</code> script or the CloudFormation template used to create the
 * 		dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDashboardCommandInput} for command's `input` shape.
 * @see {@link PutDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDashboardCommand = /** @class */ (function (_super) {
    __extends(PutDashboardCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDashboardCommand(input) {
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
    PutDashboardCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "PutDashboardCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDashboardInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutDashboardOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDashboardCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutDashboardCommand(input, context);
    };
    PutDashboardCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutDashboardCommand(output, context);
    };
    return PutDashboardCommand;
}($Command));
export { PutDashboardCommand };
//# sourceMappingURL=PutDashboardCommand.js.map