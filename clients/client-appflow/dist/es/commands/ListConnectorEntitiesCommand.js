import { __extends } from "tslib";
import { ListConnectorEntitiesRequest, ListConnectorEntitiesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListConnectorEntitiesCommand,
  serializeAws_restJson1ListConnectorEntitiesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListConnectorEntitiesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListConnectorEntitiesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new ListConnectorEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListConnectorEntitiesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConnectorEntitiesCommand = /** @class */ (function (_super) {
  __extends(ListConnectorEntitiesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListConnectorEntitiesCommand(input) {
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
  ListConnectorEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "ListConnectorEntitiesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListConnectorEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConnectorEntitiesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListConnectorEntitiesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListConnectorEntitiesCommand(input, context);
  };
  ListConnectorEntitiesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListConnectorEntitiesCommand(output, context);
  };
  return ListConnectorEntitiesCommand;
})($Command);
export { ListConnectorEntitiesCommand };
//# sourceMappingURL=ListConnectorEntitiesCommand.js.map
