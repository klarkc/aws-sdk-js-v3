import { __extends } from "tslib";
import { UpdateInsightRequest, UpdateInsightResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateInsightCommand, serializeAws_restJson1UpdateInsightCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the Security Hub insight identified by the specified insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInsightCommandInput} for command's `input` shape.
 * @see {@link UpdateInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInsightCommand = /** @class */ (function (_super) {
    __extends(UpdateInsightCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInsightCommand(input) {
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
    UpdateInsightCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "UpdateInsightCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateInsightResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInsightCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateInsightCommand(input, context);
    };
    UpdateInsightCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateInsightCommand(output, context);
    };
    return UpdateInsightCommand;
}($Command));
export { UpdateInsightCommand };
//# sourceMappingURL=UpdateInsightCommand.js.map