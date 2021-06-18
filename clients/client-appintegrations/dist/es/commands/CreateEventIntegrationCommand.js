import { __extends } from "tslib";
import { CreateEventIntegrationRequest, CreateEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateEventIntegrationCommand,
  serializeAws_restJson1CreateEventIntegrationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Creates an EventIntegration, given a specified name, description, and a reference to an
 *       Amazon Eventbridge bus in your account and a partner event source that will push events to that bus. No
 *       objects are created in the your account, only metadata that is persisted on the EventIntegration
 *       control plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new CreateEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEventIntegrationCommand = /** @class */ (function (_super) {
  __extends(CreateEventIntegrationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateEventIntegrationCommand(input) {
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
  CreateEventIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppIntegrationsClient";
    var commandName = "CreateEventIntegrationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventIntegrationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateEventIntegrationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateEventIntegrationCommand(input, context);
  };
  CreateEventIntegrationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateEventIntegrationCommand(output, context);
  };
  return CreateEventIntegrationCommand;
})($Command);
export { CreateEventIntegrationCommand };
//# sourceMappingURL=CreateEventIntegrationCommand.js.map
