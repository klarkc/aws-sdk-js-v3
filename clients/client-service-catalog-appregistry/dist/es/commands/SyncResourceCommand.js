import { __extends } from "tslib";
import { SyncResourceRequest, SyncResourceResponse } from "../models/models_0";
import { deserializeAws_restJson1SyncResourceCommand, serializeAws_restJson1SyncResourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Syncs the resource with what is currently recorded in App registry. Specifically, the resource’s App registry system tags are synced with its associated application. The resource is removed if it is not associated with the application. The caller must have permissions to read and update the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, SyncResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, SyncResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new SyncResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SyncResourceCommandInput} for command's `input` shape.
 * @see {@link SyncResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SyncResourceCommand = /** @class */ (function (_super) {
    __extends(SyncResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SyncResourceCommand(input) {
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
    SyncResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "SyncResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SyncResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SyncResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SyncResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SyncResourceCommand(input, context);
    };
    SyncResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SyncResourceCommand(output, context);
    };
    return SyncResourceCommand;
}($Command));
export { SyncResourceCommand };
//# sourceMappingURL=SyncResourceCommand.js.map