import { __extends } from "tslib";
import { DeleteOrganizationConformancePackRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteOrganizationConformancePackCommand, serializeAws_json1_1DeleteOrganizationConformancePackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from
 * 			all member accounts in that organization. </p>
 *          <p> Only a master account or a delegated administrator account can delete an organization conformance pack.
 * 	When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 			      <p>AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete.
 * 				You cannot update a conformance pack while it is in this state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteOrganizationConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationConformancePackCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOrganizationConformancePackCommand = /** @class */ (function (_super) {
    __extends(DeleteOrganizationConformancePackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOrganizationConformancePackCommand(input) {
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
    DeleteOrganizationConformancePackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteOrganizationConformancePackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOrganizationConformancePackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOrganizationConformancePackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOrganizationConformancePackCommand(input, context);
    };
    DeleteOrganizationConformancePackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOrganizationConformancePackCommand(output, context);
    };
    return DeleteOrganizationConformancePackCommand;
}($Command));
export { DeleteOrganizationConformancePackCommand };
//# sourceMappingURL=DeleteOrganizationConformancePackCommand.js.map