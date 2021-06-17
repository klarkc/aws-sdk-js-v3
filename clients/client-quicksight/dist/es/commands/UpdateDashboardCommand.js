import { __extends } from "tslib";
import { UpdateDashboardRequest, UpdateDashboardResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateDashboardCommand, serializeAws_restJson1UpdateDashboardCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a dashboard in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDashboardCommand = /** @class */ (function (_super) {
    __extends(UpdateDashboardCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDashboardCommand(input) {
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
    UpdateDashboardCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateDashboardCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDashboardRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDashboardResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDashboardCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDashboardCommand(input, context);
    };
    UpdateDashboardCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDashboardCommand(output, context);
    };
    return UpdateDashboardCommand;
}($Command));
export { UpdateDashboardCommand };
//# sourceMappingURL=UpdateDashboardCommand.js.map