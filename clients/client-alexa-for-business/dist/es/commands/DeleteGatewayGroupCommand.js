import { __extends } from "tslib";
import { DeleteGatewayGroupRequest, DeleteGatewayGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGatewayGroupCommand,
  serializeAws_json1_1DeleteGatewayGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGatewayGroupCommand = /** @class */ (function (_super) {
  __extends(DeleteGatewayGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteGatewayGroupCommand(input) {
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
  DeleteGatewayGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteGatewayGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteGatewayGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGatewayGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteGatewayGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteGatewayGroupCommand(input, context);
  };
  DeleteGatewayGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteGatewayGroupCommand(output, context);
  };
  return DeleteGatewayGroupCommand;
})($Command);
export { DeleteGatewayGroupCommand };
//# sourceMappingURL=DeleteGatewayGroupCommand.js.map
