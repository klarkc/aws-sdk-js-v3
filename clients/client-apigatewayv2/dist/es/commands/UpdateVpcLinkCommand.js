import { __extends } from "tslib";
import { UpdateVpcLinkRequest, UpdateVpcLinkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVpcLinkCommand,
  serializeAws_restJson1UpdateVpcLinkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateVpcLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVpcLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVpcLinkCommand = /** @class */ (function (_super) {
  __extends(UpdateVpcLinkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVpcLinkCommand(input) {
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
  UpdateVpcLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "UpdateVpcLinkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVpcLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVpcLinkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVpcLinkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVpcLinkCommand(input, context);
  };
  UpdateVpcLinkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVpcLinkCommand(output, context);
  };
  return UpdateVpcLinkCommand;
})($Command);
export { UpdateVpcLinkCommand };
//# sourceMappingURL=UpdateVpcLinkCommand.js.map
