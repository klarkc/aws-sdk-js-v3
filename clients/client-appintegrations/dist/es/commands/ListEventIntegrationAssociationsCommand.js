import { __extends } from "tslib";
import { ListEventIntegrationAssociationsRequest, ListEventIntegrationAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListEventIntegrationAssociationsCommand,
  serializeAws_restJson1ListEventIntegrationAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Returns a paginated list of event integration associations in the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListEventIntegrationAssociationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListEventIntegrationAssociationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new ListEventIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListEventIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventIntegrationAssociationsCommand = /** @class */ (function (_super) {
  __extends(ListEventIntegrationAssociationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListEventIntegrationAssociationsCommand(input) {
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
  ListEventIntegrationAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppIntegrationsClient";
    var commandName = "ListEventIntegrationAssociationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListEventIntegrationAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventIntegrationAssociationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListEventIntegrationAssociationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListEventIntegrationAssociationsCommand(input, context);
  };
  ListEventIntegrationAssociationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListEventIntegrationAssociationsCommand(output, context);
  };
  return ListEventIntegrationAssociationsCommand;
})($Command);
export { ListEventIntegrationAssociationsCommand };
//# sourceMappingURL=ListEventIntegrationAssociationsCommand.js.map
