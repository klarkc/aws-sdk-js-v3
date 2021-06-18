import { __extends } from "tslib";
import { DeleteAppInstanceStreamingConfigurationsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand,
  serializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the streaming configurations of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppInstanceStreamingConfigurationsCommand = /** @class */ (function (_super) {
  __extends(DeleteAppInstanceStreamingConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAppInstanceStreamingConfigurationsCommand(input) {
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
  DeleteAppInstanceStreamingConfigurationsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteAppInstanceStreamingConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAppInstanceStreamingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAppInstanceStreamingConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand(input, context);
  };
  DeleteAppInstanceStreamingConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand(output, context);
  };
  return DeleteAppInstanceStreamingConfigurationsCommand;
})($Command);
export { DeleteAppInstanceStreamingConfigurationsCommand };
//# sourceMappingURL=DeleteAppInstanceStreamingConfigurationsCommand.js.map
