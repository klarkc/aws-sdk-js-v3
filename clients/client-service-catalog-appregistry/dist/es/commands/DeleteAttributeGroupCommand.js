import { __extends } from "tslib";
import { DeleteAttributeGroupRequest, DeleteAttributeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAttributeGroupCommand, serializeAws_restJson1DeleteAttributeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an attribute group, specified either by its attribute group ID or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DeleteAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DeleteAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new DeleteAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAttributeGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteAttributeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAttributeGroupCommand(input) {
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
    DeleteAttributeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "DeleteAttributeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAttributeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAttributeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAttributeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAttributeGroupCommand(input, context);
    };
    DeleteAttributeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAttributeGroupCommand(output, context);
    };
    return DeleteAttributeGroupCommand;
}($Command));
export { DeleteAttributeGroupCommand };
//# sourceMappingURL=DeleteAttributeGroupCommand.js.map