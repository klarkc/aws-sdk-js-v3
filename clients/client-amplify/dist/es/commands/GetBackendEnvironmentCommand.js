import { __extends } from "tslib";
import { GetBackendEnvironmentRequest, GetBackendEnvironmentResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendEnvironmentCommand,
  serializeAws_restJson1GetBackendEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a backend environment for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackendEnvironmentCommand = /** @class */ (function (_super) {
  __extends(GetBackendEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackendEnvironmentCommand(input) {
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
  GetBackendEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "GetBackendEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackendEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendEnvironmentResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackendEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackendEnvironmentCommand(input, context);
  };
  GetBackendEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackendEnvironmentCommand(output, context);
  };
  return GetBackendEnvironmentCommand;
})($Command);
export { GetBackendEnvironmentCommand };
//# sourceMappingURL=GetBackendEnvironmentCommand.js.map
