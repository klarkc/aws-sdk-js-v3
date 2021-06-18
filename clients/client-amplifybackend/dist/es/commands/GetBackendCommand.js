import { __extends } from "tslib";
import { GetBackendRequest, GetBackendResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendCommand,
  serializeAws_restJson1GetBackendCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides project-level details for your Amplify UI project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetBackendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendCommandInput} for command's `input` shape.
 * @see {@link GetBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackendCommand = /** @class */ (function (_super) {
  __extends(GetBackendCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackendCommand(input) {
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
  GetBackendCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GetBackendCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackendRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackendCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackendCommand(input, context);
  };
  GetBackendCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackendCommand(output, context);
  };
  return GetBackendCommand;
})($Command);
export { GetBackendCommand };
//# sourceMappingURL=GetBackendCommand.js.map
