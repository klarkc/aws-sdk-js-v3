import { __extends } from "tslib";
import { UpdateAuditStreamConfigurationRequest, UpdateAuditStreamConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAuditStreamConfigurationCommand, serializeAws_restJson1UpdateAuditStreamConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the audit stream configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateAuditStreamConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateAuditStreamConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateAuditStreamConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAuditStreamConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAuditStreamConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAuditStreamConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateAuditStreamConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAuditStreamConfigurationCommand(input) {
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
    UpdateAuditStreamConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "UpdateAuditStreamConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAuditStreamConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAuditStreamConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAuditStreamConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAuditStreamConfigurationCommand(input, context);
    };
    UpdateAuditStreamConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAuditStreamConfigurationCommand(output, context);
    };
    return UpdateAuditStreamConfigurationCommand;
}($Command));
export { UpdateAuditStreamConfigurationCommand };
//# sourceMappingURL=UpdateAuditStreamConfigurationCommand.js.map