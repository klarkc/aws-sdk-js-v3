import { __extends } from "tslib";
import { DisableAWSOrganizationsAccessInput, DisableAWSOrganizationsAccessOutput } from "../models/models_0";
import { deserializeAws_json1_1DisableAWSOrganizationsAccessCommand, serializeAws_json1_1DisableAWSOrganizationsAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disable portfolio sharing through AWS Organizations feature. This feature will not
 *          delete your current shares but it will prevent you from creating new shares throughout your
 *          organization. Current shares will not be in sync with your organization structure if it
 *          changes after calling this API. This API can only be called by the management  account in
 *          the organization.</p>
 *          <p>This API can't be invoked if there are active delegated administrators in the organization.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisableAWSOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAWSOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DisableAWSOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableAWSOrganizationsAccessCommand = /** @class */ (function (_super) {
    __extends(DisableAWSOrganizationsAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableAWSOrganizationsAccessCommand(input) {
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
    DisableAWSOrganizationsAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DisableAWSOrganizationsAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableAWSOrganizationsAccessInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisableAWSOrganizationsAccessOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableAWSOrganizationsAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableAWSOrganizationsAccessCommand(input, context);
    };
    DisableAWSOrganizationsAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableAWSOrganizationsAccessCommand(output, context);
    };
    return DisableAWSOrganizationsAccessCommand;
}($Command));
export { DisableAWSOrganizationsAccessCommand };
//# sourceMappingURL=DisableAWSOrganizationsAccessCommand.js.map