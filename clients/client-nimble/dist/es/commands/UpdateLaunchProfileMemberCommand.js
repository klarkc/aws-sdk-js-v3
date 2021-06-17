import { __extends } from "tslib";
import { UpdateLaunchProfileMemberRequest, UpdateLaunchProfileMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLaunchProfileMemberCommand, serializeAws_restJson1UpdateLaunchProfileMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a user persona in launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLaunchProfileMemberCommand = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLaunchProfileMemberCommand(input) {
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
    UpdateLaunchProfileMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "UpdateLaunchProfileMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLaunchProfileMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLaunchProfileMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLaunchProfileMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLaunchProfileMemberCommand(input, context);
    };
    UpdateLaunchProfileMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLaunchProfileMemberCommand(output, context);
    };
    return UpdateLaunchProfileMemberCommand;
}($Command));
export { UpdateLaunchProfileMemberCommand };
//# sourceMappingURL=UpdateLaunchProfileMemberCommand.js.map