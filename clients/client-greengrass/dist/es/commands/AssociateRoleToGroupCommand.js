import { __extends } from "tslib";
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateRoleToGroupCommand, serializeAws_restJson1AssociateRoleToGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateRoleToGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateRoleToGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new AssociateRoleToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRoleToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateRoleToGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateRoleToGroupCommand = /** @class */ (function (_super) {
    __extends(AssociateRoleToGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateRoleToGroupCommand(input) {
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
    AssociateRoleToGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "AssociateRoleToGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateRoleToGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateRoleToGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateRoleToGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateRoleToGroupCommand(input, context);
    };
    AssociateRoleToGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateRoleToGroupCommand(output, context);
    };
    return AssociateRoleToGroupCommand;
}($Command));
export { AssociateRoleToGroupCommand };
//# sourceMappingURL=AssociateRoleToGroupCommand.js.map