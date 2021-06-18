import { __extends } from "tslib";
import { UpdateBackendJobRequest, UpdateBackendJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackendJobCommand,
  serializeAws_restJson1UpdateBackendJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a specific job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendJobCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendJobCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendJobCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBackendJobCommand = /** @class */ (function (_super) {
  __extends(UpdateBackendJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBackendJobCommand(input) {
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
  UpdateBackendJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "UpdateBackendJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBackendJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackendJobResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBackendJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBackendJobCommand(input, context);
  };
  UpdateBackendJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBackendJobCommand(output, context);
  };
  return UpdateBackendJobCommand;
})($Command);
export { UpdateBackendJobCommand };
//# sourceMappingURL=UpdateBackendJobCommand.js.map
