import { __extends } from "tslib";
import { StartJobRequest, StartJobResult } from "../models/models_0";
import {
  deserializeAws_restJson1StartJobCommand,
  serializeAws_restJson1StartJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Starts a new job for a branch of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, StartJobCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, StartJobCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new StartJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartJobCommandInput} for command's `input` shape.
 * @see {@link StartJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartJobCommand = /** @class */ (function (_super) {
  __extends(StartJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartJobCommand(input) {
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
  StartJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "StartJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartJobResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartJobCommand(input, context);
  };
  StartJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartJobCommand(output, context);
  };
  return StartJobCommand;
})($Command);
export { StartJobCommand };
//# sourceMappingURL=StartJobCommand.js.map
