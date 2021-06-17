import { __extends } from "tslib";
import { CreateGatewayRequest, CreateGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGatewayCommand, serializeAws_restJson1CreateGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a gateway, which is a virtual or edge device that delivers industrial data streams
 *       from local servers to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGatewayCommand(input) {
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
    CreateGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "CreateGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGatewayCommand(input, context);
    };
    CreateGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGatewayCommand(output, context);
    };
    return CreateGatewayCommand;
}($Command));
export { CreateGatewayCommand };
//# sourceMappingURL=CreateGatewayCommand.js.map