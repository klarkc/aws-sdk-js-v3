"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code>
 * 			cluster when you launch your first container instance. However, you can create your own
 * 			cluster with a unique name with the <code>CreateCluster</code> action.</p>
 * 		       <note>
 * 			         <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to
 * 				create the Amazon ECS service-linked role for your account so that required resources in
 * 				other AWS services can be managed on your behalf. However, if the IAM user that
 * 				makes the call does not have permissions to create the service-linked role, it is
 * 				not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
 * 					Service-Linked Roles for Amazon ECS</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateClusterCommand extends smithy_client_1.Command {
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
        const commandName = "CreateClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateClusterResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateClusterCommand(output, context);
    }
}
exports.CreateClusterCommand = CreateClusterCommand;
//# sourceMappingURL=CreateClusterCommand.js.map