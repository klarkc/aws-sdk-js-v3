import { __extends } from "tslib";
import { ListProxySessionsRequest, ListProxySessionsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListProxySessionsCommand,
  serializeAws_restJson1ListProxySessionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListProxySessionsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListProxySessionsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListProxySessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProxySessionsCommandInput} for command's `input` shape.
 * @see {@link ListProxySessionsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProxySessionsCommand = /** @class */ (function (_super) {
  __extends(ListProxySessionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListProxySessionsCommand(input) {
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
  ListProxySessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListProxySessionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListProxySessionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProxySessionsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListProxySessionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListProxySessionsCommand(input, context);
  };
  ListProxySessionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListProxySessionsCommand(output, context);
  };
  return ListProxySessionsCommand;
})($Command);
export { ListProxySessionsCommand };
//# sourceMappingURL=ListProxySessionsCommand.js.map
