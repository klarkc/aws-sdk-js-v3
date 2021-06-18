import { __extends } from "tslib";
import { StartDeploymentRequest, StartDeploymentResponse } from "../models/models_0";
import {
  deserializeAws_json1_0StartDeploymentCommand,
  serializeAws_json1_0StartDeploymentCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var StartDeploymentCommand = /** @class */ (function (_super) {
  __extends(StartDeploymentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartDeploymentCommand(input) {
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
  StartDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "StartDeploymentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDeploymentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartDeploymentCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0StartDeploymentCommand(input, context);
  };
  StartDeploymentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0StartDeploymentCommand(output, context);
  };
  return StartDeploymentCommand;
})($Command);
export { StartDeploymentCommand };
//# sourceMappingURL=StartDeploymentCommand.js.map
