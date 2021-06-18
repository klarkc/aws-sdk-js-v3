import { __extends } from "tslib";
import { ListGatewayGroupsRequest, ListGatewayGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListGatewayGroupsCommand,
  serializeAws_json1_1ListGatewayGroupsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of
 *          a specific gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListGatewayGroupsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListGatewayGroupsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListGatewayGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewayGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGatewayGroupsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGatewayGroupsCommand = /** @class */ (function (_super) {
  __extends(ListGatewayGroupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListGatewayGroupsCommand(input) {
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
  ListGatewayGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ListGatewayGroupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListGatewayGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGatewayGroupsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListGatewayGroupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListGatewayGroupsCommand(input, context);
  };
  ListGatewayGroupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListGatewayGroupsCommand(output, context);
  };
  return ListGatewayGroupsCommand;
})($Command);
export { ListGatewayGroupsCommand };
//# sourceMappingURL=ListGatewayGroupsCommand.js.map
