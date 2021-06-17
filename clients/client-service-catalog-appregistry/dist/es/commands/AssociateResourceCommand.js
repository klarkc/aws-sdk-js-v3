import { __extends } from "tslib";
import { AssociateResourceRequest, AssociateResourceResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateResourceCommand, serializeAws_restJson1AssociateResourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a resource with an application. Both the resource and the application can be specified either by ID or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, AssociateResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, AssociateResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new AssociateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateResourceCommand = /** @class */ (function (_super) {
    __extends(AssociateResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateResourceCommand(input) {
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
    AssociateResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "AssociateResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateResourceCommand(input, context);
    };
    AssociateResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateResourceCommand(output, context);
    };
    return AssociateResourceCommand;
}($Command));
export { AssociateResourceCommand };
//# sourceMappingURL=AssociateResourceCommand.js.map