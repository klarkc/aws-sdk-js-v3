"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterTaskDefinitionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
 * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count.</p>
 * 		       <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new
 * 			services, and you cannot update an existing service to reference an
 * 				<code>INACTIVE</code> task definition. However, there may be up to a 10-minute
 * 			window following deregistration where these restrictions have not yet taken
 * 			effect.</p>
 * 		       <note>
 * 			         <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
 * 				account indefinitely. However, this behavior is subject to change in the future, so
 * 				you should not rely on <code>INACTIVE</code> task definitions persisting beyond the
 * 				lifecycle of any associated tasks and services.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeregisterTaskDefinitionCommand extends smithy_client_1.Command {
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
        const clientName = "ECSClient";
        const commandName = "DeregisterTaskDefinitionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeregisterTaskDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeregisterTaskDefinitionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeregisterTaskDefinitionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeregisterTaskDefinitionCommand(output, context);
    }
}
exports.DeregisterTaskDefinitionCommand = DeregisterTaskDefinitionCommand;
//# sourceMappingURL=DeregisterTaskDefinitionCommand.js.map