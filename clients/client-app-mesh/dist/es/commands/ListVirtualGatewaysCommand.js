import { __extends } from "tslib";
import { ListVirtualGatewaysInput, ListVirtualGatewaysOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListVirtualGatewaysCommand,
  serializeAws_restJson1ListVirtualGatewaysCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing virtual gateways in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualGatewaysCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualGatewaysCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListVirtualGatewaysCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVirtualGatewaysCommand = /** @class */ (function (_super) {
  __extends(ListVirtualGatewaysCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListVirtualGatewaysCommand(input) {
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
  ListVirtualGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListVirtualGatewaysCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListVirtualGatewaysInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualGatewaysOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListVirtualGatewaysCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListVirtualGatewaysCommand(input, context);
  };
  ListVirtualGatewaysCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListVirtualGatewaysCommand(output, context);
  };
  return ListVirtualGatewaysCommand;
})($Command);
export { ListVirtualGatewaysCommand };
//# sourceMappingURL=ListVirtualGatewaysCommand.js.map
