import { __extends } from "tslib";
import { UpdateAssetModelRequest, UpdateAssetModelResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAssetModelCommand, serializeAws_restJson1UpdateAssetModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an asset model and all of the assets that were created from the model. Each asset
 *       created from the model inherits the updated asset model's property and hierarchy definitions.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 *          <important>
 *             <p>This operation overwrites the existing model with the provided model. To avoid deleting
 *         your asset model's properties or hierarchies, you must include their IDs and definitions in
 *         the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p>
 *             <p>If you remove a property from an asset model, AWS IoT SiteWise deletes all previous data for that
 *         property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every
 *         asset associated with that hierarchy. You can't change the type or data type of an existing
 *         property.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssetModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssetModelCommand = /** @class */ (function (_super) {
    __extends(UpdateAssetModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssetModelCommand(input) {
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
    UpdateAssetModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdateAssetModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssetModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAssetModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssetModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAssetModelCommand(input, context);
    };
    UpdateAssetModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAssetModelCommand(output, context);
    };
    return UpdateAssetModelCommand;
}($Command));
export { UpdateAssetModelCommand };
//# sourceMappingURL=UpdateAssetModelCommand.js.map