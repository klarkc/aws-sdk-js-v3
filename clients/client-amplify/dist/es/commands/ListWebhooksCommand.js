import { __extends } from "tslib";
import { ListWebhooksRequest, ListWebhooksResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListWebhooksCommand,
  serializeAws_restJson1ListWebhooksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of webhooks for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListWebhooksCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListWebhooksCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListWebhooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebhooksCommandInput} for command's `input` shape.
 * @see {@link ListWebhooksCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWebhooksCommand = /** @class */ (function (_super) {
  __extends(ListWebhooksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListWebhooksCommand(input) {
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
  ListWebhooksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "ListWebhooksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListWebhooksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWebhooksResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListWebhooksCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListWebhooksCommand(input, context);
  };
  ListWebhooksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListWebhooksCommand(output, context);
  };
  return ListWebhooksCommand;
})($Command);
export { ListWebhooksCommand };
//# sourceMappingURL=ListWebhooksCommand.js.map
