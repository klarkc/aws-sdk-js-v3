"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateTrialComponentCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DisassociateTrialComponentCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SageMakerClient";
        const commandName = "DisassociateTrialComponentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DisassociateTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DisassociateTrialComponentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DisassociateTrialComponentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DisassociateTrialComponentCommand(output, context);
    }
}
exports.DisassociateTrialComponentCommand = DisassociateTrialComponentCommand;
//# sourceMappingURL=DisassociateTrialComponentCommand.js.map