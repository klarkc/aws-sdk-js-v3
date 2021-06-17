import { __extends } from "tslib";
import { ListDevicesRequest, ListDevicesResponse } from "../models/models_2";
import { deserializeAws_json1_1ListDevicesCommand, serializeAws_json1_1ListDevicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDevicesCommand = /** @class */ (function (_super) {
    __extends(ListDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDevicesCommand(input) {
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
    ListDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDevicesCommand(input, context);
    };
    ListDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDevicesCommand(output, context);
    };
    return ListDevicesCommand;
}($Command));
export { ListDevicesCommand };
//# sourceMappingURL=ListDevicesCommand.js.map