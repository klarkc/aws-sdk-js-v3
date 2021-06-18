import { __extends } from "tslib";
import { CreateFunctionRequest, CreateFunctionResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateFunctionCommand,
  serializeAws_restXmlCreateFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a CloudFront function.</p>
 * 		       <p>To create a function, you provide the function code and some configuration information
 * 			about the function. The response contains an Amazon Resource Name (ARN) that uniquely
 * 			identifies the function.</p>
 * 		       <p>When you create a function, it’s in the <code>DEVELOPMENT</code> stage. In this stage, you
 * 			can test the function with <code>TestFunction</code>, and update it with
 * 			<code>UpdateFunction</code>.</p>
 * 		       <p>When you’re ready to use your function with a CloudFront distribution, use
 * 			<code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code>
 * 			stage to <code>LIVE</code>. When it’s live, you can attach the function to a
 * 			distribution’s cache behavior, using the function’s ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFunctionCommand = /** @class */ (function (_super) {
  __extends(CreateFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateFunctionCommand(input) {
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
  CreateFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFunctionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateFunctionCommand(input, context);
  };
  CreateFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateFunctionCommand(output, context);
  };
  return CreateFunctionCommand;
})($Command);
export { CreateFunctionCommand };
//# sourceMappingURL=CreateFunctionCommand.js.map
