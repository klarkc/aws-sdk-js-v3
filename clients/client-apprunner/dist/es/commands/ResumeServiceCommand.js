import { __extends } from "tslib";
import { ResumeServiceRequest, ResumeServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ResumeServiceCommand,
  serializeAws_json1_0ResumeServiceCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ResumeServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ResumeServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ResumeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeServiceCommandInput} for command's `input` shape.
 * @see {@link ResumeServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeServiceCommand = /** @class */ (function (_super) {
  __extends(ResumeServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ResumeServiceCommand(input) {
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
  ResumeServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "ResumeServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ResumeServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResumeServiceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ResumeServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0ResumeServiceCommand(input, context);
  };
  ResumeServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0ResumeServiceCommand(output, context);
  };
  return ResumeServiceCommand;
})($Command);
export { ResumeServiceCommand };
//# sourceMappingURL=ResumeServiceCommand.js.map
