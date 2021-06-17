import { __extends } from "tslib";
import { CreateInferenceSchedulerRequest, CreateInferenceSchedulerResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateInferenceSchedulerCommand, serializeAws_json1_0CreateInferenceSchedulerCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a scheduled inference. Scheduling an inference is setting up a continuous
 *          real-time inference plan to analyze new measurement data. When setting up the schedule, you
 *          provide an S3 bucket location for the input data, assign it a delimiter between separate
 *          entries in the data, set an offset delay if desired, and set the frequency of inferencing.
 *          You must also provide an S3 bucket location for the output data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInferenceSchedulerCommand = /** @class */ (function (_super) {
    __extends(CreateInferenceSchedulerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInferenceSchedulerCommand(input) {
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
    CreateInferenceSchedulerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "CreateInferenceSchedulerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInferenceSchedulerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInferenceSchedulerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInferenceSchedulerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateInferenceSchedulerCommand(input, context);
    };
    CreateInferenceSchedulerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateInferenceSchedulerCommand(output, context);
    };
    return CreateInferenceSchedulerCommand;
}($Command));
export { CreateInferenceSchedulerCommand };
//# sourceMappingURL=CreateInferenceSchedulerCommand.js.map