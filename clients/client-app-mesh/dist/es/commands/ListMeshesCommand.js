import { __extends } from "tslib";
import { ListMeshesInput, ListMeshesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListMeshesCommand,
  serializeAws_restJson1ListMeshesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing service meshes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListMeshesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListMeshesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListMeshesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeshesCommandInput} for command's `input` shape.
 * @see {@link ListMeshesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMeshesCommand = /** @class */ (function (_super) {
  __extends(ListMeshesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListMeshesCommand(input) {
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
  ListMeshesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "ListMeshesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListMeshesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListMeshesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListMeshesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListMeshesCommand(input, context);
  };
  ListMeshesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListMeshesCommand(output, context);
  };
  return ListMeshesCommand;
})($Command);
export { ListMeshesCommand };
//# sourceMappingURL=ListMeshesCommand.js.map
