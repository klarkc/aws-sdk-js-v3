import { __extends } from "tslib";
import { DescribeComputeEnvironmentsRequest, DescribeComputeEnvironmentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeComputeEnvironmentsCommand,
  serializeAws_restJson1DescribeComputeEnvironmentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your compute environments.</p>
 *          <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
 *    operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances
 *    into.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeComputeEnvironmentsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeComputeEnvironmentsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeComputeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComputeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeComputeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeComputeEnvironmentsCommand = /** @class */ (function (_super) {
  __extends(DescribeComputeEnvironmentsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeComputeEnvironmentsCommand(input) {
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
  DescribeComputeEnvironmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "DescribeComputeEnvironmentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeComputeEnvironmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComputeEnvironmentsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeComputeEnvironmentsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeComputeEnvironmentsCommand(input, context);
  };
  DescribeComputeEnvironmentsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommand(output, context);
  };
  return DescribeComputeEnvironmentsCommand;
})($Command);
export { DescribeComputeEnvironmentsCommand };
//# sourceMappingURL=DescribeComputeEnvironmentsCommand.js.map
