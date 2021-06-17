import { __extends } from "tslib";
import { DisassociateResourceRequest, DisassociateResourceResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateResourceCommand, serializeAws_restJson1DisassociateResourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DisassociateResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DisassociateResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new DisassociateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateResourceCommand = /** @class */ (function (_super) {
    __extends(DisassociateResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateResourceCommand(input) {
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
    DisassociateResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "DisassociateResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateResourceCommand(input, context);
    };
    DisassociateResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateResourceCommand(output, context);
    };
    return DisassociateResourceCommand;
}($Command));
export { DisassociateResourceCommand };
//# sourceMappingURL=DisassociateResourceCommand.js.map