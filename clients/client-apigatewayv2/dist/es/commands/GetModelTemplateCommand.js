import { __extends } from "tslib";
import { GetModelTemplateRequest, GetModelTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetModelTemplateCommand,
  serializeAws_restJson1GetModelTemplateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a model template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetModelTemplateCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetModelTemplateCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetModelTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelTemplateCommandInput} for command's `input` shape.
 * @see {@link GetModelTemplateCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetModelTemplateCommand = /** @class */ (function (_super) {
  __extends(GetModelTemplateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetModelTemplateCommand(input) {
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
  GetModelTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetModelTemplateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetModelTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetModelTemplateResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetModelTemplateCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetModelTemplateCommand(input, context);
  };
  GetModelTemplateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetModelTemplateCommand(output, context);
  };
  return GetModelTemplateCommand;
})($Command);
export { GetModelTemplateCommand };
//# sourceMappingURL=GetModelTemplateCommand.js.map
