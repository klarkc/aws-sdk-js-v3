import { __extends } from "tslib";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListConfigurationsCommand,
  serializeAws_json1_1ListConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of configuration items as specified by the value passed to the
 *       required parameter <code>configurationType</code>. Optional filtering may be applied to refine
 *       search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationsCommand = /** @class */ (function (_super) {
  __extends(ListConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListConfigurationsCommand(input) {
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
  ListConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "ListConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConfigurationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListConfigurationsCommand(input, context);
  };
  ListConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListConfigurationsCommand(output, context);
  };
  return ListConfigurationsCommand;
})($Command);
export { ListConfigurationsCommand };
//# sourceMappingURL=ListConfigurationsCommand.js.map
