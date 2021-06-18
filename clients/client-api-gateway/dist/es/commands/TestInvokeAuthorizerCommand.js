import { __extends } from "tslib";
import { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1TestInvokeAuthorizerCommand,
  serializeAws_restJson1TestInvokeAuthorizerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p>
 *       <div class="seeAlso">
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a>
 *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a>
 *       </div>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestInvokeAuthorizerCommand = /** @class */ (function (_super) {
  __extends(TestInvokeAuthorizerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TestInvokeAuthorizerCommand(input) {
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
  TestInvokeAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "TestInvokeAuthorizerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TestInvokeAuthorizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestInvokeAuthorizerResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TestInvokeAuthorizerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1TestInvokeAuthorizerCommand(input, context);
  };
  TestInvokeAuthorizerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TestInvokeAuthorizerCommand(output, context);
  };
  return TestInvokeAuthorizerCommand;
})($Command);
export { TestInvokeAuthorizerCommand };
//# sourceMappingURL=TestInvokeAuthorizerCommand.js.map
