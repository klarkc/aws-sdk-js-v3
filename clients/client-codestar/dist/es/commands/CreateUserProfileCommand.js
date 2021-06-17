import { __extends } from "tslib";
import { CreateUserProfileRequest, CreateUserProfileResult } from "../models/models_0";
import { deserializeAws_json1_1CreateUserProfileCommand, serializeAws_json1_1CreateUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a profile for a user that includes user preferences, such as the display name
 *       and email address assocciated with the user, in AWS CodeStar. The user profile is not
 *       project-specific. Information in the user profile is displayed wherever the user's information
 *       appears to other users in AWS CodeStar.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, CreateUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, CreateUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new CreateUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserProfileCommandInput} for command's `input` shape.
 * @see {@link CreateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserProfileCommand = /** @class */ (function (_super) {
    __extends(CreateUserProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserProfileCommand(input) {
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
    CreateUserProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "CreateUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserProfileCommand(input, context);
    };
    CreateUserProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserProfileCommand(output, context);
    };
    return CreateUserProfileCommand;
}($Command));
export { CreateUserProfileCommand };
//# sourceMappingURL=CreateUserProfileCommand.js.map