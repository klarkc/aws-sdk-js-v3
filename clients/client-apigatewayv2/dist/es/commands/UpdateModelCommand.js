import { __extends } from "tslib";
import { UpdateModelRequest, UpdateModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateModelCommand,
  serializeAws_restJson1UpdateModelCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a Model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateModelCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateModelCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelCommandInput} for command's `input` shape.
 * @see {@link UpdateModelCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateModelCommand = /** @class */ (function (_super) {
  __extends(UpdateModelCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateModelCommand(input) {
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
  UpdateModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "UpdateModelCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateModelResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateModelCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateModelCommand(input, context);
  };
  UpdateModelCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateModelCommand(output, context);
  };
  return UpdateModelCommand;
})($Command);
export { UpdateModelCommand };
//# sourceMappingURL=UpdateModelCommand.js.map
