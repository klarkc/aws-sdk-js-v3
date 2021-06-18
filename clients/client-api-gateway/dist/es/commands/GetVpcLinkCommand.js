import { __extends } from "tslib";
import { GetVpcLinkRequest, VpcLink } from "../models/models_0";
import {
  deserializeAws_restJson1GetVpcLinkCommand,
  serializeAws_restJson1GetVpcLinkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a specified VPC link under the caller's account in a region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetVpcLinkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetVpcLinkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetVpcLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVpcLinkCommandInput} for command's `input` shape.
 * @see {@link GetVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVpcLinkCommand = /** @class */ (function (_super) {
  __extends(GetVpcLinkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVpcLinkCommand(input) {
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
  GetVpcLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetVpcLinkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVpcLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VpcLink.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVpcLinkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVpcLinkCommand(input, context);
  };
  GetVpcLinkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVpcLinkCommand(output, context);
  };
  return GetVpcLinkCommand;
})($Command);
export { GetVpcLinkCommand };
//# sourceMappingURL=GetVpcLinkCommand.js.map
