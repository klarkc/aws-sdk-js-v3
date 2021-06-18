import { __extends } from "tslib";
import { CreateProxySessionRequest, CreateProxySessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateProxySessionCommand,
  serializeAws_restJson1CreateProxySessionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateProxySessionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateProxySessionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateProxySessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProxySessionCommandInput} for command's `input` shape.
 * @see {@link CreateProxySessionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProxySessionCommand = /** @class */ (function (_super) {
  __extends(CreateProxySessionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateProxySessionCommand(input) {
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
  CreateProxySessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateProxySessionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateProxySessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProxySessionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateProxySessionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateProxySessionCommand(input, context);
  };
  CreateProxySessionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateProxySessionCommand(output, context);
  };
  return CreateProxySessionCommand;
})($Command);
export { CreateProxySessionCommand };
//# sourceMappingURL=CreateProxySessionCommand.js.map
