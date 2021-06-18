import { __extends } from "tslib";
import { DeleteEventIntegrationRequest, DeleteEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteEventIntegrationCommand,
  serializeAws_restJson1DeleteEventIntegrationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Deletes the specified existing event integration. If the event integration is associated
 *       with clients, the request is rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, DeleteEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, DeleteEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new DeleteEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventIntegrationCommand = /** @class */ (function (_super) {
  __extends(DeleteEventIntegrationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteEventIntegrationCommand(input) {
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
  DeleteEventIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppIntegrationsClient";
    var commandName = "DeleteEventIntegrationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEventIntegrationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteEventIntegrationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteEventIntegrationCommand(input, context);
  };
  DeleteEventIntegrationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteEventIntegrationCommand(output, context);
  };
  return DeleteEventIntegrationCommand;
})($Command);
export { DeleteEventIntegrationCommand };
//# sourceMappingURL=DeleteEventIntegrationCommand.js.map
