import { __extends } from "tslib";
import { DeleteVpcLinkRequest, DeleteVpcLinkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVpcLinkCommand,
  serializeAws_restJson1DeleteVpcLinkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteVpcLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpcLinkCommand = /** @class */ (function (_super) {
  __extends(DeleteVpcLinkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVpcLinkCommand(input) {
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
  DeleteVpcLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteVpcLinkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVpcLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcLinkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVpcLinkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVpcLinkCommand(input, context);
  };
  DeleteVpcLinkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVpcLinkCommand(output, context);
  };
  return DeleteVpcLinkCommand;
})($Command);
export { DeleteVpcLinkCommand };
//# sourceMappingURL=DeleteVpcLinkCommand.js.map
