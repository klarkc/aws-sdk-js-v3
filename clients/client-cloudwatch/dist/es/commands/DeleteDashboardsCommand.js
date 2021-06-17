import { __extends } from "tslib";
import { DeleteDashboardsInput, DeleteDashboardsOutput } from "../models/models_0";
import { deserializeAws_queryDeleteDashboardsCommand, serializeAws_queryDeleteDashboardsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all dashboards that you specify. You
 * 			can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are
 * 			deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteDashboardsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteDashboardsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDashboardsCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDashboardsCommand = /** @class */ (function (_super) {
    __extends(DeleteDashboardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDashboardsCommand(input) {
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
    DeleteDashboardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DeleteDashboardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDashboardsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDashboardsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDashboardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDashboardsCommand(input, context);
    };
    DeleteDashboardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDashboardsCommand(output, context);
    };
    return DeleteDashboardsCommand;
}($Command));
export { DeleteDashboardsCommand };
//# sourceMappingURL=DeleteDashboardsCommand.js.map