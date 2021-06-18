import { __extends } from "tslib";
import { DeleteFleetRequest, DeleteFleetResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFleetCommand,
  serializeAws_json1_1DeleteFleetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFleetCommand = /** @class */ (function (_super) {
  __extends(DeleteFleetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteFleetCommand(input) {
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
  DeleteFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DeleteFleetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFleetResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteFleetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteFleetCommand(input, context);
  };
  DeleteFleetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteFleetCommand(output, context);
  };
  return DeleteFleetCommand;
})($Command);
export { DeleteFleetCommand };
//# sourceMappingURL=DeleteFleetCommand.js.map
