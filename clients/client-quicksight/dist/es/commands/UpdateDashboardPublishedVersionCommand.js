import { __extends } from "tslib";
import { UpdateDashboardPublishedVersionRequest, UpdateDashboardPublishedVersionResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateDashboardPublishedVersionCommand, serializeAws_restJson1UpdateDashboardPublishedVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the published version of a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardPublishedVersionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardPublishedVersionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDashboardPublishedVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDashboardPublishedVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardPublishedVersionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDashboardPublishedVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateDashboardPublishedVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDashboardPublishedVersionCommand(input) {
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
    UpdateDashboardPublishedVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateDashboardPublishedVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDashboardPublishedVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDashboardPublishedVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDashboardPublishedVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDashboardPublishedVersionCommand(input, context);
    };
    UpdateDashboardPublishedVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDashboardPublishedVersionCommand(output, context);
    };
    return UpdateDashboardPublishedVersionCommand;
}($Command));
export { UpdateDashboardPublishedVersionCommand };
//# sourceMappingURL=UpdateDashboardPublishedVersionCommand.js.map