import { __extends } from "tslib";
import { GetInterpolatedAssetPropertyValuesRequest, GetInterpolatedAssetPropertyValuesResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand, serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get interpolated values for an asset property for a specified time interval, during a
 *       period of time. For example, you can use the this operation to return the interpolated temperature values for a wind turbine every 24 hours
 *       over a duration of 7 days.</p>
 *          <note>
 *             <p>This API isn't available in China (Beijing).</p>
 *          </note>
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
 * import { IoTSiteWiseClient, GetInterpolatedAssetPropertyValuesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetInterpolatedAssetPropertyValuesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new GetInterpolatedAssetPropertyValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInterpolatedAssetPropertyValuesCommandInput} for command's `input` shape.
 * @see {@link GetInterpolatedAssetPropertyValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInterpolatedAssetPropertyValuesCommand = /** @class */ (function (_super) {
    __extends(GetInterpolatedAssetPropertyValuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInterpolatedAssetPropertyValuesCommand(input) {
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
    GetInterpolatedAssetPropertyValuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "GetInterpolatedAssetPropertyValuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInterpolatedAssetPropertyValuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInterpolatedAssetPropertyValuesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInterpolatedAssetPropertyValuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand(input, context);
    };
    GetInterpolatedAssetPropertyValuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand(output, context);
    };
    return GetInterpolatedAssetPropertyValuesCommand;
}($Command));
export { GetInterpolatedAssetPropertyValuesCommand };
//# sourceMappingURL=GetInterpolatedAssetPropertyValuesCommand.js.map