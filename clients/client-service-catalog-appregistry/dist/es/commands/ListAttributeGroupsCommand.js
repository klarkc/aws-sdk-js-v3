import { __extends } from "tslib";
import { ListAttributeGroupsRequest, ListAttributeGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAttributeGroupsCommand, serializeAws_restJson1ListAttributeGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all attribute groups which you have access to. Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAttributeGroupsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttributeGroupsCommand = /** @class */ (function (_super) {
    __extends(ListAttributeGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAttributeGroupsCommand(input) {
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
    ListAttributeGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "ListAttributeGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAttributeGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAttributeGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAttributeGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAttributeGroupsCommand(input, context);
    };
    ListAttributeGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAttributeGroupsCommand(output, context);
    };
    return ListAttributeGroupsCommand;
}($Command));
export { ListAttributeGroupsCommand };
//# sourceMappingURL=ListAttributeGroupsCommand.js.map