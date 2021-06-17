import { __extends } from "tslib";
import { GetAssetPropertyValueHistoryRequest, GetAssetPropertyValueHistoryResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAssetPropertyValueHistoryCommand, serializeAws_restJson1GetAssetPropertyValueHistoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying
 *         historical values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 *          <p>To identify an asset property, you must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
 *             </li>
 *             <li>
 *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
 *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetAssetPropertyValueHistoryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetAssetPropertyValueHistoryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new GetAssetPropertyValueHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssetPropertyValueHistoryCommandInput} for command's `input` shape.
 * @see {@link GetAssetPropertyValueHistoryCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssetPropertyValueHistoryCommand = /** @class */ (function (_super) {
    __extends(GetAssetPropertyValueHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssetPropertyValueHistoryCommand(input) {
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
    GetAssetPropertyValueHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "GetAssetPropertyValueHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssetPropertyValueHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssetPropertyValueHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssetPropertyValueHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAssetPropertyValueHistoryCommand(input, context);
    };
    GetAssetPropertyValueHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAssetPropertyValueHistoryCommand(output, context);
    };
    return GetAssetPropertyValueHistoryCommand;
}($Command));
export { GetAssetPropertyValueHistoryCommand };
//# sourceMappingURL=GetAssetPropertyValueHistoryCommand.js.map