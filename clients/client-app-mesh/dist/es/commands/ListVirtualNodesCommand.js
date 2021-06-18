import { __extends } from "tslib";
import { ListVirtualNodesInput, ListVirtualNodesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListVirtualNodesCommand,
  serializeAws_restJson1ListVirtualNodesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing virtual nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualNodesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualNodesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualNodesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualNodesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVirtualNodesCommand = /** @class */ (function (_super) {
  __extends(ListVirtualNodesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListVirtualNodesCommand(input) {
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
  ListVirtualNodesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListVirtualNodesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListVirtualNodesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualNodesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListVirtualNodesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListVirtualNodesCommand(input, context);
  };
  ListVirtualNodesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListVirtualNodesCommand(output, context);
  };
  return ListVirtualNodesCommand;
})($Command);
export { ListVirtualNodesCommand };
//# sourceMappingURL=ListVirtualNodesCommand.js.map
