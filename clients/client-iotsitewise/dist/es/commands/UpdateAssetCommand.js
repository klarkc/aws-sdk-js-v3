import { __extends } from "tslib";
import { UpdateAssetRequest, UpdateAssetResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAssetCommand, serializeAws_restJson1UpdateAssetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssetCommand = /** @class */ (function (_super) {
    __extends(UpdateAssetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssetCommand(input) {
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
    UpdateAssetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdateAssetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAssetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAssetCommand(input, context);
    };
    UpdateAssetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAssetCommand(output, context);
    };
    return UpdateAssetCommand;
}($Command));
export { UpdateAssetCommand };
//# sourceMappingURL=UpdateAssetCommand.js.map