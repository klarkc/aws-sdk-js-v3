import { __extends } from "tslib";
import { ListAppInstanceAdminsRequest, ListAppInstanceAdminsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAppInstanceAdminsCommand,
  serializeAws_restJson1ListAppInstanceAdminsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstanceAdminsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstanceAdminsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAppInstanceAdminsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppInstanceAdminsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceAdminsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAppInstanceAdminsCommand = /** @class */ (function (_super) {
  __extends(ListAppInstanceAdminsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAppInstanceAdminsCommand(input) {
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
  ListAppInstanceAdminsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListAppInstanceAdminsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAppInstanceAdminsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceAdminsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAppInstanceAdminsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAppInstanceAdminsCommand(input, context);
  };
  ListAppInstanceAdminsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAppInstanceAdminsCommand(output, context);
  };
  return ListAppInstanceAdminsCommand;
})($Command);
export { ListAppInstanceAdminsCommand };
//# sourceMappingURL=ListAppInstanceAdminsCommand.js.map
