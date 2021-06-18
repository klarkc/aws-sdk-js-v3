import { __extends } from "tslib";
import { GetModelTemplateRequest, Template } from "../models/models_0";
import {
  deserializeAws_restJson1GetModelTemplateCommand,
  serializeAws_restJson1GetModelTemplateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetModelTemplateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetModelTemplateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetModelTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelTemplateCommandInput} for command's `input` shape.
 * @see {@link GetModelTemplateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
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
    var clientName = "APIGatewayClient";
    var commandName = "GetModelTemplateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetModelTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Template.filterSensitiveLog,
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
