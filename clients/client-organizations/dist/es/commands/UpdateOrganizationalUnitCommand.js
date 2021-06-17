import { __extends } from "tslib";
import { UpdateOrganizationalUnitRequest, UpdateOrganizationalUnitResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateOrganizationalUnitCommand, serializeAws_json1_1UpdateOrganizationalUnitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child
 *             OUs and accounts remain in place, and any attached policies of the OU remain
 *             attached.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new UpdateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOrganizationalUnitCommand = /** @class */ (function (_super) {
    __extends(UpdateOrganizationalUnitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateOrganizationalUnitCommand(input) {
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
    UpdateOrganizationalUnitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "UpdateOrganizationalUnitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOrganizationalUnitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOrganizationalUnitResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOrganizationalUnitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateOrganizationalUnitCommand(input, context);
    };
    UpdateOrganizationalUnitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateOrganizationalUnitCommand(output, context);
    };
    return UpdateOrganizationalUnitCommand;
}($Command));
export { UpdateOrganizationalUnitCommand };
//# sourceMappingURL=UpdateOrganizationalUnitCommand.js.map