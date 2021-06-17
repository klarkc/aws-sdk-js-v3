import { __extends } from "tslib";
import { StartGatewayInput, StartGatewayOutput } from "../models/models_0";
import { deserializeAws_json1_1StartGatewayCommand, serializeAws_json1_1StartGatewayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>).
 *          After the gateway starts, you can then make other API calls, your applications can read
 *          from or write to the gateway's storage volumes and you will be able to take snapshot
 *          backups.</p>
 *
 *          <note>
 *             <p>When you make a request, you will get a 200 OK success response immediately. However,
 *             it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
 *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *
 *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new StartGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartGatewayCommandInput} for command's `input` shape.
 * @see {@link StartGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartGatewayCommand = /** @class */ (function (_super) {
    __extends(StartGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartGatewayCommand(input) {
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
    StartGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "StartGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartGatewayOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartGatewayCommand(input, context);
    };
    StartGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartGatewayCommand(output, context);
    };
    return StartGatewayCommand;
}($Command));
export { StartGatewayCommand };
//# sourceMappingURL=StartGatewayCommand.js.map