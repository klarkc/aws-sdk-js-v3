import { __extends } from "tslib";
import { ListGatewayRoutesInput, ListGatewayRoutesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListGatewayRoutesCommand,
  serializeAws_restJson1ListGatewayRoutesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing gateway routes that are associated to a virtual
 *          gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListGatewayRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListGatewayRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGatewayRoutesCommand = /** @class */ (function (_super) {
  __extends(ListGatewayRoutesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListGatewayRoutesCommand(input) {
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
  ListGatewayRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListGatewayRoutesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListGatewayRoutesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGatewayRoutesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListGatewayRoutesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListGatewayRoutesCommand(input, context);
  };
  ListGatewayRoutesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListGatewayRoutesCommand(output, context);
  };
  return ListGatewayRoutesCommand;
})($Command);
export { ListGatewayRoutesCommand };
//# sourceMappingURL=ListGatewayRoutesCommand.js.map
