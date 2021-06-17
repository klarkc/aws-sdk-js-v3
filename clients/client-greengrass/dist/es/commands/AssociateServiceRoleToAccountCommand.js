import { __extends } from "tslib";
import { AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateServiceRoleToAccountCommand, serializeAws_restJson1AssociateServiceRoleToAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateServiceRoleToAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateServiceRoleToAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new AssociateServiceRoleToAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateServiceRoleToAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceRoleToAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateServiceRoleToAccountCommand = /** @class */ (function (_super) {
    __extends(AssociateServiceRoleToAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateServiceRoleToAccountCommand(input) {
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
    AssociateServiceRoleToAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "AssociateServiceRoleToAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateServiceRoleToAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateServiceRoleToAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateServiceRoleToAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateServiceRoleToAccountCommand(input, context);
    };
    AssociateServiceRoleToAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateServiceRoleToAccountCommand(output, context);
    };
    return AssociateServiceRoleToAccountCommand;
}($Command));
export { AssociateServiceRoleToAccountCommand };
//# sourceMappingURL=AssociateServiceRoleToAccountCommand.js.map