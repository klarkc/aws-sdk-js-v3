import { __extends } from "tslib";
import { DeleteOrganizationRequest, DeleteOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteOrganizationCommand, serializeAws_json1_1DeleteOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteOrganizationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteOrganizationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOrganizationCommand = /** @class */ (function (_super) {
    __extends(DeleteOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOrganizationCommand(input) {
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
    DeleteOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DeleteOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOrganizationCommand(input, context);
    };
    DeleteOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOrganizationCommand(output, context);
    };
    return DeleteOrganizationCommand;
}($Command));
export { DeleteOrganizationCommand };
//# sourceMappingURL=DeleteOrganizationCommand.js.map