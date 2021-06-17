import { __extends } from "tslib";
import { UpdateUserProfileRequest, UpdateUserProfileResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateUserProfileCommand, serializeAws_json1_1UpdateUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
 *       Information in the user profile is displayed wherever the user's information appears to other
 *       users in AWS CodeStar. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new UpdateUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateUserProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserProfileCommand(input) {
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
    UpdateUserProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "UpdateUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUserProfileCommand(input, context);
    };
    UpdateUserProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUserProfileCommand(output, context);
    };
    return UpdateUserProfileCommand;
}($Command));
export { UpdateUserProfileCommand };
//# sourceMappingURL=UpdateUserProfileCommand.js.map