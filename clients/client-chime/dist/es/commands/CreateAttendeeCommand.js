import { __extends } from "tslib";
import { CreateAttendeeRequest, CreateAttendeeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAttendeeCommand,
  serializeAws_restJson1CreateAttendeeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAttendeeCommandInput} for command's `input` shape.
 * @see {@link CreateAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAttendeeCommand = /** @class */ (function (_super) {
  __extends(CreateAttendeeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAttendeeCommand(input) {
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
  CreateAttendeeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateAttendeeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAttendeeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAttendeeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAttendeeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAttendeeCommand(input, context);
  };
  CreateAttendeeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAttendeeCommand(output, context);
  };
  return CreateAttendeeCommand;
})($Command);
export { CreateAttendeeCommand };
//# sourceMappingURL=CreateAttendeeCommand.js.map
