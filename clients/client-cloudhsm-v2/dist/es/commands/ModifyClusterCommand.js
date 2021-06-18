import { __extends } from "tslib";
import { ModifyClusterRequest, ModifyClusterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyClusterCommand,
  serializeAws_json1_1ModifyClusterCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies AWS CloudHSM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ModifyClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ModifyClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterCommand = /** @class */ (function (_super) {
  __extends(ModifyClusterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ModifyClusterCommand(input) {
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
  ModifyClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "ModifyClusterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ModifyClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ModifyClusterCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ModifyClusterCommand(input, context);
  };
  ModifyClusterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ModifyClusterCommand(output, context);
  };
  return ModifyClusterCommand;
})($Command);
export { ModifyClusterCommand };
//# sourceMappingURL=ModifyClusterCommand.js.map
