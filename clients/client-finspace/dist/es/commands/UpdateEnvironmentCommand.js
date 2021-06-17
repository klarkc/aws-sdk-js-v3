import { __extends } from "tslib";
import { UpdateEnvironmentRequest, UpdateEnvironmentResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateEnvironmentCommand, serializeAws_restJson1UpdateEnvironmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update your FinSpace environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEnvironmentCommand = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEnvironmentCommand(input) {
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
    UpdateEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceClient";
        var commandName = "UpdateEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEnvironmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEnvironmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEnvironmentCommand(input, context);
    };
    UpdateEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEnvironmentCommand(output, context);
    };
    return UpdateEnvironmentCommand;
}($Command));
export { UpdateEnvironmentCommand };
//# sourceMappingURL=UpdateEnvironmentCommand.js.map