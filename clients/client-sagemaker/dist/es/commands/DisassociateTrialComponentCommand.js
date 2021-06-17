import { __extends } from "tslib";
import { DisassociateTrialComponentRequest, DisassociateTrialComponentResponse } from "../models/models_2";
import { deserializeAws_json1_1DisassociateTrialComponentCommand, serializeAws_json1_1DisassociateTrialComponentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a trial component from a trial. This doesn't effect other trials the
 *       component is associated with. Before you can delete a component, you must disassociate the
 *       component from all trials it is associated with. To associate a trial component with a trial,
 *       call the <a>AssociateTrialComponent</a> API.</p>
 *          <p>To get a list of the trials a component is associated with, use the <a>Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter.
 *       The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisassociateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisassociateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DisassociateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTrialComponentCommand = /** @class */ (function (_super) {
    __extends(DisassociateTrialComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTrialComponentCommand(input) {
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
    DisassociateTrialComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DisassociateTrialComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTrialComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTrialComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateTrialComponentCommand(input, context);
    };
    DisassociateTrialComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateTrialComponentCommand(output, context);
    };
    return DisassociateTrialComponentCommand;
}($Command));
export { DisassociateTrialComponentCommand };
//# sourceMappingURL=DisassociateTrialComponentCommand.js.map