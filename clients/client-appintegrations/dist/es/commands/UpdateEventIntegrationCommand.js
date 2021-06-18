import { __extends } from "tslib";
import { UpdateEventIntegrationRequest, UpdateEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEventIntegrationCommand,
  serializeAws_restJson1UpdateEventIntegrationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Updates the description of an event integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, UpdateEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, UpdateEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new UpdateEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEventIntegrationCommand = /** @class */ (function (_super) {
  __extends(UpdateEventIntegrationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateEventIntegrationCommand(input) {
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
  UpdateEventIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppIntegrationsClient";
    var commandName = "UpdateEventIntegrationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEventIntegrationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateEventIntegrationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateEventIntegrationCommand(input, context);
  };
  UpdateEventIntegrationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateEventIntegrationCommand(output, context);
  };
  return UpdateEventIntegrationCommand;
})($Command);
export { UpdateEventIntegrationCommand };
//# sourceMappingURL=UpdateEventIntegrationCommand.js.map
