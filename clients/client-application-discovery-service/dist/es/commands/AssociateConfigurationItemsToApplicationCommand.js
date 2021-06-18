import { __extends } from "tslib";
import {
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand,
  serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates one or more configuration items with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, AssociateConfigurationItemsToApplicationCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, AssociateConfigurationItemsToApplicationCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new AssociateConfigurationItemsToApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateConfigurationItemsToApplicationCommandInput} for command's `input` shape.
 * @see {@link AssociateConfigurationItemsToApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateConfigurationItemsToApplicationCommand = /** @class */ (function (_super) {
  __extends(AssociateConfigurationItemsToApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateConfigurationItemsToApplicationCommand(input) {
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
  AssociateConfigurationItemsToApplicationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "AssociateConfigurationItemsToApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateConfigurationItemsToApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateConfigurationItemsToApplicationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateConfigurationItemsToApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(input, context);
  };
  AssociateConfigurationItemsToApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(output, context);
  };
  return AssociateConfigurationItemsToApplicationCommand;
})($Command);
export { AssociateConfigurationItemsToApplicationCommand };
//# sourceMappingURL=AssociateConfigurationItemsToApplicationCommand.js.map
