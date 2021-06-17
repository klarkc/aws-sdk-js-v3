import { __extends } from "tslib";
import { ListAssociatedAssetsRequest, ListAssociatedAssetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssociatedAssetsCommand, serializeAws_restJson1ListAssociatedAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of associated assets.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
 *             </li>
 *             <li>
 *                <p>List an asset's parent asset.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssociatedAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssociatedAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssociatedAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociatedAssetsCommand = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssociatedAssetsCommand(input) {
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
    ListAssociatedAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListAssociatedAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociatedAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociatedAssetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociatedAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssociatedAssetsCommand(input, context);
    };
    ListAssociatedAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssociatedAssetsCommand(output, context);
    };
    return ListAssociatedAssetsCommand;
}($Command));
export { ListAssociatedAssetsCommand };
//# sourceMappingURL=ListAssociatedAssetsCommand.js.map