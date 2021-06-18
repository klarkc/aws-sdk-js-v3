import { __extends } from "tslib";
import { GetVpcLinksRequest, VpcLinks } from "../models/models_0";
import {
  deserializeAws_restJson1GetVpcLinksCommand,
  serializeAws_restJson1GetVpcLinksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetVpcLinksCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetVpcLinksCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetVpcLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVpcLinksCommandInput} for command's `input` shape.
 * @see {@link GetVpcLinksCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVpcLinksCommand = /** @class */ (function (_super) {
  __extends(GetVpcLinksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVpcLinksCommand(input) {
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
  GetVpcLinksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetVpcLinksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVpcLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VpcLinks.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVpcLinksCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVpcLinksCommand(input, context);
  };
  GetVpcLinksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVpcLinksCommand(output, context);
  };
  return GetVpcLinksCommand;
})($Command);
export { GetVpcLinksCommand };
//# sourceMappingURL=GetVpcLinksCommand.js.map
