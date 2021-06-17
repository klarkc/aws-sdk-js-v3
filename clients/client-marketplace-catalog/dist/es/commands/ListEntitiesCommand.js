import { __extends } from "tslib";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEntitiesCommand, serializeAws_restJson1ListEntitiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the list of entities of a given type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListEntitiesCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListEntitiesCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEntitiesCommand = /** @class */ (function (_super) {
    __extends(ListEntitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEntitiesCommand(input) {
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
    ListEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCatalogClient";
        var commandName = "ListEntitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEntitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEntitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEntitiesCommand(input, context);
    };
    ListEntitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEntitiesCommand(output, context);
    };
    return ListEntitiesCommand;
}($Command));
export { ListEntitiesCommand };
//# sourceMappingURL=ListEntitiesCommand.js.map