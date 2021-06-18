import { __extends } from "tslib";
import { CreateGatewayGroupRequest, CreateGatewayGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGatewayGroupCommand,
  serializeAws_json1_1CreateGatewayGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a gateway group with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGatewayGroupCommand = /** @class */ (function (_super) {
  __extends(CreateGatewayGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateGatewayGroupCommand(input) {
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
  CreateGatewayGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateGatewayGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateGatewayGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGatewayGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateGatewayGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateGatewayGroupCommand(input, context);
  };
  CreateGatewayGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateGatewayGroupCommand(output, context);
  };
  return CreateGatewayGroupCommand;
})($Command);
export { CreateGatewayGroupCommand };
//# sourceMappingURL=CreateGatewayGroupCommand.js.map
