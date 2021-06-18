import { __extends } from "tslib";
import { DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEnvironmentStatusCommand,
  serializeAws_json1_1DescribeEnvironmentStatusCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets status information for an AWS Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentStatusCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentStatusCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DescribeEnvironmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentStatusCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentStatusCommand = /** @class */ (function (_super) {
  __extends(DescribeEnvironmentStatusCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeEnvironmentStatusCommand(input) {
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
  DescribeEnvironmentStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "DescribeEnvironmentStatusCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeEnvironmentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentStatusResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeEnvironmentStatusCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeEnvironmentStatusCommand(input, context);
  };
  DescribeEnvironmentStatusCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeEnvironmentStatusCommand(output, context);
  };
  return DescribeEnvironmentStatusCommand;
})($Command);
export { DescribeEnvironmentStatusCommand };
//# sourceMappingURL=DescribeEnvironmentStatusCommand.js.map
