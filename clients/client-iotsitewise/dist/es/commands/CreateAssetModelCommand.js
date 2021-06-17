import { __extends } from "tslib";
import { CreateAssetModelRequest, CreateAssetModelResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAssetModelCommand, serializeAws_restJson1CreateAssetModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an asset model from specified property and hierarchy definitions. You create
 *       assets from asset models. With asset models, you can easily create assets of the same type
 *       that have standardized definitions. Each asset created from a model inherits the asset model's
 *       property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssetModelCommandInput} for command's `input` shape.
 * @see {@link CreateAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssetModelCommand = /** @class */ (function (_super) {
    __extends(CreateAssetModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAssetModelCommand(input) {
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
    CreateAssetModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "CreateAssetModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssetModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssetModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssetModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAssetModelCommand(input, context);
    };
    CreateAssetModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAssetModelCommand(output, context);
    };
    return CreateAssetModelCommand;
}($Command));
export { CreateAssetModelCommand };
//# sourceMappingURL=CreateAssetModelCommand.js.map