import { __extends } from "tslib";
import { RemoveAllBackendsRequest, RemoveAllBackendsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveAllBackendsCommand,
  serializeAws_restJson1RemoveAllBackendsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes all backend environments from your Amplify project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, RemoveAllBackendsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, RemoveAllBackendsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new RemoveAllBackendsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAllBackendsCommandInput} for command's `input` shape.
 * @see {@link RemoveAllBackendsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveAllBackendsCommand = /** @class */ (function (_super) {
  __extends(RemoveAllBackendsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RemoveAllBackendsCommand(input) {
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
  RemoveAllBackendsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "RemoveAllBackendsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RemoveAllBackendsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAllBackendsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RemoveAllBackendsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RemoveAllBackendsCommand(input, context);
  };
  RemoveAllBackendsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RemoveAllBackendsCommand(output, context);
  };
  return RemoveAllBackendsCommand;
})($Command);
export { RemoveAllBackendsCommand };
//# sourceMappingURL=RemoveAllBackendsCommand.js.map
