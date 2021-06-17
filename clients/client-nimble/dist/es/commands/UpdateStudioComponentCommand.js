import { __extends } from "tslib";
import { UpdateStudioComponentRequest, UpdateStudioComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateStudioComponentCommand, serializeAws_restJson1UpdateStudioComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStudioComponentCommand = /** @class */ (function (_super) {
    __extends(UpdateStudioComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStudioComponentCommand(input) {
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
    UpdateStudioComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "UpdateStudioComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStudioComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStudioComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStudioComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateStudioComponentCommand(input, context);
    };
    UpdateStudioComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateStudioComponentCommand(output, context);
    };
    return UpdateStudioComponentCommand;
}($Command));
export { UpdateStudioComponentCommand };
//# sourceMappingURL=UpdateStudioComponentCommand.js.map