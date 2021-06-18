import { __extends } from "tslib";
import { ListVirtualServicesInput, ListVirtualServicesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListVirtualServicesCommand,
  serializeAws_restJson1ListVirtualServicesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing virtual services in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualServicesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualServicesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualServicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualServicesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVirtualServicesCommand = /** @class */ (function (_super) {
  __extends(ListVirtualServicesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListVirtualServicesCommand(input) {
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
  ListVirtualServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListVirtualServicesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListVirtualServicesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualServicesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListVirtualServicesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListVirtualServicesCommand(input, context);
  };
  ListVirtualServicesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListVirtualServicesCommand(output, context);
  };
  return ListVirtualServicesCommand;
})($Command);
export { ListVirtualServicesCommand };
//# sourceMappingURL=ListVirtualServicesCommand.js.map
