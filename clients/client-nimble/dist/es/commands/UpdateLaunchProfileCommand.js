import { __extends } from "tslib";
import { UpdateLaunchProfileRequest, UpdateLaunchProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLaunchProfileCommand, serializeAws_restJson1UpdateLaunchProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLaunchProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLaunchProfileCommand(input) {
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
    UpdateLaunchProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "UpdateLaunchProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLaunchProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLaunchProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLaunchProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLaunchProfileCommand(input, context);
    };
    UpdateLaunchProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLaunchProfileCommand(output, context);
    };
    return UpdateLaunchProfileCommand;
}($Command));
export { UpdateLaunchProfileCommand };
//# sourceMappingURL=UpdateLaunchProfileCommand.js.map