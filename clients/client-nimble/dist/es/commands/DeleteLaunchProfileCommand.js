import { __extends } from "tslib";
import { DeleteLaunchProfileRequest, DeleteLaunchProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteLaunchProfileCommand, serializeAws_restJson1DeleteLaunchProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently delete a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLaunchProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteLaunchProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLaunchProfileCommand(input) {
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
    DeleteLaunchProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteLaunchProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLaunchProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLaunchProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLaunchProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLaunchProfileCommand(input, context);
    };
    DeleteLaunchProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLaunchProfileCommand(output, context);
    };
    return DeleteLaunchProfileCommand;
}($Command));
export { DeleteLaunchProfileCommand };
//# sourceMappingURL=DeleteLaunchProfileCommand.js.map