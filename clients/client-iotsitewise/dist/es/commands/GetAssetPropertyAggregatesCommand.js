import { __extends } from "tslib";
import { GetAssetPropertyAggregatesRequest, GetAssetPropertyAggregatesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAssetPropertyAggregatesCommand, serializeAws_restJson1GetAssetPropertyAggregatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying
 *         aggregates</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
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
 * import { IoTSiteWiseClient, GetAssetPropertyAggregatesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetAssetPropertyAggregatesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new GetAssetPropertyAggregatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssetPropertyAggregatesCommandInput} for command's `input` shape.
 * @see {@link GetAssetPropertyAggregatesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssetPropertyAggregatesCommand = /** @class */ (function (_super) {
    __extends(GetAssetPropertyAggregatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssetPropertyAggregatesCommand(input) {
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
    GetAssetPropertyAggregatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "GetAssetPropertyAggregatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssetPropertyAggregatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssetPropertyAggregatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssetPropertyAggregatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAssetPropertyAggregatesCommand(input, context);
    };
    GetAssetPropertyAggregatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAssetPropertyAggregatesCommand(output, context);
    };
    return GetAssetPropertyAggregatesCommand;
}($Command));
export { GetAssetPropertyAggregatesCommand };
//# sourceMappingURL=GetAssetPropertyAggregatesCommand.js.map