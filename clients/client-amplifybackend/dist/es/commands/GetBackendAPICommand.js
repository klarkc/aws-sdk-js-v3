import { __extends } from "tslib";
import { GetBackendAPIRequest, GetBackendAPIResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendAPICommand,
  serializeAws_restJson1GetBackendAPICommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the details for a backend API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetBackendAPICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendAPICommandInput} for command's `input` shape.
 * @see {@link GetBackendAPICommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackendAPICommand = /** @class */ (function (_super) {
  __extends(GetBackendAPICommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackendAPICommand(input) {
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
  GetBackendAPICommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GetBackendAPICommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendAPIResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackendAPICommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackendAPICommand(input, context);
  };
  GetBackendAPICommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackendAPICommand(output, context);
  };
  return GetBackendAPICommand;
})($Command);
export { GetBackendAPICommand };
//# sourceMappingURL=GetBackendAPICommand.js.map
