import { __extends } from "tslib";
import { ListBotsRequest, ListBotsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListBotsCommand,
  serializeAws_restJson1ListBotsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListBotsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListBotsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotsCommandInput} for command's `input` shape.
 * @see {@link ListBotsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBotsCommand = /** @class */ (function (_super) {
  __extends(ListBotsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBotsCommand(input) {
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
  ListBotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListBotsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBotsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBotsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBotsCommand(input, context);
  };
  ListBotsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBotsCommand(output, context);
  };
  return ListBotsCommand;
})($Command);
export { ListBotsCommand };
//# sourceMappingURL=ListBotsCommand.js.map
