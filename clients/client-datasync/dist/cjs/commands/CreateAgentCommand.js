"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Activates an AWS DataSync agent that you have deployed on your host. The activation
 *       process associates your agent with your account. In the activation process, you specify
 *       information such as the AWS Region that you want to activate the agent in. You activate the
 *       agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your
 *       tasks are created in this AWS Region.</p>
 *          <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to
 *       a VPC endpoint so you can run tasks without going over the public internet.</p>
 *          <p>You can use an agent for more than one location. If a task uses multiple agents, all of
 *       them need to have status AVAILABLE for the task to run. If you use multiple agents for a
 *       source location, the status of all the agents must be AVAILABLE for the task to run. </p>
 *
 *
 *          <p>Agents are automatically updated by AWS on a regular basis, using a mechanism that
 *       ensures minimal interruption to your tasks.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateAgentCommand extends smithy_client_1.Command {
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
        const clientName = "DataSyncClient";
        const commandName = "CreateAgentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAgentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateAgentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateAgentCommand(output, context);
    }
}
exports.CreateAgentCommand = CreateAgentCommand;
//# sourceMappingURL=CreateAgentCommand.js.map