import { __extends } from "tslib";
import { ListAssociatedFleetsRequest, ListAssociatedFleetsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssociatedFleetsCommand,
  serializeAws_json1_1ListAssociatedFleetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedFleetsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedFleetsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ListAssociatedFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedFleetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedFleetsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociatedFleetsCommand = /** @class */ (function (_super) {
  __extends(ListAssociatedFleetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAssociatedFleetsCommand(input) {
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
  ListAssociatedFleetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "ListAssociatedFleetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAssociatedFleetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedFleetsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAssociatedFleetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListAssociatedFleetsCommand(input, context);
  };
  ListAssociatedFleetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListAssociatedFleetsCommand(output, context);
  };
  return ListAssociatedFleetsCommand;
})($Command);
export { ListAssociatedFleetsCommand };
//# sourceMappingURL=ListAssociatedFleetsCommand.js.map
