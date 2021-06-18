import { __extends } from "tslib";
import { ListChannelBansRequest, ListChannelBansResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelBansCommand,
  serializeAws_restJson1ListChannelBansCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the users banned from a particular channel.</p>
 *
 *          <note>
 *
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelBansCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelBansCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelBansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelBansCommandInput} for command's `input` shape.
 * @see {@link ListChannelBansCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChannelBansCommand = /** @class */ (function (_super) {
  __extends(ListChannelBansCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChannelBansCommand(input) {
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
  ListChannelBansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListChannelBansCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChannelBansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelBansResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChannelBansCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListChannelBansCommand(input, context);
  };
  ListChannelBansCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListChannelBansCommand(output, context);
  };
  return ListChannelBansCommand;
})($Command);
export { ListChannelBansCommand };
//# sourceMappingURL=ListChannelBansCommand.js.map
