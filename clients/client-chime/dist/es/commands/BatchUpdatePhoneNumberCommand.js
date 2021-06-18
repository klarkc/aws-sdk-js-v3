import { __extends } from "tslib";
import { BatchUpdatePhoneNumberRequest, BatchUpdatePhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdatePhoneNumberCommand,
  serializeAws_restJson1BatchUpdatePhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each
 *         <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p>
 *
 *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For
 *             numbers outside the
 *             US,
 *             you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 *
 *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you
 *             can request another update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUpdatePhoneNumberCommand = /** @class */ (function (_super) {
  __extends(BatchUpdatePhoneNumberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchUpdatePhoneNumberCommand(input) {
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
  BatchUpdatePhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchUpdatePhoneNumberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchUpdatePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdatePhoneNumberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchUpdatePhoneNumberCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchUpdatePhoneNumberCommand(input, context);
  };
  BatchUpdatePhoneNumberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchUpdatePhoneNumberCommand(output, context);
  };
  return BatchUpdatePhoneNumberCommand;
})($Command);
export { BatchUpdatePhoneNumberCommand };
//# sourceMappingURL=BatchUpdatePhoneNumberCommand.js.map
