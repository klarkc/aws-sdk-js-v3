import { __extends } from "tslib";
import { DescribeEnvironmentsRequest, DescribeEnvironmentsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEnvironmentsCommand,
  serializeAws_json1_1DescribeEnvironmentsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about AWS Cloud9 development environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DescribeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentsCommand = /** @class */ (function (_super) {
  __extends(DescribeEnvironmentsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeEnvironmentsCommand(input) {
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
  DescribeEnvironmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "DescribeEnvironmentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeEnvironmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeEnvironmentsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeEnvironmentsCommand(input, context);
  };
  DescribeEnvironmentsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeEnvironmentsCommand(output, context);
  };
  return DescribeEnvironmentsCommand;
})($Command);
export { DescribeEnvironmentsCommand };
//# sourceMappingURL=DescribeEnvironmentsCommand.js.map
