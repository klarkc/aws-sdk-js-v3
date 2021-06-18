import { __extends } from "tslib";
import { DeleteWebhookRequest, DeleteWebhookResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteWebhookCommand,
  serializeAws_restJson1DeleteWebhookCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes a webhook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWebhookCommand = /** @class */ (function (_super) {
  __extends(DeleteWebhookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteWebhookCommand(input) {
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
  DeleteWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "DeleteWebhookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteWebhookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWebhookResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteWebhookCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteWebhookCommand(input, context);
  };
  DeleteWebhookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteWebhookCommand(output, context);
  };
  return DeleteWebhookCommand;
})($Command);
export { DeleteWebhookCommand };
//# sourceMappingURL=DeleteWebhookCommand.js.map
