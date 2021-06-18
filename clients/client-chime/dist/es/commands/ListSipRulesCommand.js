import { __extends } from "tslib";
import { ListSipRulesRequest, ListSipRulesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListSipRulesCommand,
  serializeAws_restJson1ListSipRulesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the SIP rules under the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSipRulesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSipRulesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListSipRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSipRulesCommandInput} for command's `input` shape.
 * @see {@link ListSipRulesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSipRulesCommand = /** @class */ (function (_super) {
  __extends(ListSipRulesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListSipRulesCommand(input) {
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
  ListSipRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListSipRulesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListSipRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSipRulesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListSipRulesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListSipRulesCommand(input, context);
  };
  ListSipRulesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListSipRulesCommand(output, context);
  };
  return ListSipRulesCommand;
})($Command);
export { ListSipRulesCommand };
//# sourceMappingURL=ListSipRulesCommand.js.map
