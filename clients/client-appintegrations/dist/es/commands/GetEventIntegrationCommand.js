import { __extends } from "tslib";
import { GetEventIntegrationRequest, GetEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEventIntegrationCommand,
  serializeAws_restJson1GetEventIntegrationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Return information about the event integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, GetEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, GetEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new GetEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEventIntegrationCommand = /** @class */ (function (_super) {
  __extends(GetEventIntegrationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEventIntegrationCommand(input) {
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
  GetEventIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppIntegrationsClient";
    var commandName = "GetEventIntegrationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEventIntegrationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEventIntegrationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEventIntegrationCommand(input, context);
  };
  GetEventIntegrationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEventIntegrationCommand(output, context);
  };
  return GetEventIntegrationCommand;
})($Command);
export { GetEventIntegrationCommand };
//# sourceMappingURL=GetEventIntegrationCommand.js.map
