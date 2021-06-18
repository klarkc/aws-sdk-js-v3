import { __extends } from "tslib";
import { PauseServiceRequest, PauseServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_0PauseServiceCommand,
  serializeAws_json1_0PauseServiceCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
 *       removed).</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, PauseServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, PauseServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new PauseServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PauseServiceCommandInput} for command's `input` shape.
 * @see {@link PauseServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PauseServiceCommand = /** @class */ (function (_super) {
  __extends(PauseServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PauseServiceCommand(input) {
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
  PauseServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "PauseServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PauseServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PauseServiceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PauseServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0PauseServiceCommand(input, context);
  };
  PauseServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0PauseServiceCommand(output, context);
  };
  return PauseServiceCommand;
})($Command);
export { PauseServiceCommand };
//# sourceMappingURL=PauseServiceCommand.js.map
