import { __extends } from "tslib";
import { ListAssociatedStacksRequest, ListAssociatedStacksResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssociatedStacksCommand,
  serializeAws_json1_1ListAssociatedStacksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedStacksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ListAssociatedStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedStacksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociatedStacksCommand = /** @class */ (function (_super) {
  __extends(ListAssociatedStacksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAssociatedStacksCommand(input) {
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
  ListAssociatedStacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "ListAssociatedStacksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAssociatedStacksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedStacksResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAssociatedStacksCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListAssociatedStacksCommand(input, context);
  };
  ListAssociatedStacksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListAssociatedStacksCommand(output, context);
  };
  return ListAssociatedStacksCommand;
})($Command);
export { ListAssociatedStacksCommand };
//# sourceMappingURL=ListAssociatedStacksCommand.js.map
