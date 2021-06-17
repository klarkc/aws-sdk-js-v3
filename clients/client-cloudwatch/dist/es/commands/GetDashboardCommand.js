import { __extends } from "tslib";
import { GetDashboardInput, GetDashboardOutput } from "../models/models_0";
import { deserializeAws_queryGetDashboardCommand, serializeAws_queryGetDashboardCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays the details of the dashboard that you specify.</p>
 * 		       <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create
 * 			the copy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDashboardCommandInput} for command's `input` shape.
 * @see {@link GetDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDashboardCommand = /** @class */ (function (_super) {
    __extends(GetDashboardCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDashboardCommand(input) {
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
    GetDashboardCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "GetDashboardCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDashboardInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDashboardOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDashboardCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetDashboardCommand(input, context);
    };
    GetDashboardCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetDashboardCommand(output, context);
    };
    return GetDashboardCommand;
}($Command));
export { GetDashboardCommand };
//# sourceMappingURL=GetDashboardCommand.js.map