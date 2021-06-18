import { __extends } from "tslib";
import { CreateMeetingDialOutRequest, CreateMeetingDialOutResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeetingDialOutCommand,
  serializeAws_restJson1CreateMeetingDialOutCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public
 *     switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p>
 *
 *          <p>To play welcome audio or implement an interactive voice response (IVR), use the
 * <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMeetingDialOutCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMeetingDialOutCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateMeetingDialOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeetingDialOutCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingDialOutCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMeetingDialOutCommand = /** @class */ (function (_super) {
  __extends(CreateMeetingDialOutCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateMeetingDialOutCommand(input) {
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
  CreateMeetingDialOutCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateMeetingDialOutCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateMeetingDialOutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingDialOutResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateMeetingDialOutCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateMeetingDialOutCommand(input, context);
  };
  CreateMeetingDialOutCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateMeetingDialOutCommand(output, context);
  };
  return CreateMeetingDialOutCommand;
})($Command);
export { CreateMeetingDialOutCommand };
//# sourceMappingURL=CreateMeetingDialOutCommand.js.map
