import { __extends } from "tslib";
import { DeleteAssetRequest, DeleteAssetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAssetCommand, serializeAws_restJson1DeleteAssetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and
 *         models</a> in the <i>AWS IoT SiteWise User Guide</i>.
 *       </p>
 *          <note>
 *             <p>You can't delete an asset that's associated to another asset. For more information, see
 *           <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssetCommand = /** @class */ (function (_super) {
    __extends(DeleteAssetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssetCommand(input) {
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
    DeleteAssetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DeleteAssetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAssetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAssetCommand(input, context);
    };
    DeleteAssetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAssetCommand(output, context);
    };
    return DeleteAssetCommand;
}($Command));
export { DeleteAssetCommand };
//# sourceMappingURL=DeleteAssetCommand.js.map