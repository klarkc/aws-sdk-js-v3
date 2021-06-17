import { __extends } from "tslib";
import { ListAssetsRequest, ListAssetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssetsCommand, serializeAws_restJson1ListAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of asset summaries.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List assets based on a specific asset model.</p>
 *             </li>
 *             <li>
 *                <p>List top-level assets.</p>
 *             </li>
 *          </ul>
 *          <p>You can't use this operation to list all assets. To retrieve summaries for all of your
 *       assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all
 *       assets for each asset model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssetsCommand = /** @class */ (function (_super) {
    __extends(ListAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssetsCommand(input) {
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
    ListAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssetsCommand(input, context);
    };
    ListAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssetsCommand(output, context);
    };
    return ListAssetsCommand;
}($Command));
export { ListAssetsCommand };
//# sourceMappingURL=ListAssetsCommand.js.map