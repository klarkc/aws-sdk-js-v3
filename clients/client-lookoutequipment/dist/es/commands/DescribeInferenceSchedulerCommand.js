import { __extends } from "tslib";
import { DescribeInferenceSchedulerRequest, DescribeInferenceSchedulerResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeInferenceSchedulerCommand, serializeAws_json1_0DescribeInferenceSchedulerCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Specifies information about the inference scheduler being used, including name, model,
 *          status, and associated metadata </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInferenceSchedulerCommand = /** @class */ (function (_super) {
    __extends(DescribeInferenceSchedulerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInferenceSchedulerCommand(input) {
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
    DescribeInferenceSchedulerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "DescribeInferenceSchedulerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInferenceSchedulerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInferenceSchedulerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInferenceSchedulerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeInferenceSchedulerCommand(input, context);
    };
    DescribeInferenceSchedulerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeInferenceSchedulerCommand(output, context);
    };
    return DescribeInferenceSchedulerCommand;
}($Command));
export { DescribeInferenceSchedulerCommand };
//# sourceMappingURL=DescribeInferenceSchedulerCommand.js.map