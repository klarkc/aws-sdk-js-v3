import { __extends } from "tslib";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserCommand, serializeAws_json1_1CreateUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateUserCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateUserCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "WorkMailClient";
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