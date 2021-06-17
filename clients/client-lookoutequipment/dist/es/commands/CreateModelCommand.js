import { __extends } from "tslib";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateModelCommand, serializeAws_json1_0CreateModelCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an ML model for data inference. </p>
 *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
 *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
 *          behavior that could be potential equipment failure (or maintenance events). The models are
 *          made by analyzing normal data and abnormalities in machine behavior that have already
 *          occurred.</p>
 *          <p>Your model is trained using a portion of the data from your dataset and uses that data
 *          to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
 *          Another portion of the data is used to evaluate the model's accuracy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateModelCommand = /** @class */ (function (_super) {
    __extends(CreateModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelCommand(input) {
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
    CreateModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "CreateModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateModelCommand(input, context);
    };
    CreateModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateModelCommand(output, context);
    };
    return CreateModelCommand;
}($Command));
export { CreateModelCommand };
//# sourceMappingURL=CreateModelCommand.js.map