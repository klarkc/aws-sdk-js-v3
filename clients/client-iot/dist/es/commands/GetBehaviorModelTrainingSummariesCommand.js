import { __extends } from "tslib";
import { GetBehaviorModelTrainingSummariesRequest, GetBehaviorModelTrainingSummariesResponse, } from "../models/models_1";
import { deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand, serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Returns a Device Defender's ML Detect Security Profile training model's status.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBehaviorModelTrainingSummariesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBehaviorModelTrainingSummariesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetBehaviorModelTrainingSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBehaviorModelTrainingSummariesCommandInput} for command's `input` shape.
 * @see {@link GetBehaviorModelTrainingSummariesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBehaviorModelTrainingSummariesCommand = /** @class */ (function (_super) {
    __extends(GetBehaviorModelTrainingSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBehaviorModelTrainingSummariesCommand(input) {
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
    GetBehaviorModelTrainingSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetBehaviorModelTrainingSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBehaviorModelTrainingSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBehaviorModelTrainingSummariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBehaviorModelTrainingSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand(input, context);
    };
    GetBehaviorModelTrainingSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand(output, context);
    };
    return GetBehaviorModelTrainingSummariesCommand;
}($Command));
export { GetBehaviorModelTrainingSummariesCommand };
//# sourceMappingURL=GetBehaviorModelTrainingSummariesCommand.js.map