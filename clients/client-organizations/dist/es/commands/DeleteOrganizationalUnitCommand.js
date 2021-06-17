import { __extends } from "tslib";
import { DeleteOrganizationalUnitRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteOrganizationalUnitCommand, serializeAws_json1_1DeleteOrganizationalUnitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove
 *             all accounts and child OUs from the OU that you want to delete.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeleteOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeleteOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeleteOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOrganizationalUnitCommand = /** @class */ (function (_super) {
    __extends(DeleteOrganizationalUnitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOrganizationalUnitCommand(input) {
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
    DeleteOrganizationalUnitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DeleteOrganizationalUnitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOrganizationalUnitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOrganizationalUnitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOrganizationalUnitCommand(input, context);
    };
    DeleteOrganizationalUnitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOrganizationalUnitCommand(output, context);
    };
    return DeleteOrganizationalUnitCommand;
}($Command));
export { DeleteOrganizationalUnitCommand };
//# sourceMappingURL=DeleteOrganizationalUnitCommand.js.map