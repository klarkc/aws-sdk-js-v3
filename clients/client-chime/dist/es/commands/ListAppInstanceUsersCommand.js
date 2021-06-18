import { __extends } from "tslib";
import { ListAppInstanceUsersRequest, ListAppInstanceUsersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAppInstanceUsersCommand,
  serializeAws_restJson1ListAppInstanceUsersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * List all
 * <code>AppInstanceUsers</code>
 * created under a single <code>AppInstance</code>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstanceUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstanceUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAppInstanceUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppInstanceUsersCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUsersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAppInstanceUsersCommand = /** @class */ (function (_super) {
  __extends(ListAppInstanceUsersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAppInstanceUsersCommand(input) {
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
  ListAppInstanceUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListAppInstanceUsersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAppInstanceUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceUsersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAppInstanceUsersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAppInstanceUsersCommand(input, context);
  };
  ListAppInstanceUsersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAppInstanceUsersCommand(output, context);
  };
  return ListAppInstanceUsersCommand;
})($Command);
export { ListAppInstanceUsersCommand };
//# sourceMappingURL=ListAppInstanceUsersCommand.js.map
