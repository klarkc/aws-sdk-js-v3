import { __extends } from "tslib";
import { UpdateConnectorProfileRequest, UpdateConnectorProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConnectorProfileCommand,
  serializeAws_restJson1UpdateConnectorProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Updates a given connector profile associated with your account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UpdateConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UpdateConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new UpdateConnectorProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConnectorProfileCommand = /** @class */ (function (_super) {
  __extends(UpdateConnectorProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateConnectorProfileCommand(input) {
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
  UpdateConnectorProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "UpdateConnectorProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateConnectorProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConnectorProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateConnectorProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateConnectorProfileCommand(input, context);
  };
  UpdateConnectorProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateConnectorProfileCommand(output, context);
  };
  return UpdateConnectorProfileCommand;
})($Command);
export { UpdateConnectorProfileCommand };
//# sourceMappingURL=UpdateConnectorProfileCommand.js.map
