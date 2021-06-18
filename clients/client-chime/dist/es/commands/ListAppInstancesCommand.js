import { __extends } from "tslib";
import { ListAppInstancesRequest, ListAppInstancesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAppInstancesCommand,
  serializeAws_restJson1ListAppInstancesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstancesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstancesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAppInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppInstancesCommandInput} for command's `input` shape.
 * @see {@link ListAppInstancesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAppInstancesCommand = /** @class */ (function (_super) {
  __extends(ListAppInstancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAppInstancesCommand(input) {
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
  ListAppInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListAppInstancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAppInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstancesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAppInstancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAppInstancesCommand(input, context);
  };
  ListAppInstancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAppInstancesCommand(output, context);
  };
  return ListAppInstancesCommand;
})($Command);
export { ListAppInstancesCommand };
//# sourceMappingURL=ListAppInstancesCommand.js.map
