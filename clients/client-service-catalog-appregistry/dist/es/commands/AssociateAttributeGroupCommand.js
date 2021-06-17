import { __extends } from "tslib";
import { AssociateAttributeGroupRequest, AssociateAttributeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateAttributeGroupCommand, serializeAws_restJson1AssociateAttributeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an attribute group with an application to augment the application's metadata
 *       with the group's attributes. This feature enables applications to be described with
 *       user-defined details that are machine-readable, such as third-party integrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new AssociateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateAttributeGroupCommand = /** @class */ (function (_super) {
    __extends(AssociateAttributeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateAttributeGroupCommand(input) {
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
    AssociateAttributeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "AssociateAttributeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateAttributeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateAttributeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateAttributeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateAttributeGroupCommand(input, context);
    };
    AssociateAttributeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateAttributeGroupCommand(output, context);
    };
    return AssociateAttributeGroupCommand;
}($Command));
export { AssociateAttributeGroupCommand };
//# sourceMappingURL=AssociateAttributeGroupCommand.js.map