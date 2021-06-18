import { __extends } from "tslib";
import { DomainName, UpdateDomainNameRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDomainNameCommand,
  serializeAws_restJson1UpdateDomainNameCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about the <a>DomainName</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateDomainNameCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateDomainNameCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateDomainNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainNameCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainNameCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainNameCommand = /** @class */ (function (_super) {
  __extends(UpdateDomainNameCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDomainNameCommand(input) {
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
  UpdateDomainNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateDomainNameCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDomainNameRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DomainName.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDomainNameCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateDomainNameCommand(input, context);
  };
  UpdateDomainNameCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateDomainNameCommand(output, context);
  };
  return UpdateDomainNameCommand;
})($Command);
export { UpdateDomainNameCommand };
//# sourceMappingURL=UpdateDomainNameCommand.js.map
