import { __extends } from "tslib";
import { CreateUsagePlanKeyRequest, UsagePlanKey } from "../models/models_0";
import {
  deserializeAws_restJson1CreateUsagePlanKeyCommand,
  serializeAws_restJson1CreateUsagePlanKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUsagePlanKeyCommand = /** @class */ (function (_super) {
  __extends(CreateUsagePlanKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateUsagePlanKeyCommand(input) {
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
  CreateUsagePlanKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateUsagePlanKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateUsagePlanKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlanKey.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateUsagePlanKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateUsagePlanKeyCommand(input, context);
  };
  CreateUsagePlanKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateUsagePlanKeyCommand(output, context);
  };
  return CreateUsagePlanKeyCommand;
})($Command);
export { CreateUsagePlanKeyCommand };
//# sourceMappingURL=CreateUsagePlanKeyCommand.js.map
