import { __extends } from "tslib";
import { GetGatewayGroupRequest, GetGatewayGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetGatewayGroupCommand,
  serializeAws_json1_1GetGatewayGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details of a gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link GetGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGatewayGroupCommand = /** @class */ (function (_super) {
  __extends(GetGatewayGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGatewayGroupCommand(input) {
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
  GetGatewayGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "GetGatewayGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetGatewayGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGatewayGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGatewayGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetGatewayGroupCommand(input, context);
  };
  GetGatewayGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetGatewayGroupCommand(output, context);
  };
  return GetGatewayGroupCommand;
})($Command);
export { GetGatewayGroupCommand };
//# sourceMappingURL=GetGatewayGroupCommand.js.map
