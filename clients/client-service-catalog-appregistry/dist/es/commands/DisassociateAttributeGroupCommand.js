import { __extends } from "tslib";
import { DisassociateAttributeGroupRequest, DisassociateAttributeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateAttributeGroupCommand, serializeAws_restJson1DisassociateAttributeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DisassociateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DisassociateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new DisassociateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateAttributeGroupCommand = /** @class */ (function (_super) {
    __extends(DisassociateAttributeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateAttributeGroupCommand(input) {
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
    DisassociateAttributeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "DisassociateAttributeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateAttributeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateAttributeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateAttributeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateAttributeGroupCommand(input, context);
    };
    DisassociateAttributeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateAttributeGroupCommand(output, context);
    };
    return DisassociateAttributeGroupCommand;
}($Command));
export { DisassociateAttributeGroupCommand };
//# sourceMappingURL=DisassociateAttributeGroupCommand.js.map