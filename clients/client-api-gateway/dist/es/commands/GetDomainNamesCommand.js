import { __extends } from "tslib";
import { DomainNames, GetDomainNamesRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetDomainNamesCommand,
  serializeAws_restJson1GetDomainNamesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents a collection of <a>DomainName</a> resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDomainNamesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDomainNamesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetDomainNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainNamesCommandInput} for command's `input` shape.
 * @see {@link GetDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainNamesCommand = /** @class */ (function (_super) {
  __extends(GetDomainNamesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDomainNamesCommand(input) {
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
  GetDomainNamesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetDomainNamesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDomainNamesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DomainNames.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDomainNamesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDomainNamesCommand(input, context);
  };
  GetDomainNamesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDomainNamesCommand(output, context);
  };
  return GetDomainNamesCommand;
})($Command);
export { GetDomainNamesCommand };
//# sourceMappingURL=GetDomainNamesCommand.js.map
