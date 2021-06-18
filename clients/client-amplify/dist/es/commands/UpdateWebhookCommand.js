import { __extends } from "tslib";
import { UpdateWebhookRequest, UpdateWebhookResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWebhookCommand,
  serializeAws_restJson1UpdateWebhookCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates a webhook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWebhookCommand = /** @class */ (function (_super) {
  __extends(UpdateWebhookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateWebhookCommand(input) {
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
  UpdateWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "UpdateWebhookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateWebhookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWebhookResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateWebhookCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateWebhookCommand(input, context);
  };
  UpdateWebhookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateWebhookCommand(output, context);
  };
  return UpdateWebhookCommand;
})($Command);
export { UpdateWebhookCommand };
//# sourceMappingURL=UpdateWebhookCommand.js.map
