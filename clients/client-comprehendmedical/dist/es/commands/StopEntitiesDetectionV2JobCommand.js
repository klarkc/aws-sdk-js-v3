import { __extends } from "tslib";
import { StopEntitiesDetectionV2JobRequest, StopEntitiesDetectionV2JobResponse } from "../models/models_0";
import { deserializeAws_json1_1StopEntitiesDetectionV2JobCommand, serializeAws_json1_1StopEntitiesDetectionV2JobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a medical entities detection job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StopEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link StopEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopEntitiesDetectionV2JobCommand = /** @class */ (function (_super) {
    __extends(StopEntitiesDetectionV2JobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopEntitiesDetectionV2JobCommand(input) {
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
    StopEntitiesDetectionV2JobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StopEntitiesDetectionV2JobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopEntitiesDetectionV2JobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopEntitiesDetectionV2JobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopEntitiesDetectionV2JobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopEntitiesDetectionV2JobCommand(input, context);
    };
    StopEntitiesDetectionV2JobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopEntitiesDetectionV2JobCommand(output, context);
    };
    return StopEntitiesDetectionV2JobCommand;
}($Command));
export { StopEntitiesDetectionV2JobCommand };
//# sourceMappingURL=StopEntitiesDetectionV2JobCommand.js.map