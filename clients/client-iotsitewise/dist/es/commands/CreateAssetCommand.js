import { __extends } from "tslib";
import { CreateAssetRequest, CreateAssetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAssetCommand, serializeAws_restJson1CreateAssetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssetCommandInput} for command's `input` shape.
 * @see {@link CreateAssetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssetCommand = /** @class */ (function (_super) {
    __extends(CreateAssetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAssetCommand(input) {
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
    CreateAssetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "CreateAssetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAssetCommand(input, context);
    };
    CreateAssetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAssetCommand(output, context);
    };
    return CreateAssetCommand;
}($Command));
export { CreateAssetCommand };
//# sourceMappingURL=CreateAssetCommand.js.map