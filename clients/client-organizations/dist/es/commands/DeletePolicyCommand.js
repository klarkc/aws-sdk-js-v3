import { __extends } from "tslib";
import { DeletePolicyRequest } from "../models/models_0";
import { deserializeAws_json1_1DeletePolicyCommand, serializeAws_json1_1DeletePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified policy from your organization. Before you perform this
 *             operation, you must first detach the policy from all organizational units (OUs), roots,
 *             and accounts.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeletePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeletePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePolicyCommand = /** @class */ (function (_super) {
    __extends(DeletePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePolicyCommand(input) {
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
    DeletePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DeletePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePolicyCommand(input, context);
    };
    DeletePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePolicyCommand(output, context);
    };
    return DeletePolicyCommand;
}($Command));
export { DeletePolicyCommand };
//# sourceMappingURL=DeletePolicyCommand.js.map