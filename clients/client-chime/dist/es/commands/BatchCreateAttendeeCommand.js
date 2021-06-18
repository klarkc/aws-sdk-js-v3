import { __extends } from "tslib";
import { BatchCreateAttendeeRequest, BatchCreateAttendeeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateAttendeeCommand,
  serializeAws_restJson1BatchCreateAttendeeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchCreateAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateAttendeeCommandInput} for command's `input` shape.
 * @see {@link BatchCreateAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchCreateAttendeeCommand = /** @class */ (function (_super) {
  __extends(BatchCreateAttendeeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchCreateAttendeeCommand(input) {
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
  BatchCreateAttendeeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchCreateAttendeeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchCreateAttendeeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateAttendeeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchCreateAttendeeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchCreateAttendeeCommand(input, context);
  };
  BatchCreateAttendeeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchCreateAttendeeCommand(output, context);
  };
  return BatchCreateAttendeeCommand;
})($Command);
export { BatchCreateAttendeeCommand };
//# sourceMappingURL=BatchCreateAttendeeCommand.js.map
