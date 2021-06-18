import { __extends } from "tslib";
import { CreateWebhookRequest, CreateWebhookResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWebhookCommand,
  serializeAws_restJson1CreateWebhookCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new webhook on an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebhookCommandInput} for command's `input` shape.
 * @see {@link CreateWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWebhookCommand = /** @class */ (function (_super) {
  __extends(CreateWebhookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateWebhookCommand(input) {
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
  CreateWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "CreateWebhookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateWebhookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWebhookResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateWebhookCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateWebhookCommand(input, context);
  };
  CreateWebhookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateWebhookCommand(output, context);
  };
  return CreateWebhookCommand;
})($Command);
export { CreateWebhookCommand };
//# sourceMappingURL=CreateWebhookCommand.js.map
