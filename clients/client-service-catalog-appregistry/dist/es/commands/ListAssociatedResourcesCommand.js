import { __extends } from "tslib";
import { ListAssociatedResourcesRequest, ListAssociatedResourcesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssociatedResourcesCommand, serializeAws_restJson1ListAssociatedResourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all resources that are associated with specified application. Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAssociatedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociatedResourcesCommand = /** @class */ (function (_super) {
    __extends(ListAssociatedResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssociatedResourcesCommand(input) {
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
    ListAssociatedResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "ListAssociatedResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociatedResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociatedResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociatedResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssociatedResourcesCommand(input, context);
    };
    ListAssociatedResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssociatedResourcesCommand(output, context);
    };
    return ListAssociatedResourcesCommand;
}($Command));
export { ListAssociatedResourcesCommand };
//# sourceMappingURL=ListAssociatedResourcesCommand.js.map