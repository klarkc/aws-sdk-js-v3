import { __extends } from "tslib";
import { DescribePiiEntitiesDetectionJobRequest, DescribePiiEntitiesDetectionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommand, serializeAws_json1_1DescribePiiEntitiesDetectionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with a PII entities detection job. For example, you can use
 *       this operation to get the job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribePiiEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribePiiEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribePiiEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePiiEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribePiiEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePiiEntitiesDetectionJobCommand = /** @class */ (function (_super) {
    __extends(DescribePiiEntitiesDetectionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePiiEntitiesDetectionJobCommand(input) {
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
    DescribePiiEntitiesDetectionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "DescribePiiEntitiesDetectionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePiiEntitiesDetectionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePiiEntitiesDetectionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePiiEntitiesDetectionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePiiEntitiesDetectionJobCommand(input, context);
    };
    DescribePiiEntitiesDetectionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommand(output, context);
    };
    return DescribePiiEntitiesDetectionJobCommand;
}($Command));
export { DescribePiiEntitiesDetectionJobCommand };
//# sourceMappingURL=DescribePiiEntitiesDetectionJobCommand.js.map