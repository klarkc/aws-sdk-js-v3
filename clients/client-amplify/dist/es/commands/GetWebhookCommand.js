import { __extends } from "tslib";
import { GetWebhookRequest, GetWebhookResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetWebhookCommand,
  serializeAws_restJson1GetWebhookCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the webhook information that corresponds to a specified webhook ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWebhookCommandInput} for command's `input` shape.
 * @see {@link GetWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWebhookCommand = /** @class */ (function (_super) {
  __extends(GetWebhookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetWebhookCommand(input) {
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
  GetWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "GetWebhookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetWebhookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWebhookResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetWebhookCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetWebhookCommand(input, context);
  };
  GetWebhookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetWebhookCommand(output, context);
  };
  return GetWebhookCommand;
})($Command);
export { GetWebhookCommand };
//# sourceMappingURL=GetWebhookCommand.js.map
