import { __extends } from "tslib";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserCommand, serializeAws_json1_1CreateUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a user and associates them with an existing file transfer protocol-enabled server.
 *       You can only create and associate users with servers that have the
 *         <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for
 *         <code>CreateUser</code>, you can specify the user name, set the home directory, store the
 *       user's public key, and assign the user's AWS Identity and Access Management (IAM)
 *       role. You can also optionally add a scope-down policy, and assign metadata with tags that can
 *       be used to group and search for users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserCommand = /** @class */ (function (_super) {
    __extends(CreateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserCommand(input) {
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
    CreateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "CreateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserCommand(input, context);
    };
    CreateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserCommand(output, context);
    };
    return CreateUserCommand;
}($Command));
export { CreateUserCommand };
//# sourceMappingURL=CreateUserCommand.js.map