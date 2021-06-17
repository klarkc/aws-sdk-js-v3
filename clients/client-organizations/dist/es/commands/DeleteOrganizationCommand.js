import { __extends } from "tslib";
import { deserializeAws_json1_1DeleteOrganizationCommand, serializeAws_json1_1DeleteOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the organization. You can delete an organization only by using credentials
 *             from the management account. The organization must be empty of member accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeleteOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeleteOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeleteOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "OrganizationsClient";
        var commandName = "DeleteOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: function (output) { return output; },
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