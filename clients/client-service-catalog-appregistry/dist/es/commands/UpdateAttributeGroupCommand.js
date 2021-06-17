import { __extends } from "tslib";
import { UpdateAttributeGroupRequest, UpdateAttributeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAttributeGroupCommand, serializeAws_restJson1UpdateAttributeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing attribute group with new details. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, UpdateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, UpdateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new UpdateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAttributeGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateAttributeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAttributeGroupCommand(input) {
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
    UpdateAttributeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "UpdateAttributeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAttributeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAttributeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAttributeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAttributeGroupCommand(input, context);
    };
    UpdateAttributeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAttributeGroupCommand(output, context);
    };
    return UpdateAttributeGroupCommand;
}($Command));
export { UpdateAttributeGroupCommand };
//# sourceMappingURL=UpdateAttributeGroupCommand.js.map