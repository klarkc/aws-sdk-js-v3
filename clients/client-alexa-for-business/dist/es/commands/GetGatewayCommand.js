import { __extends } from "tslib";
import { GetGatewayRequest, GetGatewayResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetGatewayCommand,
  serializeAws_json1_1GetGatewayCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details of a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetGatewayCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetGatewayCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayCommandInput} for command's `input` shape.
 * @see {@link GetGatewayCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGatewayCommand = /** @class */ (function (_super) {
  __extends(GetGatewayCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGatewayCommand(input) {
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
  GetGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "GetGatewayCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGatewayResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGatewayCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetGatewayCommand(input, context);
  };
  GetGatewayCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetGatewayCommand(output, context);
  };
  return GetGatewayCommand;
})($Command);
export { GetGatewayCommand };
//# sourceMappingURL=GetGatewayCommand.js.map
