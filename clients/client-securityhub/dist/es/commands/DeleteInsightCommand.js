import { __extends } from "tslib";
import { DeleteInsightRequest, DeleteInsightResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteInsightCommand, serializeAws_restJson1DeleteInsightCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the insight specified by the <code>InsightArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeleteInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInsightCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInsightCommand = /** @class */ (function (_super) {
    __extends(DeleteInsightCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInsightCommand(input) {
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
    DeleteInsightCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DeleteInsightCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInsightResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInsightCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteInsightCommand(input, context);
    };
    DeleteInsightCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteInsightCommand(output, context);
    };
    return DeleteInsightCommand;
}($Command));
export { DeleteInsightCommand };
//# sourceMappingURL=DeleteInsightCommand.js.map