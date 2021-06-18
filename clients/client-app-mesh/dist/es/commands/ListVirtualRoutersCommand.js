import { __extends } from "tslib";
import { ListVirtualRoutersInput, ListVirtualRoutersOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListVirtualRoutersCommand,
  serializeAws_restJson1ListVirtualRoutersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing virtual routers in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualRoutersCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualRoutersCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualRoutersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualRoutersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualRoutersCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVirtualRoutersCommand = /** @class */ (function (_super) {
  __extends(ListVirtualRoutersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListVirtualRoutersCommand(input) {
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
  ListVirtualRoutersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListVirtualRoutersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListVirtualRoutersInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualRoutersOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListVirtualRoutersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListVirtualRoutersCommand(input, context);
  };
  ListVirtualRoutersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListVirtualRoutersCommand(output, context);
  };
  return ListVirtualRoutersCommand;
})($Command);
export { ListVirtualRoutersCommand };
//# sourceMappingURL=ListVirtualRoutersCommand.js.map
