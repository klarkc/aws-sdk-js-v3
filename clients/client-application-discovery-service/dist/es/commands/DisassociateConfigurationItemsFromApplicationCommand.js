import { __extends } from "tslib";
import {
  DisassociateConfigurationItemsFromApplicationRequest,
  DisassociateConfigurationItemsFromApplicationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand,
  serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates one or more configuration items from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DisassociateConfigurationItemsFromApplicationCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DisassociateConfigurationItemsFromApplicationCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DisassociateConfigurationItemsFromApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConfigurationItemsFromApplicationCommandInput} for command's `input` shape.
 * @see {@link DisassociateConfigurationItemsFromApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateConfigurationItemsFromApplicationCommand = /** @class */ (function (_super) {
  __extends(DisassociateConfigurationItemsFromApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateConfigurationItemsFromApplicationCommand(input) {
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
  DisassociateConfigurationItemsFromApplicationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DisassociateConfigurationItemsFromApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateConfigurationItemsFromApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateConfigurationItemsFromApplicationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateConfigurationItemsFromApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(input, context);
  };
  DisassociateConfigurationItemsFromApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(output, context);
  };
  return DisassociateConfigurationItemsFromApplicationCommand;
})($Command);
export { DisassociateConfigurationItemsFromApplicationCommand };
//# sourceMappingURL=DisassociateConfigurationItemsFromApplicationCommand.js.map
