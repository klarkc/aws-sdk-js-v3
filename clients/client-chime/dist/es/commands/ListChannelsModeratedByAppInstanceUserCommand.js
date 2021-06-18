import { __extends } from "tslib";
import {
  ListChannelsModeratedByAppInstanceUserRequest,
  ListChannelsModeratedByAppInstanceUserResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand,
  serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelsModeratedByAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelsModeratedByAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelsModeratedByAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelsModeratedByAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link ListChannelsModeratedByAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChannelsModeratedByAppInstanceUserCommand = /** @class */ (function (_super) {
  __extends(ListChannelsModeratedByAppInstanceUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChannelsModeratedByAppInstanceUserCommand(input) {
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
  ListChannelsModeratedByAppInstanceUserCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListChannelsModeratedByAppInstanceUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChannelsModeratedByAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelsModeratedByAppInstanceUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChannelsModeratedByAppInstanceUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand(input, context);
  };
  ListChannelsModeratedByAppInstanceUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand(output, context);
  };
  return ListChannelsModeratedByAppInstanceUserCommand;
})($Command);
export { ListChannelsModeratedByAppInstanceUserCommand };
//# sourceMappingURL=ListChannelsModeratedByAppInstanceUserCommand.js.map
