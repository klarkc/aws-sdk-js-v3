import { __extends } from "tslib";
import { DeleteConnectorProfileRequest, DeleteConnectorProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteConnectorProfileCommand,
  serializeAws_restJson1DeleteConnectorProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *  Enables you to delete an existing connector profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DeleteConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DeleteConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DeleteConnectorProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConnectorProfileCommand = /** @class */ (function (_super) {
  __extends(DeleteConnectorProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteConnectorProfileCommand(input) {
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
  DeleteConnectorProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "DeleteConnectorProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteConnectorProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConnectorProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteConnectorProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteConnectorProfileCommand(input, context);
  };
  DeleteConnectorProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteConnectorProfileCommand(output, context);
  };
  return DeleteConnectorProfileCommand;
})($Command);
export { DeleteConnectorProfileCommand };
//# sourceMappingURL=DeleteConnectorProfileCommand.js.map
