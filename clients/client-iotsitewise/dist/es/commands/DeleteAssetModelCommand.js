import { __extends } from "tslib";
import { DeleteAssetModelRequest, DeleteAssetModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAssetModelCommand, serializeAws_restJson1DeleteAssetModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an asset model. This action can't be undone. You must delete all assets created
 *       from an asset model before you can delete the model. Also, you can't delete an asset model if
 *       a parent asset model exists that contains a property formula expression that depends on the
 *       asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssetModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssetModelCommand = /** @class */ (function (_super) {
    __extends(DeleteAssetModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssetModelCommand(input) {
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
    DeleteAssetModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DeleteAssetModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssetModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAssetModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssetModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAssetModelCommand(input, context);
    };
    DeleteAssetModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAssetModelCommand(output, context);
    };
    return DeleteAssetModelCommand;
}($Command));
export { DeleteAssetModelCommand };
//# sourceMappingURL=DeleteAssetModelCommand.js.map