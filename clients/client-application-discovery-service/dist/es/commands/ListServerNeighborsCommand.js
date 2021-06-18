import { __extends } from "tslib";
import { ListServerNeighborsRequest, ListServerNeighborsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListServerNeighborsCommand,
  serializeAws_json1_1ListServerNeighborsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of servers that are one network hop away from a specified
 *       server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new ListServerNeighborsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServerNeighborsCommandInput} for command's `input` shape.
 * @see {@link ListServerNeighborsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServerNeighborsCommand = /** @class */ (function (_super) {
  __extends(ListServerNeighborsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListServerNeighborsCommand(input) {
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
  ListServerNeighborsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "ListServerNeighborsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListServerNeighborsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServerNeighborsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListServerNeighborsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListServerNeighborsCommand(input, context);
  };
  ListServerNeighborsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListServerNeighborsCommand(output, context);
  };
  return ListServerNeighborsCommand;
})($Command);
export { ListServerNeighborsCommand };
//# sourceMappingURL=ListServerNeighborsCommand.js.map
