import { __extends } from "tslib";
import { UpdateDashboardPermissionsRequest, UpdateDashboardPermissionsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateDashboardPermissionsCommand, serializeAws_restJson1UpdateDashboardPermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates read and write permissions on a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDashboardPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDashboardPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDashboardPermissionsCommand = /** @class */ (function (_super) {
    __extends(UpdateDashboardPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDashboardPermissionsCommand(input) {
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
    UpdateDashboardPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateDashboardPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDashboardPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDashboardPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDashboardPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDashboardPermissionsCommand(input, context);
    };
    UpdateDashboardPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDashboardPermissionsCommand(output, context);
    };
    return UpdateDashboardPermissionsCommand;
}($Command));
export { UpdateDashboardPermissionsCommand };
//# sourceMappingURL=UpdateDashboardPermissionsCommand.js.map