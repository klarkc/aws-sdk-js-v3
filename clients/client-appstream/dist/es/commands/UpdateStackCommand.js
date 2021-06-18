import { __extends } from "tslib";
import { UpdateStackRequest, UpdateStackResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateStackCommand,
  serializeAws_json1_1UpdateStackCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified fields for the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStackCommandInput} for command's `input` shape.
 * @see {@link UpdateStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStackCommand = /** @class */ (function (_super) {
  __extends(UpdateStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateStackCommand(input) {
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
  UpdateStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "UpdateStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStackResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateStackCommand(input, context);
  };
  UpdateStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateStackCommand(output, context);
  };
  return UpdateStackCommand;
})($Command);
export { UpdateStackCommand };
//# sourceMappingURL=UpdateStackCommand.js.map
