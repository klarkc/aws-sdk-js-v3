import { __extends } from "tslib";
import { ListFlowsRequest, ListFlowsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFlowsCommand,
  serializeAws_restJson1ListFlowsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Lists all of the flows associated with your account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListFlowsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListFlowsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new ListFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowsCommandInput} for command's `input` shape.
 * @see {@link ListFlowsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFlowsCommand = /** @class */ (function (_super) {
  __extends(ListFlowsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListFlowsCommand(input) {
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
  ListFlowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "ListFlowsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListFlowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFlowsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListFlowsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListFlowsCommand(input, context);
  };
  ListFlowsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListFlowsCommand(output, context);
  };
  return ListFlowsCommand;
})($Command);
export { ListFlowsCommand };
//# sourceMappingURL=ListFlowsCommand.js.map
