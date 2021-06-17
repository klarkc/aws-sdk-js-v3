"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateEnvironmentOperationsRoleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 *       uses the associated operations role for permissions to downstream services during subsequent
 *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AssociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateEnvironmentOperationsRoleCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticBeanstalkClient";
        const commandName = "AssociateEnvironmentOperationsRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateEnvironmentOperationsRoleMessage.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAssociateEnvironmentOperationsRoleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAssociateEnvironmentOperationsRoleCommand(output, context);
    }
}
exports.AssociateEnvironmentOperationsRoleCommand = AssociateEnvironmentOperationsRoleCommand;
//# sourceMappingURL=AssociateEnvironmentOperationsRoleCommand.js.map