"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartDeploymentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an AWS App Runner
 *       service.</p>
 *          <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker
 *       image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, StartDeploymentCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, StartDeploymentCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new StartDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartDeploymentCommand extends smithy_client_1.Command {
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
    const clientName = "AppRunnerClient";
    const commandName = "StartDeploymentCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.StartDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.StartDeploymentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_0_1.serializeAws_json1_0StartDeploymentCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_0_1.deserializeAws_json1_0StartDeploymentCommand(output, context);
  }
}
exports.StartDeploymentCommand = StartDeploymentCommand;
//# sourceMappingURL=StartDeploymentCommand.js.map
