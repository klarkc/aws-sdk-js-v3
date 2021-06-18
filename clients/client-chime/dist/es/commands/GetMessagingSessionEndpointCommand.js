import { __extends } from "tslib";
import { GetMessagingSessionEndpointRequest, GetMessagingSessionEndpointResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMessagingSessionEndpointCommand,
  serializeAws_restJson1GetMessagingSessionEndpointCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The details of the endpoint for the messaging session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetMessagingSessionEndpointCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetMessagingSessionEndpointCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetMessagingSessionEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMessagingSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetMessagingSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMessagingSessionEndpointCommand = /** @class */ (function (_super) {
  __extends(GetMessagingSessionEndpointCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetMessagingSessionEndpointCommand(input) {
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
  GetMessagingSessionEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetMessagingSessionEndpointCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetMessagingSessionEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMessagingSessionEndpointResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetMessagingSessionEndpointCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetMessagingSessionEndpointCommand(input, context);
  };
  GetMessagingSessionEndpointCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetMessagingSessionEndpointCommand(output, context);
  };
  return GetMessagingSessionEndpointCommand;
})($Command);
export { GetMessagingSessionEndpointCommand };
//# sourceMappingURL=GetMessagingSessionEndpointCommand.js.map
