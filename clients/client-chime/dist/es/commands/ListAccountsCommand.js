import { __extends } from "tslib";
import { ListAccountsRequest, ListAccountsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAccountsCommand,
  serializeAws_restJson1ListAccountsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts
 *             by account name prefix. To find out which Amazon Chime account a user belongs to, you can
 *             filter by the user's email address, which returns one account result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAccountsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAccountsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountsCommand = /** @class */ (function (_super) {
  __extends(ListAccountsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAccountsCommand(input) {
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
  ListAccountsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListAccountsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAccountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAccountsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAccountsCommand(input, context);
  };
  ListAccountsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAccountsCommand(output, context);
  };
  return ListAccountsCommand;
})($Command);
export { ListAccountsCommand };
//# sourceMappingURL=ListAccountsCommand.js.map
