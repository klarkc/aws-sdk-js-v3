import { __extends } from "tslib";
import { CancelUpdateStackInput } from "../models/models_0";
import {
  deserializeAws_queryCancelUpdateStackCommand,
  serializeAws_queryCancelUpdateStackCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an update on the specified stack. If the call completes successfully, the
 *          stack rolls back the update and reverts to the previous stack configuration.</p>
 *          <note>
 *             <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CancelUpdateStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CancelUpdateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CancelUpdateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelUpdateStackCommandInput} for command's `input` shape.
 * @see {@link CancelUpdateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelUpdateStackCommand = /** @class */ (function (_super) {
  __extends(CancelUpdateStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CancelUpdateStackCommand(input) {
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
  CancelUpdateStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "CancelUpdateStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CancelUpdateStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CancelUpdateStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryCancelUpdateStackCommand(input, context);
  };
  CancelUpdateStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryCancelUpdateStackCommand(output, context);
  };
  return CancelUpdateStackCommand;
})($Command);
export { CancelUpdateStackCommand };
//# sourceMappingURL=CancelUpdateStackCommand.js.map
