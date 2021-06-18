import { __extends } from "tslib";
import { UpdateGatewayGroupRequest, UpdateGatewayGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGatewayGroupCommand,
  serializeAws_json1_1UpdateGatewayGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details of a gateway group. If any optional field is not provided, the
 *          existing corresponding value is left unmodified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewayGroupCommand = /** @class */ (function (_super) {
  __extends(UpdateGatewayGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGatewayGroupCommand(input) {
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
  UpdateGatewayGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateGatewayGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGatewayGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewayGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGatewayGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateGatewayGroupCommand(input, context);
  };
  UpdateGatewayGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateGatewayGroupCommand(output, context);
  };
  return UpdateGatewayGroupCommand;
})($Command);
export { UpdateGatewayGroupCommand };
//# sourceMappingURL=UpdateGatewayGroupCommand.js.map
