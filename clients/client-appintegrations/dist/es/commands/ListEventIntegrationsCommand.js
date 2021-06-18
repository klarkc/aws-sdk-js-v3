import { __extends } from "tslib";
import { ListEventIntegrationsRequest, ListEventIntegrationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListEventIntegrationsCommand,
  serializeAws_restJson1ListEventIntegrationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Returns a paginated list of event integrations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListEventIntegrationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListEventIntegrationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new ListEventIntegrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListEventIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventIntegrationsCommand = /** @class */ (function (_super) {
  __extends(ListEventIntegrationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListEventIntegrationsCommand(input) {
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
  ListEventIntegrationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppIntegrationsClient";
    var commandName = "ListEventIntegrationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListEventIntegrationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventIntegrationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListEventIntegrationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListEventIntegrationsCommand(input, context);
  };
  ListEventIntegrationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListEventIntegrationsCommand(output, context);
  };
  return ListEventIntegrationsCommand;
})($Command);
export { ListEventIntegrationsCommand };
//# sourceMappingURL=ListEventIntegrationsCommand.js.map
