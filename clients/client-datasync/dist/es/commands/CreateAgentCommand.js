import { __extends } from "tslib";
import { CreateAgentRequest, CreateAgentResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAgentCommand, serializeAws_json1_1CreateAgentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateAgentCommand = /** @class */ (function (_super) {
    __extends(CreateAgentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAgentCommand(input) {
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
    CreateAgentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateAgentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAgentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAgentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAgentCommand(input, context);
    };
    CreateAgentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAgentCommand(output, context);
    };
    return CreateAgentCommand;
}($Command));
export { CreateAgentCommand };
//# sourceMappingURL=CreateAgentCommand.js.map