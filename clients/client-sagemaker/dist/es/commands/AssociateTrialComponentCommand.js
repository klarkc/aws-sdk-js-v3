import { __extends } from "tslib";
import { AssociateTrialComponentRequest, AssociateTrialComponentResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateTrialComponentCommand, serializeAws_json1_1AssociateTrialComponentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a trial component with a trial. A trial component can be associated with
 *       multiple trials. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AssociateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AssociateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AssociateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link AssociateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTrialComponentCommand = /** @class */ (function (_super) {
    __extends(AssociateTrialComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTrialComponentCommand(input) {
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
    AssociateTrialComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "AssociateTrialComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTrialComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTrialComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateTrialComponentCommand(input, context);
    };
    AssociateTrialComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateTrialComponentCommand(output, context);
    };
    return AssociateTrialComponentCommand;
}($Command));
export { AssociateTrialComponentCommand };
//# sourceMappingURL=AssociateTrialComponentCommand.js.map