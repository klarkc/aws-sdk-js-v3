import { __extends } from "tslib";
import { UpdateStudioRequest, UpdateStudioResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateStudioCommand, serializeAws_restJson1UpdateStudioCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStudioCommand = /** @class */ (function (_super) {
    __extends(UpdateStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStudioCommand(input) {
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
    UpdateStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "UpdateStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStudioRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStudioResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateStudioCommand(input, context);
    };
    UpdateStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateStudioCommand(output, context);
    };
    return UpdateStudioCommand;
}($Command));
export { UpdateStudioCommand };
//# sourceMappingURL=UpdateStudioCommand.js.map