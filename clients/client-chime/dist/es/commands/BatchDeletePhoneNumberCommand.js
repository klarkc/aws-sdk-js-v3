import { __extends } from "tslib";
import { BatchDeletePhoneNumberRequest, BatchDeletePhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeletePhoneNumberCommand,
  serializeAws_restJson1BatchDeletePhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Moves phone numbers into the
 * <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.
 * </p>
 *
 *          <p>
 * Phone numbers remain in the
 * <b>Deletion queue</b> for 7 days before they are deleted permanently.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchDeletePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchDeletePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchDeletePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeletePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeletePhoneNumberCommand = /** @class */ (function (_super) {
  __extends(BatchDeletePhoneNumberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchDeletePhoneNumberCommand(input) {
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
  BatchDeletePhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchDeletePhoneNumberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchDeletePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeletePhoneNumberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchDeletePhoneNumberCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchDeletePhoneNumberCommand(input, context);
  };
  BatchDeletePhoneNumberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchDeletePhoneNumberCommand(output, context);
  };
  return BatchDeletePhoneNumberCommand;
})($Command);
export { BatchDeletePhoneNumberCommand };
//# sourceMappingURL=BatchDeletePhoneNumberCommand.js.map
