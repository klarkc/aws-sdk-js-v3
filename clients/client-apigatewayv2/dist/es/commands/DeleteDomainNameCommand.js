import { __extends } from "tslib";
import { DeleteDomainNameRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDomainNameCommand,
  serializeAws_restJson1DeleteDomainNameCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteDomainNameCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteDomainNameCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteDomainNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainNameCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainNameCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDomainNameCommand = /** @class */ (function (_super) {
  __extends(DeleteDomainNameCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDomainNameCommand(input) {
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
  DeleteDomainNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteDomainNameCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDomainNameRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDomainNameCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteDomainNameCommand(input, context);
  };
  DeleteDomainNameCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteDomainNameCommand(output, context);
  };
  return DeleteDomainNameCommand;
})($Command);
export { DeleteDomainNameCommand };
//# sourceMappingURL=DeleteDomainNameCommand.js.map
