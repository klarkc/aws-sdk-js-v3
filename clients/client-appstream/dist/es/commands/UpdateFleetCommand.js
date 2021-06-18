import { __extends } from "tslib";
import { UpdateFleetRequest, UpdateFleetResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFleetCommand,
  serializeAws_json1_1UpdateFleetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified fleet.</p>
 *         <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.
 *             If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.
 *             If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFleetCommand = /** @class */ (function (_super) {
  __extends(UpdateFleetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateFleetCommand(input) {
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
  UpdateFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "UpdateFleetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateFleetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateFleetCommand(input, context);
  };
  UpdateFleetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateFleetCommand(output, context);
  };
  return UpdateFleetCommand;
})($Command);
export { UpdateFleetCommand };
//# sourceMappingURL=UpdateFleetCommand.js.map
