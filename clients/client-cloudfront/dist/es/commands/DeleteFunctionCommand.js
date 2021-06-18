import { __extends } from "tslib";
import { DeleteFunctionRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteFunctionCommand,
  serializeAws_restXmlDeleteFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a CloudFront function.</p>
 * 		       <p>You cannot delete a function if it’s associated with a cache behavior. First, update your
 * 			distributions to remove the function association from all cache behaviors, then delete
 * 			the function.</p>
 * 		       <p>To delete a function, you must provide the function’s name and version
 * 			(<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code>
 * 			and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFunctionCommand = /** @class */ (function (_super) {
  __extends(DeleteFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteFunctionCommand(input) {
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
  DeleteFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteFunctionCommand(input, context);
  };
  DeleteFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteFunctionCommand(output, context);
  };
  return DeleteFunctionCommand;
})($Command);
export { DeleteFunctionCommand };
//# sourceMappingURL=DeleteFunctionCommand.js.map
