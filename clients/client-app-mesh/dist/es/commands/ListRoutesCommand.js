import { __extends } from "tslib";
import { ListRoutesInput, ListRoutesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRoutesCommand,
  serializeAws_restJson1ListRoutesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing routes in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutesCommandInput} for command's `input` shape.
 * @see {@link ListRoutesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoutesCommand = /** @class */ (function (_super) {
  __extends(ListRoutesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListRoutesCommand(input) {
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
  ListRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListRoutesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListRoutesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRoutesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListRoutesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListRoutesCommand(input, context);
  };
  ListRoutesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListRoutesCommand(output, context);
  };
  return ListRoutesCommand;
})($Command);
export { ListRoutesCommand };
//# sourceMappingURL=ListRoutesCommand.js.map
