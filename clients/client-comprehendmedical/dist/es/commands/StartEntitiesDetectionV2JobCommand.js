import { __extends } from "tslib";
import { StartEntitiesDetectionV2JobRequest, StartEntitiesDetectionV2JobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartEntitiesDetectionV2JobCommand, serializeAws_json1_1StartEntitiesDetectionV2JobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
 *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link StartEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartEntitiesDetectionV2JobCommand = /** @class */ (function (_super) {
    __extends(StartEntitiesDetectionV2JobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartEntitiesDetectionV2JobCommand(input) {
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
    StartEntitiesDetectionV2JobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StartEntitiesDetectionV2JobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartEntitiesDetectionV2JobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartEntitiesDetectionV2JobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartEntitiesDetectionV2JobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartEntitiesDetectionV2JobCommand(input, context);
    };
    StartEntitiesDetectionV2JobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartEntitiesDetectionV2JobCommand(output, context);
    };
    return StartEntitiesDetectionV2JobCommand;
}($Command));
export { StartEntitiesDetectionV2JobCommand };
//# sourceMappingURL=StartEntitiesDetectionV2JobCommand.js.map