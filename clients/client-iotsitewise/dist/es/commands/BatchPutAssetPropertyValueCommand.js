import { __extends } from "tslib";
import { BatchPutAssetPropertyValueRequest, BatchPutAssetPropertyValueResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchPutAssetPropertyValueCommand, serializeAws_restJson1BatchPutAssetPropertyValueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value
 *       (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
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
 *          <important>
 *             <p>With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more
 *         than 7 days in the past and no more than 10 minutes in the future. AWS IoT SiteWise rejects timestamps
 *         outside of the inclusive range of [-7 days, +10 minutes] and returns a
 *           <code>TimestampOutOfRangeException</code> error.</p>
 *             <p>For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
 *         TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>,
 *         then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p>
 *          </important>
 *          <p>AWS IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the
 *       <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchPutAssetPropertyValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutAssetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link BatchPutAssetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchPutAssetPropertyValueCommand = /** @class */ (function (_super) {
    __extends(BatchPutAssetPropertyValueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchPutAssetPropertyValueCommand(input) {
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
    BatchPutAssetPropertyValueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "BatchPutAssetPropertyValueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchPutAssetPropertyValueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchPutAssetPropertyValueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchPutAssetPropertyValueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchPutAssetPropertyValueCommand(input, context);
    };
    BatchPutAssetPropertyValueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchPutAssetPropertyValueCommand(output, context);
    };
    return BatchPutAssetPropertyValueCommand;
}($Command));
export { BatchPutAssetPropertyValueCommand };
//# sourceMappingURL=BatchPutAssetPropertyValueCommand.js.map