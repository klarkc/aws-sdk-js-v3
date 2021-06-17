import { __extends } from "tslib";
import { RegisterUserRequest, RegisterUserResponse } from "../models/models_1";
import { deserializeAws_restJson1RegisterUserCommand, serializeAws_restJson1RegisterUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity
 * 			and Access Management (IAM) identity or role specified in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RegisterUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RegisterUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new RegisterUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterUserCommandInput} for command's `input` shape.
 * @see {@link RegisterUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterUserCommand = /** @class */ (function (_super) {
    __extends(RegisterUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterUserCommand(input) {
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
    RegisterUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "RegisterUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterUserCommand(input, context);
    };
    RegisterUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterUserCommand(output, context);
    };
    return RegisterUserCommand;
}($Command));
export { RegisterUserCommand };
//# sourceMappingURL=RegisterUserCommand.js.map