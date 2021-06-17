import { __extends } from "tslib";
import { DeleteLaunchProfileMemberRequest, DeleteLaunchProfileMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteLaunchProfileMemberCommand, serializeAws_restJson1DeleteLaunchProfileMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a user from launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLaunchProfileMemberCommand = /** @class */ (function (_super) {
    __extends(DeleteLaunchProfileMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLaunchProfileMemberCommand(input) {
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
    DeleteLaunchProfileMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteLaunchProfileMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLaunchProfileMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLaunchProfileMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLaunchProfileMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLaunchProfileMemberCommand(input, context);
    };
    DeleteLaunchProfileMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLaunchProfileMemberCommand(output, context);
    };
    return DeleteLaunchProfileMemberCommand;
}($Command));
export { DeleteLaunchProfileMemberCommand };
//# sourceMappingURL=DeleteLaunchProfileMemberCommand.js.map