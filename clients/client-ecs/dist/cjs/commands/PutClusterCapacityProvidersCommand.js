"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutClusterCapacityProvidersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the available capacity providers and the default capacity provider strategy
 * 			for a cluster.</p>
 * 		       <p>You must specify both the available capacity providers and a default capacity provider
 * 			strategy for the cluster. If the specified cluster has existing capacity providers
 * 			associated with it, you must specify all existing capacity providers in addition to any
 * 			new ones you want to add. Any existing capacity providers associated with a cluster that
 * 			are omitted from a <a>PutClusterCapacityProviders</a> API call will be
 * 			disassociated with the cluster. You can only disassociate an existing capacity provider
 * 			from a cluster if it's not being used by any existing tasks.</p>
 * 		       <p>When creating a service or running a task on a cluster, if no capacity provider or
 * 			launch type is specified, then the cluster's default capacity provider strategy is used.
 * 			It is recommended to define a default capacity provider strategy for your cluster,
 * 			however you may specify an empty array (<code>[]</code>) to bypass defining a default
 * 			strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutClusterCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutClusterCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutClusterCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClusterCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link PutClusterCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutClusterCapacityProvidersCommand extends smithy_client_1.Command {
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
        const commandName = "PutClusterCapacityProvidersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutClusterCapacityProvidersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutClusterCapacityProvidersResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutClusterCapacityProvidersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutClusterCapacityProvidersCommand(output, context);
    }
}
exports.PutClusterCapacityProvidersCommand = PutClusterCapacityProvidersCommand;
//# sourceMappingURL=PutClusterCapacityProvidersCommand.js.map