import { __extends } from "tslib";
import { UpdateStandardsControlRequest, UpdateStandardsControlResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateStandardsControlCommand, serializeAws_restJson1UpdateStandardsControlCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to control whether an individual security standard control is enabled or
 *          disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateStandardsControlCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateStandardsControlCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateStandardsControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStandardsControlCommandInput} for command's `input` shape.
 * @see {@link UpdateStandardsControlCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStandardsControlCommand = /** @class */ (function (_super) {
    __extends(UpdateStandardsControlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStandardsControlCommand(input) {
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
    UpdateStandardsControlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "UpdateStandardsControlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStandardsControlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStandardsControlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStandardsControlCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateStandardsControlCommand(input, context);
    };
    UpdateStandardsControlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateStandardsControlCommand(output, context);
    };
    return UpdateStandardsControlCommand;
}($Command));
export { UpdateStandardsControlCommand };
//# sourceMappingURL=UpdateStandardsControlCommand.js.map