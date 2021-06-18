import { __extends } from "tslib";
import { CopyBackupToRegionRequest, CopyBackupToRegionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CopyBackupToRegionCommand,
  serializeAws_json1_1CopyBackupToRegionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copy an AWS CloudHSM cluster backup to a different region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CopyBackupToRegionCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CopyBackupToRegionCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new CopyBackupToRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupToRegionCommandInput} for command's `input` shape.
 * @see {@link CopyBackupToRegionCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyBackupToRegionCommand = /** @class */ (function (_super) {
  __extends(CopyBackupToRegionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CopyBackupToRegionCommand(input) {
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
  CopyBackupToRegionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "CopyBackupToRegionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CopyBackupToRegionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyBackupToRegionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CopyBackupToRegionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CopyBackupToRegionCommand(input, context);
  };
  CopyBackupToRegionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CopyBackupToRegionCommand(output, context);
  };
  return CopyBackupToRegionCommand;
})($Command);
export { CopyBackupToRegionCommand };
//# sourceMappingURL=CopyBackupToRegionCommand.js.map
