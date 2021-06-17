import { __extends } from "tslib";
import { ListChangeSetsRequest, ListChangeSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListChangeSetsCommand, serializeAws_restJson1ListChangeSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of change sets owned by the account being used to make the call. You
 *             can filter this list by providing any combination of <code>entityId</code>,
 *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
 *             operation applies a logical AND between the filters.</p>
 *
 *         <p>You can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListChangeSetsCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListChangeSetsCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChangeSetsCommand = /** @class */ (function (_super) {
    __extends(ListChangeSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListChangeSetsCommand(input) {
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
    ListChangeSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCatalogClient";
        var commandName = "ListChangeSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListChangeSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListChangeSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListChangeSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListChangeSetsCommand(input, context);
    };
    ListChangeSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListChangeSetsCommand(output, context);
    };
    return ListChangeSetsCommand;
}($Command));
export { ListChangeSetsCommand };
//# sourceMappingURL=ListChangeSetsCommand.js.map