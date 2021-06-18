import { __extends } from "tslib";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHsmCommand, serializeAws_json1_1CreateHsmCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM
 *       cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CreateHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHsmCommand = /** @class */ (function (_super) {
  __extends(CreateHsmCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateHsmCommand(input) {
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
  CreateHsmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "CreateHsmCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateHsmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHsmResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateHsmCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateHsmCommand(input, context);
  };
  CreateHsmCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateHsmCommand(output, context);
  };
  return CreateHsmCommand;
})($Command);
export { CreateHsmCommand };
//# sourceMappingURL=CreateHsmCommand.js.map
