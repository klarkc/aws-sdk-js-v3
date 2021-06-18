import { __extends } from "tslib";
import { CloneBackendRequest, CloneBackendResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CloneBackendCommand,
  serializeAws_restJson1CloneBackendCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation clones an existing backend.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CloneBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CloneBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CloneBackendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloneBackendCommandInput} for command's `input` shape.
 * @see {@link CloneBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CloneBackendCommand = /** @class */ (function (_super) {
  __extends(CloneBackendCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CloneBackendCommand(input) {
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
  CloneBackendCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "CloneBackendCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CloneBackendRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CloneBackendResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CloneBackendCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CloneBackendCommand(input, context);
  };
  CloneBackendCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CloneBackendCommand(output, context);
  };
  return CloneBackendCommand;
})($Command);
export { CloneBackendCommand };
//# sourceMappingURL=CloneBackendCommand.js.map
