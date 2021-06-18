import { __extends } from "tslib";
import { TestInvokeMethodRequest, TestInvokeMethodResponse } from "../models/models_0";
import {
  deserializeAws_restJson1TestInvokeMethodCommand,
  serializeAws_restJson1TestInvokeMethodCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, TestInvokeMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, TestInvokeMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new TestInvokeMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestInvokeMethodCommandInput} for command's `input` shape.
 * @see {@link TestInvokeMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestInvokeMethodCommand = /** @class */ (function (_super) {
  __extends(TestInvokeMethodCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TestInvokeMethodCommand(input) {
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
  TestInvokeMethodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "TestInvokeMethodCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TestInvokeMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestInvokeMethodResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TestInvokeMethodCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1TestInvokeMethodCommand(input, context);
  };
  TestInvokeMethodCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TestInvokeMethodCommand(output, context);
  };
  return TestInvokeMethodCommand;
})($Command);
export { TestInvokeMethodCommand };
//# sourceMappingURL=TestInvokeMethodCommand.js.map
