import { __extends } from "tslib";
import { ListChannelsRequest, ListChannelsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelsCommand,
  serializeAws_restJson1ListChannelsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p>
 *
 *          <p class="title">
 *             <b>Functionality & restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p>
 *             </li>
 *             <li>
 *                <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the
 *                     private channels in an account.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChannelsCommand = /** @class */ (function (_super) {
  __extends(ListChannelsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChannelsCommand(input) {
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
  ListChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListChannelsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChannelsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListChannelsCommand(input, context);
  };
  ListChannelsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListChannelsCommand(output, context);
  };
  return ListChannelsCommand;
})($Command);
export { ListChannelsCommand };
//# sourceMappingURL=ListChannelsCommand.js.map
