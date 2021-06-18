import { __extends } from "tslib";
import { StopJobRequest, StopJobResult } from "../models/models_0";
import {
  deserializeAws_restJson1StopJobCommand,
  serializeAws_restJson1StopJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Stops a job that is in progress for a branch of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, StopJobCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, StopJobCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new StopJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopJobCommandInput} for command's `input` shape.
 * @see {@link StopJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopJobCommand = /** @class */ (function (_super) {
  __extends(StopJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopJobCommand(input) {
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
  StopJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "StopJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopJobResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StopJobCommand(input, context);
  };
  StopJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StopJobCommand(output, context);
  };
  return StopJobCommand;
})($Command);
export { StopJobCommand };
//# sourceMappingURL=StopJobCommand.js.map
