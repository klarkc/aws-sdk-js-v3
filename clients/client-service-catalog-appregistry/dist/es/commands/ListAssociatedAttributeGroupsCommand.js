import { __extends } from "tslib";
import { ListAssociatedAttributeGroupsRequest, ListAssociatedAttributeGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssociatedAttributeGroupsCommand, serializeAws_restJson1ListAssociatedAttributeGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAssociatedAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAttributeGroupsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociatedAttributeGroupsCommand = /** @class */ (function (_super) {
    __extends(ListAssociatedAttributeGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssociatedAttributeGroupsCommand(input) {
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
    ListAssociatedAttributeGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "ListAssociatedAttributeGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociatedAttributeGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociatedAttributeGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociatedAttributeGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssociatedAttributeGroupsCommand(input, context);
    };
    ListAssociatedAttributeGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssociatedAttributeGroupsCommand(output, context);
    };
    return ListAssociatedAttributeGroupsCommand;
}($Command));
export { ListAssociatedAttributeGroupsCommand };
//# sourceMappingURL=ListAssociatedAttributeGroupsCommand.js.map