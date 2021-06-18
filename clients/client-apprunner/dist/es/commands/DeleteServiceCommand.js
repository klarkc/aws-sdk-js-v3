import { __extends } from "tslib";
import { DeleteServiceRequest, DeleteServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteServiceCommand,
  serializeAws_json1_0DeleteServiceCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an AWS App Runner service.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServiceCommand = /** @class */ (function (_super) {
  __extends(DeleteServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteServiceCommand(input) {
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
  DeleteServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "DeleteServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteServiceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0DeleteServiceCommand(input, context);
  };
  DeleteServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0DeleteServiceCommand(output, context);
  };
  return DeleteServiceCommand;
})($Command);
export { DeleteServiceCommand };
//# sourceMappingURL=DeleteServiceCommand.js.map
