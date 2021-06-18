import { __extends } from "tslib";
import { UpdateFunctionRequest, UpdateFunctionResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateFunctionCommand,
  serializeAws_restXmlUpdateFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a CloudFront function.</p>
 * 		       <p>You can update a function’s code or the comment that describes the function. You
 * 			cannot update a function’s name.</p>
 * 		       <p>To update a function, you provide the function’s name and version (<code>ETag</code> value)
 * 			along with the updated function code. To get the name and version, you can use
 * 			<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFunctionCommand = /** @class */ (function (_super) {
  __extends(UpdateFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateFunctionCommand(input) {
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
  UpdateFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFunctionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateFunctionCommand(input, context);
  };
  UpdateFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateFunctionCommand(output, context);
  };
  return UpdateFunctionCommand;
})($Command);
export { UpdateFunctionCommand };
//# sourceMappingURL=UpdateFunctionCommand.js.map
