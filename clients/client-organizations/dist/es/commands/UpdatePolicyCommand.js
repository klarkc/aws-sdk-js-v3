import { __extends } from "tslib";
import { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdatePolicyCommand, serializeAws_json1_1UpdatePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing policy with a new name, description, or content. If you don't
 *             supply any parameter, that value remains unchanged. You can't change a policy's
 *             type.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdatePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdatePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePolicyCommand = /** @class */ (function (_super) {
    __extends(UpdatePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePolicyCommand(input) {
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
    UpdatePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "UpdatePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePolicyCommand(input, context);
    };
    UpdatePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePolicyCommand(output, context);
    };
    return UpdatePolicyCommand;
}($Command));
export { UpdatePolicyCommand };
//# sourceMappingURL=UpdatePolicyCommand.js.map