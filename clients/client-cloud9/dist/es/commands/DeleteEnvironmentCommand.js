import { __extends } from "tslib";
import { DeleteEnvironmentRequest, DeleteEnvironmentResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEnvironmentCommand,
  serializeAws_json1_1DeleteEnvironmentCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DeleteEnvironmentCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DeleteEnvironmentCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEnvironmentCommand = /** @class */ (function (_super) {
  __extends(DeleteEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteEnvironmentCommand(input) {
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
  DeleteEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "DeleteEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEnvironmentResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteEnvironmentCommand(input, context);
  };
  DeleteEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteEnvironmentCommand(output, context);
  };
  return DeleteEnvironmentCommand;
})($Command);
export { DeleteEnvironmentCommand };
//# sourceMappingURL=DeleteEnvironmentCommand.js.map
