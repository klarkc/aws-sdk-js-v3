import { __extends } from "tslib";
import { DeleteHsmRequest, DeleteHsmResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteHsmCommand, serializeAws_json1_1DeleteHsmCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
 *       address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
 *       specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DeleteHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DeleteHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new DeleteHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHsmCommand = /** @class */ (function (_super) {
  __extends(DeleteHsmCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteHsmCommand(input) {
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
  DeleteHsmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "DeleteHsmCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteHsmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHsmResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteHsmCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteHsmCommand(input, context);
  };
  DeleteHsmCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteHsmCommand(output, context);
  };
  return DeleteHsmCommand;
})($Command);
export { DeleteHsmCommand };
//# sourceMappingURL=DeleteHsmCommand.js.map
