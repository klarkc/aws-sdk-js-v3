import { __extends } from "tslib";
import { UpdateGatewayRequest, UpdateGatewayResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGatewayCommand,
  serializeAws_json1_1UpdateGatewayCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details of a gateway. If any optional field is not provided, the existing
 *          corresponding value is left unmodified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateGatewayCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateGatewayCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewayCommand = /** @class */ (function (_super) {
  __extends(UpdateGatewayCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGatewayCommand(input) {
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
  UpdateGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateGatewayCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewayResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGatewayCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateGatewayCommand(input, context);
  };
  UpdateGatewayCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateGatewayCommand(output, context);
  };
  return UpdateGatewayCommand;
})($Command);
export { UpdateGatewayCommand };
//# sourceMappingURL=UpdateGatewayCommand.js.map
