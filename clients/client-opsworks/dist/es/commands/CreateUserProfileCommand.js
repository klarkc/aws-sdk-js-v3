import { __extends } from "tslib";
import { CreateUserProfileRequest, CreateUserProfileResult } from "../models/models_0";
import { deserializeAws_json1_1CreateUserProfileCommand, serializeAws_json1_1CreateUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new user profile.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new CreateUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserProfileCommandInput} for command's `input` shape.
 * @see {@link CreateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "OpsWorksClient";
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