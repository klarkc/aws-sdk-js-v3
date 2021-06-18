import { __extends } from "tslib";
import { CreateAppInstanceAdminRequest, CreateAppInstanceAdminResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppInstanceAdminCommand,
  serializeAws_restJson1CreateAppInstanceAdminCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions.
 * </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteChannelMessage</code> actions.</p>
 *             </li>
 *          </ul>
 *
 *          <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppInstanceAdminCommand = /** @class */ (function (_super) {
  __extends(CreateAppInstanceAdminCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAppInstanceAdminCommand(input) {
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
  CreateAppInstanceAdminCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateAppInstanceAdminCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAppInstanceAdminRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAppInstanceAdminResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAppInstanceAdminCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAppInstanceAdminCommand(input, context);
  };
  CreateAppInstanceAdminCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAppInstanceAdminCommand(output, context);
  };
  return CreateAppInstanceAdminCommand;
})($Command);
export { CreateAppInstanceAdminCommand };
//# sourceMappingURL=CreateAppInstanceAdminCommand.js.map
